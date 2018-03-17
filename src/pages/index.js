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
  const students = data.students.edges;

  return (
    <Container>
      <Subtitle>dynamic pages:</Subtitle>

      <List>
        <h3>Students</h3>
        {students.map( ({ node: student }, i) => (
          <PageLink
            to={student.fields.slug}
            title={student.frontmatter.title}
            key={student.id}
            image={student.frontmatter.image.childImageSharp.resolutions}
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
    
    students: allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/students/"} } ) {
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
    projects: allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/projects/"} } ) {
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
