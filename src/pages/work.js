import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { spacing, breakpoints } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import GridStatement from '../components/GridStatement'
import Project from '../components/Project'
import SearchField from '../components/SearchField'
import Toolbar from '../components/Toolbar'

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const ProjectGrid = styled.div`
  display: grid;
  margin-right: -1px;
  padding-bottom: ${spacing.big + 2}px;

  grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, 1fr);
  }
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

    const filteredSearch = shuffleArray(filteredCategory.filter(({ node: project }) => {
      return project.frontmatter.graduate.toLowerCase().indexOf(this.state.search) !== -1 ||
        project.frontmatter.title.toLowerCase().indexOf(this.state.search) !== -1;
    }));


    return (
      <PageContainer>
        {/* <StatementHeader
          verb="Explore"
          noun="project"
          height="30vh"
        /> */}

        <Helmet title="THE NEXT | WORK"/>

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
          <GridStatement />
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
