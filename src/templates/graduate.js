import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Statement from '../components/Statement'
import {A} from '../components/Typography'


// styled-components
const Container = styled.div`
`;

const Profile = styled.div`
  border: 1px solid black;
  width: 25%;
  height: 93%;
  position: fixed;
  margin: 15px;
  float: left;

  h2 {
    padding: 10px;
    text-transform: uppercase;
  }

  .image {
    width: 100%;
    border-bottom: 1px solid;
    object-fit: cover;
  }

`

const Name = styled.h2 `
  border-bottom: 1px solid;
`

const Social = styled.div `
  border-top: 1px solid;
  padding: 10px;

  A {
    margin-right: 5px;
  }

`

const Info = styled.div `
  width: 70%;
  margin: 15px 15px 200px 15px;
  padding: 10px;
  float: right;

  h2, h3 {
    text-transform: uppercase;
  }

`
const About = styled.div `
  margin-bottom: 50px;
`
const Question = styled.div `
  margin-bottom: 30px;

  h3 {
    margin-bottom: -10px;
  }
`

const Projects = styled.div`
`

const Project = styled.div`
`

// page template component

export default function Post({ data }) {
  const graduate = data.markdownRemark;

  return (
    <Container>

      <Profile>
        <Name>{graduate.frontmatter.title}</Name>
        <Img sizes={graduate.frontmatter.image.childImageSharp.sizes} className="image"/>
        <h2>{graduate.frontmatter.verb} The Next {graduate.frontmatter.noun}</h2>
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

      <Info>

        <About>
          <h2>About</h2>
          <p>{graduate.frontmatter.intro}</p>
        </About>

        <About>
          {graduate.frontmatter.music && (
            <Question>
              <h3>Listening To</h3>
              <p>{graduate.frontmatter.music}</p>
            </Question>
          )}

          {graduate.frontmatter.tools && (
            <Question>
              <h3>Favourite Tools</h3>
              <p>{graduate.frontmatter.tools}</p>
            </Question>
          )}

          {graduate.frontmatter.watch && (
            <Question>
              <h3>Currently Watching</h3>
              <p>{graduate.frontmatter.watch}</p>
            </Question>
          )}

          {graduate.frontmatter.typeface && (
            <Question>
              <h3>Favourite Typefaces</h3>
              <p>{graduate.frontmatter.typeface}</p>
            </Question>
          )}
        </About>


        <Projects>
          <h2>Projects</h2>

          {data.projects ? data.projects.edges.map(({ node: project }) => (
            <Project key={project.id}>
              <Img sizes={project.frontmatter.image.childImageSharp.sizes} className="image" />
              <Link to={project.fields.slug}>go to project -></Link>
              <h2>{project.frontmatter.title}</h2>
            </Project>
          )) : (
            <h4>This student has no projects :( </h4>
          )}
        </Projects>

      </Info>




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
        image {
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
            image {
              childImageSharp {
                sizes(maxWidth: 800, quality: 90, maxHeight: 300) {
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
