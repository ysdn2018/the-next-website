import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import SectionHeading from '../components/SectionHeading'
import Graduate from '../components/Graduate'


const GradsGrid = styled.div`
  ${'' /* display: flex;
  flex-wrap: wrap; */}

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  div:nth-child(3n+0) .image div {
    background-color: pink !important;
    display: none;
  }

  &:nth-child(3) {
    background-color: pink !important;
    display: none;
  }
`;

const SearchField = styled.input`
  
`;


// page component
export default class Graduates extends React.Component {

  state = {
    search: ""
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value.toLowerCase()
    })
  }

  render() {
    const grads = this.props.data.allMarkdownRemark.edges;
    const filteredGrads = grads.filter(({ node: grad }) => {
      return grad.frontmatter.title.toLowerCase().indexOf(this.state.search) !== -1;
    });

    return (
      <PageContainer>
        <h1>Wow look at all these cool grads</h1>
        <p>grads page</p>

        <SearchField
          type="text" 
          placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch}
        /> 

        <GradsGrid>
          {filteredGrads.map(({ node: grad }) => (
            <Graduate
              path={grad.fields.slug}
              key={grad.id}
              image={grad.frontmatter.headshot.childImageSharp.sizes}
              imageHover={grad.frontmatter.headshotHover.childImageSharp.sizes}
              link={grad.fields.slug}
              title={grad.frontmatter.title}
            />
          ))}
        </GradsGrid>

      </PageContainer>
    )
  }
}

// data query
export const query = graphql`
  query GradsQuery {
    allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/graduates/"} },
    sort: {fields: [frontmatter___title], order: ASC} ) {
      edges {
        node {
          id

          fields {
            slug
          }
          frontmatter {
            title
            headshot {
              childImageSharp {
                sizes(maxHeight: 250, maxWidth: 200, quality: 75, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
            headshotHover {
              childImageSharp {
                sizes(maxHeight: 250, maxWidth: 200, quality: 75, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      } 
    }
  }
`;
