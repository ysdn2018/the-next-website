import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../components/Button'


// styled components
const Container = styled.div`

`

const Subtitle = styled.div`
  text-align: left;
`

const List = styled.ul`
`

const LinkContainer = styled.li`

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
          />
        ))}
      </List>

      <Button text="this is a button component" />

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
          }
        }
      } 
    }
  }
`;
