import React from 'react'
import styled from 'styled-components'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import SectionHeading from '../components/SectionHeading'
import Project from '../components/Project'



const ProjectGrid = styled.div`
  ${'' /* display: flex;
  flex-wrap: wrap; */}


  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
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
      let projCategories = [project.frontmatter.category];

      if (project.frontmatter.category2)
        projCategories.push(project.frontmatter.category2)
      if (project.frontmatter.category3)
        projCategories.push(project.frontmatter.category3)

      console.log(projCategories);

      
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
        <h1>Work</h1>
        <p>Welcome to the work page</p>

        <Button onClick={() => this.updateCategory("")}>All</Button>
        <Button onClick={() => this.updateCategory("UI/UX")}>UI/UX</Button>
        <Button onClick={() => this.updateCategory("Product Design")} >Product Design</Button>
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
