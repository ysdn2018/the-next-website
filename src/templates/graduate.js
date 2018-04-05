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
  width: 28%;
  height: 100%;
  position: sticky;
  top: ${spacing.bigger + spacing.small}px;
  height: calc(100vh - ${spacing.bigger + spacing.small*2}px);
  margin: ${spacing.small}px;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    top: 0;
    padding-right: ${spacing.small}px;
    width: 100%;
    height: calc(90vh - ${spacing.bigger + spacing.small*2}px);
    position: relative;
  }

`

const Profile = styled.div`
  width: calc(100% - ${spacing.small}px);;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid;
`

const Name = styled.h3 `
  padding: ${spacing.smaller}px;
  border-bottom: 1px solid;
  line-height: 1.2;
`

const ProfileImage = styled.div `
  overflow: hidden;
  object-fit: cover;
`

const Social = styled.div `
  border-top: 1px solid;
  padding: ${spacing.smaller}px;
  display: flex;
  flex-wrap: wrap;
  flex: none;

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
  margin: ${spacing.bigger}px auto;
  padding: ${spacing.smaller}px;
  white-space: pre-wrap;

  h4 {
    margin-bottom: -${spacing.small}px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    width: calc(100% - ${spacing.medium}px);
  }
`
const About = styled.div `
  margin-bottom: ${spacing.bigger}px;
`

const Question = styled.div `
  margin-bottom: ${spacing.bigger}px;
`

const Projects = styled.div`
  margin-top: ${spacing.bigger*2}px;

  h2 {
    margin-bottom: ${spacing.medium}px;
  }
`

const Project = styled.div`
  border: 1px solid;
  margin-bottom: ${spacing.big}px;

  a {
    font-size: calc(0.5vw + 1.2rem);
    padding: ${spacing.smaller}px;
  }
`

// page template component

export default function Graduate({ data }) {
  const graduate = data.markdownRemark;

  return (
    <Container>

      <ProfileContainer>
        <Profile>
          <Name>{graduate.frontmatter.title}</Name>
          <ProfileImage>
            <Img
              sizes={graduate.frontmatter.headshot.childImageSharp.sizes}
              outerWrapperClassName="outer-wrapper"
              className="image"
            />
          </ProfileImage>
          <Statement
              verb = {graduate.frontmatter.verb}
              noun = {graduate.frontmatter.noun}
          />
          <Social>
              {graduate.frontmatter.website && (
                  <a target="_blank" href={graduate.frontmatter.website}>Website</a>
              )}
              {graduate.frontmatter.email && (
                  <a target="_blank" href={"mailto:" + graduate.frontmatter.email}>Email</a>
              )}
              {graduate.frontmatter.twitter && (
                  <a target="_blank" href={graduate.frontmatter.instagram}>Instagram</a>
              )}
              {graduate.frontmatter.twitter && (
                  <a target="_blank" href={graduate.frontmatter.twitter}>Twitter</a>
              )}
              {graduate.frontmatter.linkedin && (
                  <a target="_blank" href={graduate.frontmatter.linkedin}>LinkedIn</a>
              )}
          </Social>
        </Profile>
      </ProfileContainer>

      <InfoContainer>
        <Info>
          <About>
            <h2>About</h2>
            <p>{graduate.frontmatter.intro}</p>
          </About>

          <About>

            {graduate.frontmatter.hobbies && (
              <Question>
                <h4>Hobbies</h4>
                <p>{graduate.frontmatter.hobbies}</p>
              </Question>
            )}

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
                  <Link to ={project.fields.slug}>{project.frontmatter.title}</Link>
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
        hobbies
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

    projects: allMarkdownRemark(filter: { frontmatter: { graduate: { regex: $name }}}) {
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


