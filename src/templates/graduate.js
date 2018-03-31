import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Statement from '../components/Statement'
import {A,H2,H3, H4} from '../components/Typography'



// styled-components
const Container = styled.div`
`;

const Profile = styled.div`
  border: 1px solid black;
  width: 23%;
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
    height: 400px;
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
  bottom: 0;

  A {
    margin-right: 5px;
  }

`

const Info = styled.div `
  width: 70%;
  margin: 15px 15px 200px 15px;
  padding: 10px;
  float: right;
  white-space: pre-wrap;

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

      <Info>

        <About>
          <h2>About</h2>
          <p>{graduate.frontmatter.intro}</p>
        </About>

        <About>
          {graduate.frontmatter.music && (
            <Question>
              <H4>Listening To</H4>
              <p>{graduate.frontmatter.music}</p>
            </Question>
          )}

          {graduate.frontmatter.tools && (
            <Question>
              <H4>Favourite Tools</H4>
              <p>{graduate.frontmatter.tools}</p>
            </Question>
          )}

          {graduate.frontmatter.watch && (
            <Question>
              <H4>Currently Watching</H4>
              <p>{graduate.frontmatter.watch}</p>
            </Question>
          )}

          {graduate.frontmatter.typeface && (
            <Question>
              <H4>Favourite Typefaces</H4>
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
            image {
              childImageSharp {
                sizes(maxWidth: 1000, quality: 90, maxHeight: 300, cropFocus: CENTER) {
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
