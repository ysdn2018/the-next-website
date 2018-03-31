import React from 'react'
import styled from 'styled-components'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import SectionHeading from '../components/SectionHeading'
import Project from '../components/Project'



const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SearchField = styled.input`

`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: none;

`

// page component
export default class Work extends React.Component {
  state = {
    search: "",
    category: ""
  }

  updateCategory = (e) => {
    this.setState({
      category: e
    })
  }


  updateSearch = (e) => {
    this.setState({
      search: e.target.value.toLowerCase(),
    })
  }

  render() {
    const projects = this.props.data.allMarkdownRemark.edges;
    const filteredCategory = projects.filter(({node: project}) => {
      return project.frontmatter.category.indexOf(this.state.category) !== -1 ;
    });
    const filteredSearch = filteredCategory.filter(({ node: project }) => {
      return project.frontmatter.graduate.toLowerCase().indexOf(this.state.search) !== -1 ||
        project.frontmatter.title.toLowerCase().indexOf(this.state.search) !== -1;
    });


    return (
      <PageContainer>
        <h1>Work</h1>
        <p>Welcome to the work page</p>

        <button onClick={() => this.updateCategory("")}>All</button>
        <button onClick={() => this.updateCategory("UI/UX")}>UI/UX</button>
        <button onClick={() => this.updateCategory("Product Design")} >Product Design</button>
        <br/><br/>
        <SearchField
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch}
        />

        <ProjectGrid>
          {filteredSearch.map(({ node: project }) => (
            <Project
              title={project.frontmatter.title}
              image={project.frontmatter.image.childImageSharp.resolutions}
              path={project.fields.slug}
              graduate={project.frontmatter.graduate}
              key={project.id}
            />
          ))}
        </ProjectGrid>

      </PageContainer>
    )
  }

}

// data query
export const query = graphql`
  query WorkQuery {
    allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/work/"} } ) {
      edges {
        node {
          id

          fields {
            slug
          }
          frontmatter {
            title
            graduate
            category
            category2
            category3
            image {
              childImageSharp {
                resolutions(height: 200, width: 198, quality: 80, cropFocus: CENTER) {
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
