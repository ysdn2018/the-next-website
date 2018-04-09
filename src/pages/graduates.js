import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing, breakpoints } from '../utils/constants'

import GridStatement from '../components/GridStatement'
import PageContainer from '../components/PageContainer'
import Graduate from '../components/Graduate'
import StatementHeader from '../components/StatementHeader'
import SearchField from '../components/SearchField'
import Toolbar from '../components/Toolbar'

const GradsGrid = styled.div`
  ${'' /* display: flex;
  flex-wrap: wrap; */}

  display: grid;
  margin-right: -1px;
  padding: ${spacing.big + 2}px 0;
  grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));

  @media screen and (max-width: ${breakpoints.tablet} ) {
    display: block;
  }

  a .image div {
    background-color: #eee !important;
  }

  div:nth-child(4n-3) .image div  {
    background-color: #FF3200 !important;
    opacity: 1 !important;
  }

  div:nth-child(4n-2) .image div  {
    background-color: #FFE000 !important;
    opacity: 1 !important;
  }

  div:nth-child(4n-1) .image div  {
    background-color: #00B919 !important;
    opacity: 1 !important;
  }

  div:nth-child(4n) .image div  {
    background-color: #233CE1 !important;
    opacity: 1 !important;
  }

  div:hover img {
      display: none;
  }


`;


// page component
export default class Graduates extends React.Component {

  state = {
    search: ""
  }

  updateSearch = (e) => {
    let inputValue = e.target.value.toLowerCase() || "";

    this.setState({
      search: inputValue,
    })
  }

  render() {
    const grads = this.props.data.allMarkdownRemark.edges;
    const filteredGrads = grads.filter(({ node: grad }) => {
      return grad.frontmatter.title.toLowerCase().indexOf(this.state.search) !== -1;
    });

    return (
      <PageContainer scrollbar>
        {/* <StatementHeader
          verb="Meet"
          noun="Graduates"
          height="30vh"
        /> */}

        <Helmet title="THE NEXT | GRADUATES"/>

        <Toolbar>
          <SearchField
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </Toolbar>


        <GradsGrid>
          <GridStatement
            verb="Meet"
            noun="Graduates"
            grads
          />
          {filteredGrads.map(({ node: grad }) => (
            <Graduate
              path={grad.fields.slug}
              key={grad.id}
              image={grad.frontmatter.headshot.childImageSharp.resolutions}
              // imageHover={grad.frontmatter.headshotHover.childImageSharp.resolutions}
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
                resolutions(width: 50, height: 75, quality: 75, cropFocus: NORTH) {
                  ...GatsbyImageSharpResolutions_noBase64
                }
              }
            }

          }
        }
      }
    }
  }
`;


/*

            headshotHover {
              childImageSharp {
                resolutions(height: 300, width: 250, quality: 75, cropFocus: CENTER) {
                  ...GatsbyImageSharpResolutions_noBase64
                }
              }
            }

*/
