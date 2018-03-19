import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../components/Button'
import Img from 'gatsby-image'


// styled components
const Container = styled.div`

`

const Subtitle = styled.div`
  text-align: left;
`

const List = styled.ul`
  margin-bottom: 70px;
`

const LinkContainer = styled.li`
  margin-bottom: 1rem;
`

const LinkText = styled(Link)`
  font-style: italic;
  color: black;

  &:hover {
    text-decoration: none;
  }
`


// components
function PageLink(props) {
  return (
    <LinkContainer>
      
      <LinkText to={props.to}>
        {props.title}
        <Img resolutions={props.image} />
      </LinkText>
      
    </LinkContainer>
  )
}


// page component
export default function IndexPage({ data }) {
  const projects = data.projects.edges;
  const graduates = data.graduates.edges;

  return (
    <Container>
      <Subtitle>some kind of homepage will be here, in the mean time here is some content</Subtitle>

      <List>
        <h3>Graduates</h3>
        {graduates.map( ({ node: grad }, i) => (
          <PageLink
            to={grad.fields.slug}
            title={grad.frontmatter.title}
            key={grad.id}
            image={grad.frontmatter.image.childImageSharp.resolutions}
          />
        ))}
      </List>

      <List>
        <h3>Work</h3>
        {projects.map(({ node: project }, i) => (
          <PageLink
            to={project.fields.slug}
            title={project.frontmatter.title}
            key={project.id}
            image={project.frontmatter.image.childImageSharp.resolutions}
          />
        ))}
      </List>
    </Container>
  )
}

// data query
export const query = graphql`
  query IndexQuery {
    
    graduates: allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/graduates/"} } ) {
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
                resolutions(height: 50, width: 150) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      } 
    }
    projects: allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/work/"} } ) {
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
                resolutions(height: 50, width: 150) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      } 
    }
  }
`;
