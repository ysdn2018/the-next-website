import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import Graduate from '../components/Graduate'
import StatementHeader from '../components/StatementHeader'
import SearchField from '../components/SearchField'
import Toolbar from '../components/Toolbar'

const GradsGrid = styled.div`
  ${'' /* display: flex;
  flex-wrap: wrap; */}

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));


  a .image div {
    background-color: #eee !important;
  }

  a:nth-child(4n-3) .image div {
    background-color: #FF3200 !important;
  }

  a:nth-child(4n-2) .image div {
    background-color: #FFE000 !important;
  }

  a:nth-child(4n-1) .image div {
    background-color: #00B919 !important;
  }

  a:nth-child(4n) .image div {
    background-color: #233CE1 !important;
  }


`;


// page component
export default class Graduates extends React.Component {

  state = {
    search: ""
  }

  updateSearch = (e) => {
    let inputValue = e.target.value || "";

    this.setState({
      search: inputValue,
    })
  }

  render() {
    console.log("GRADUATES PAGE");
    
    const grads = this.props.data.allMarkdownRemark.edges;
    // const filteredGrads = grads.filter(({ node: grad }) => {
    //   return grad.frontmatter.title.toLowerCase().indexOf(this.state.search) !== -1;
    // });
    const filteredGrads = grads;

    return (
      <PageContainer scrollbar>
        <StatementHeader
          verb="Meet"
          noun="Graduates"
          height="30vh"
        />

        <Toolbar>
          <SearchField
            value={this.state.search}
            onChange={this.updateSearch}
          /> 
        </Toolbar>
        

        <GradsGrid>
          {filteredGrads.map(({ node: grad }) => (
            <Graduate
              path={grad.fields.slug}
              key={grad.id}
              image={grad.frontmatter.headshot.childImageSharp.sizes}
              imageHover={grad.frontmatter.headshotHover.childImageSharp.sizes}
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
                  ...GatsbyImageSharpSizes
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
