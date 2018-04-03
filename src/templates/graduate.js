import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Statement from '../components/Statement'
import { spacing, breakpoints } from '../utils/constants'

// styled-components

// Profile Card

const Container = styled.div `
  display: flex;
  width: 100%;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    flex-direction: column;
  }

`

const ProfileContainer = styled.div `
  width: 30%;
  height: 100%;
  position: sticky;
  top: ${spacing.bigger + spacing.small}px;
  height: calc(100vh - ${spacing.bigger + spacing.small*2}px);
  margin: ${spacing.small}px;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    top: ${spacing.small}px;
    width: 100%;
    position: relative;
  }

`

const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid;
`

const NameContainer = styled.div `
  border-bottom: 1px solid;
  align-items: center;
`

const Name = styled.h3 `
  padding: ${spacing.smaller}px;
`

const PhotoContainer = styled.div `
  height: 50%;
  object-fit: fill;

  image {
      object-fit: cover;
  }
`

const SocialContainer = styled.div `
  width: 100%;
  height: 10%;
`

const Social = styled.div `
  border-top: 1px solid;
  padding: ${spacing.smaller}px;

  a {
    margin-right: ${spacing.small}px;
  }
`

// Content

const InfoContainer = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
`

const Info = styled.div `
  width: 75%;
  max-width: 900px;
  margin: 50px auto;
  padding: 10px;
  white-space: pre-wrap;

  h4 {
    margin-bottom: -10px;
  }
`
const About = styled.div `
  margin-bottom: 50px;
`

const Question = styled.div `
  margin-bottom: 50px;
`

const Projects = styled.div`
  margin-top: 100px;

  h2 {
    margin-bottom: 20px;
  }
`

const Project = styled.div`
  border: 1px solid;
  margin-bottom: 30px;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 10px;
  }
`

// page template component

export default function Graduate({ data }) {
  const graduate = data.markdownRemark;

  return (
    <Container>

      <ProfileContainer>
        <Profile>

          <NameContainer>
            <Name>
              {graduate.frontmatter.title}
            </Name>
          </NameContainer>

          <PhotoContainer>
            <Img sizes={graduate.frontmatter.headshot.childImageSharp.sizes} className="image"/>
          </PhotoContainer>

          <Statement
              verb = {graduate.frontmatter.verb}
              noun = {graduate.frontmatter.noun}
          />

          <SocialContainer>
            <Social>
              {graduate.frontmatter.website && (
                  <a href={graduate.frontmatter.website}>Website</a>
              )}
              {graduate.frontmatter.email && (
                  <a href={graduate.frontmatter.email}>Email</a>
              )}
              {graduate.frontmatter.twitter && (
                  <a href={graduate.frontmatter.instagram}>Instagram</a>
              )}
              {graduate.frontmatter.twitter && (
                  <a href={graduate.frontmatter.twitter}>Twitter</a>
              )}
              {graduate.frontmatter.linkedin && (
                  <a href={graduate.frontmatter.linkedin}>LinkedIn</a>
              )}
            </Social>
          </SocialContainer>

        </Profile>
      </ProfileContainer>

      <InfoContainer>
        <Info>
          <About>
            <h2>About</h2>
            <p>{graduate.frontmatter.intro}</p>
          </About>

          <About>
            {graduate.frontmatter.music && (
              <Question>
                <h4>Listening To</h4>
                <p>{graduate.frontmatter.music}</p>
              </Question>
            )}

            {graduate.frontmatter.tools && (
              <Question>
                <h4>Favourite Tools</h4>
                <p>{graduate.frontmatter.tools}</p>
              </Question>
            )}

            {graduate.frontmatter.watch && (
              <Question>
                <h4>Currently Watching</h4>
                <p>{graduate.frontmatter.watch}</p>
              </Question>
            )}

            {graduate.frontmatter.typeface && (
              <Question>
                <h4>Favourite Typefaces</h4>
                <p>{graduate.frontmatter.typeface}</p>
              </Question>
            )}
          </About>

          <Projects>
            <h2>Projects</h2>

            {data.projects ? data.projects.edges.map(({ node: project }) => (
                <Project key={project.id}>
                  <Img sizes={project.frontmatter.image.childImageSharp.sizes} className="image" />
                  <a href={project.fields.slug}>{project.frontmatter.title}</a>
                </Project>
            )) : (
              <h4>This student has no projects :( </h4>
            )}
          </Projects>
        </Info>

      </InfoContainer>

    </Container>
  );
};


// template query
export const aboutPageQuery = graphql`
  query GraduatePage($slug: String!, $name: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        noun
        verb
        intro
        music
        tools
        watch
        typeface
        twitter
        instagram
        linkedin
        email
        website
        headshot {
          childImageSharp {
            sizes(maxWidth: 700, quality: 90) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

    projects: allMarkdownRemark(filter: { frontmatter: { graduate: { eq: $name }}}) {
      edges {
        node {
          id
          fields {
            slug
          }

          frontmatter {
            title
            image {
              childImageSharp {
                sizes(maxWidth: 1000, quality: 90, maxHeight: 600, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
