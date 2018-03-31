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

// page component
export default class Work extends React.Component {
  state = {
    search: ""
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value.toLowerCase()
    })
  }

  render() {
    const projects = this.props.data.allMarkdownRemark.edges;
    const filteredProjects = projects.filter(({ node: project }) => {
      return project.frontmatter.title.toLowerCase().indexOf(this.state.search) !== -1 ||
        project.frontmatter.graduate.toLowerCase().indexOf(this.state.search) !== -1;
    });


    return (
      <PageContainer>
        <h1>Work</h1>
        <p>Welcome to the work page</p>

        <SearchField
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch}
        /> 

        <ProjectGrid>
          {filteredProjects.map(({ node: project }) => (
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
            image {
              childImageSharp {
                resolutions(height: 200, width: 198, quality: 80) {
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
