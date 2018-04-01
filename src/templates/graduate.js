import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Statement from '../components/Statement'
import {P,A,H1,H2,H3,H4} from '../components/Typography'

// styled-components

// Profile Card

const ProfileContainer = styled.div `
  height: 92%;
  width: 20%;
  float: left;
  position: fixed;
`

const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  border: 1px solid;

  .image {
    border-bottom: 1px solid;
    object-fit: cover;
  }
`

const Name = styled.h2 `
  border-bottom: 1px solid;
  padding: 5px;
`

const Social = styled.div `
  border-top: 1px solid;
  padding: 5px;

  A {
    margin-right: 5px;
  }
`

// Content

const InfoContainer = styled.div `
    width: 75%;
    float: right;
`

const Info = styled.div `
  width: 75%;
  max-width: 900px;
  margin: 15px auto;
  padding: 10px;
  white-space: pre-wrap;

  p {
    font-size: 2.5rem;
    line-height: 1.5;
  }

`
const About = styled.div `
  margin-bottom: 50px;

  H1 {
    margin-bottom: -20px;
  }

`

const Question = styled.div `
  margin-bottom: 30px;

  H4 {
    margin-bottom: -10px;
  }
`

const Projects = styled.div`
`

const Project = styled.div`
  border: 1px solid;
  margin-bottom: 30px;

  A {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 10px;
  }
`

// page template component

export default function Post({ data }) {
  const graduate = data.markdownRemark;

  return (
    <div>

      <ProfileContainer>
        <Profile>
          <Name>
            <H3>{graduate.frontmatter.title}</H3>
          </Name>
          <Img sizes={graduate.frontmatter.headshot.childImageSharp.sizes} className="image"/>
          <Statement
            verb = {graduate.frontmatter.verb}
            noun = {graduate.frontmatter.noun}
          />
          <Social>
            {graduate.frontmatter.website && (
                <A href={graduate.frontmatter.website}>Website</A>
            )}
            {graduate.frontmatter.email && (
                <A href={graduate.frontmatter.email}>Email</A>
            )}
            {graduate.frontmatter.twitter && (
                <A href={graduate.frontmatter.instagram}>Instagram</A>
            )}
            {graduate.frontmatter.twitter && (
                <A href={graduate.frontmatter.twitter}>Twitter</A>
            )}
            {graduate.frontmatter.linkedin && (
                <A href={graduate.frontmatter.linkedin}>LinkedIn</A>
            )}
          </Social>
        </Profile>
      </ProfileContainer>

      <InfoContainer>
        <Info>
          <About>
            <H2>About</H2>
            <P>{graduate.frontmatter.intro}</P>
          </About>

          <About>
            {graduate.frontmatter.music && (
              <Question>
                <H4>Listening To</H4>
                <P>{graduate.frontmatter.music}</P>
              </Question>
            )}

            {graduate.frontmatter.tools && (
              <Question>
                <H4>Favourite Tools</H4>
                <P>{graduate.frontmatter.tools}</P>
              </Question>
            )}

            {graduate.frontmatter.watch && (
              <Question>
                <H4>Currently Watching</H4>
                <P>{graduate.frontmatter.watch}</P>
              </Question>
            )}

            {graduate.frontmatter.typeface && (
              <Question>
                <H4>Favourite Typefaces</H4>
                <P>{graduate.frontmatter.typeface}</P>
              </Question>
            )}
          </About>

          <Projects>
            <H2>Projects</H2>

            {data.projects ? data.projects.edges.map(({ node: project }) => (
                <Project key={project.id}>
                  <Img sizes={project.frontmatter.image.childImageSharp.sizes} className="image" />
                  <A href={project.fields.slug}>{project.frontmatter.title}</A>
                </Project>
            )) : (
              <h4>This student has no projects :( </h4>
            )}
          </Projects>
        </Info>

      </InfoContainer>

    </div>
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
                sizes(maxWidth: 1000, quality: 90, maxHeight: 520, cropFocus: CENTER) {
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
