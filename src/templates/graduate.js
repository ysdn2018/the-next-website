import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Statement from '../components/Statement'


// styled-components
const Container = styled.div`
`;

const Profile = styled.div`
  border: 1px solid black;
  width: 25%;
  height: 88%;
  position: fixed;
  margin: 15px;
  padding: 10px;

  h2 {
    text-transform: uppercase;
  }

  .image {
    width: 100%;
  }

`

const Info = styled.div `
  width: 60%;
  float: right;
  margin: 15px;
  padding: 10px;
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
        <h2>{graduate.frontmatter.title}</h2>
        <Img sizes={graduate.frontmatter.image.childImageSharp.sizes} className="image"/>
        <h2>{graduate.frontmatter.verb} The Next {graduate.frontmatter.noun}</h2>
      </Profile>

      <Info>
        <h2>About</h2>

        <Projects>
          {data.projects ? data.projects.edges.map(({ node: project }) => (
            <Project key={project.id}>
              <Img sizes={project.frontmatter.image.childImageSharp.sizes} className="image" />
              <Link to={project.fields.slug}>go to project -></Link>
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
                sizes(maxWidth: 600, quality: 90) {
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
