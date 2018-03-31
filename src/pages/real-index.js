import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../components/Button'
import Img from 'gatsby-image'
import StatementHeader from '../components/SectionHeading'


// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
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
      <StatementHeader
       />



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
