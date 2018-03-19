import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import SectionHeading from '../components/SectionHeading'


const GradsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// page component
export default function Graduates({ data }) {
  const grads = data.allMarkdownRemark.edges;

  return (
    <PageContainer>
      <SectionHeading fixed title="Graduates"/>
      <h1>Wow look at all these cool grads</h1>
      <p>grads page</p>
      
      <GradsGrid>
        {grads.map(({ node: grad }) => (
          <Link to={grad.fields.slug} key={grad.id}>
            <Img resolutions={grad.frontmatter.image.childImageSharp.resolutions}/>
          </Link>
        ))}
      </GradsGrid>

    </PageContainer>
  )
}

// data query
export const query = graphql`
  query GradsQuery {
    allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/graduates/"} } ) {
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
                resolutions(height: 150, width: 150) {
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
