import React from 'react'
import styled from 'styled-components'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import StatementHeader from '../components/StatementHeader'
import Project from '../components/Project'
import SearchField from '../components/SearchField'
import Toolbar from '../components/Toolbar'


const ProjectGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
    ${'' /* grid-gap: ${spacing.bigger * 2}px; */}
    ${'' /* margin: ${spacing.bigger * 2}px; */}


  ${'' /* a:nth-child(4n-3)  {
    visibility: hidden;
  } */}

`

const FiltersContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  border-left: 1px solid black;
`

const StyledButton = styled.button`
  outline: none;
  border: none;
  text-transform: uppercase;
  background-color: transparent;
`

function FilterButton(props) {
  return(
    <StyledButton onClick={() => props.handleCategoryUpdate(props.category)}>
      {props.category || "All"}
    </StyledButton>
  )
}

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
    let inputValue = e.target.value.toLowerCase() || "";

    this.setState({
      search: inputValue,
    })
  }

  render() {
    const projects = this.props.data.allMarkdownRemark.edges;

    const filteredCategory = projects.filter(({node: project}) => {
      let projCategories = [project.frontmatter.category];

      if (project.frontmatter.category2)
        projCategories.push(project.frontmatter.category2)
      if (project.frontmatter.category3)
        projCategories.push(project.frontmatter.category3)

      for (let category of projCategories) {
        if (category.indexOf(this.state.category) === -1 )
          return false
      }

      return true;
    });

    const filteredSearch = filteredCategory.filter(({ node: project }) => {
      return project.frontmatter.graduate.toLowerCase().indexOf(this.state.search) !== -1 ||
        project.frontmatter.title.toLowerCase().indexOf(this.state.search) !== -1;
    });


    return (
      <PageContainer>
        {/* <StatementHeader
          verb="Explore"
          noun="project"
          height="30vh"
        /> */}

        <Toolbar>
          <SearchField
            value={this.state.search}
            onChange={this.updateSearch}
          />

          <FiltersContainer>
            <FilterButton handleCategoryUpdate={this.updateCategory} category="" />
            <FilterButton handleCategoryUpdate={this.updateCategory} category="UI/UX" />
            <FilterButton handleCategoryUpdate={this.updateCategory} category="Product Design"/>
            <FilterButton handleCategoryUpdate={this.updateCategory} category="Typography" />
            <FilterButton handleCategoryUpdate={this.updateCategory} category="Print" />
          </FiltersContainer>

        </Toolbar>

        <ProjectGrid>
          {filteredSearch.map(({ node: project }) => (
            <Project
              title={project.frontmatter.title}
              image={project.frontmatter.image.childImageSharp.sizes}
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
                sizes(maxHeight: 300, maxWidth: 300, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
