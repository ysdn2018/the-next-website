import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../components/Button'
import Img from 'gatsby-image'
import StatementHeader from '../components/StatementHeader'


// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
`


// page component
export default function IndexPage({ data }) {
  const graduates = data.allMarkdownRemark.edges;

  return (
    <Container>
      <StatementHeader
       />



    </Container>
  )
}

// data query
export const query = graphql`
  query IndexQuery {
    
    allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/graduates/"} } ) {
      edges {
        node {
          id

          fields {
            slug
          }
          frontmatter {
            title
            noun
            verb
          }
        }
      } 
    }

  }
`;
