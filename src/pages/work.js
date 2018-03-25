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


// page component
export default function Work({ data }) {
  const projects = data.allMarkdownRemark.edges;

  return (
    <PageContainer>
      <h1>Work</h1>
      <p>Welcome to the work page</p>

      <ProjectGrid>
        {projects.map(({ node: project }) => (
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
                resolutions(height: 200, width: 198, quality: 80, duotone: { highlight: "#0ec4f1", shadow: "#192550" }) {
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
