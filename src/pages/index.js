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
  const pages = data.allMarkdownRemark.edges;

  return (
    <Container>
      <Subtitle>dynamic pages:</Subtitle>

      <List>
        {pages.map( ({ node: page }, i) => (
          <PageLink
            to={page.frontmatter.path}
            title={page.frontmatter.title}
            key={page.id}
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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
