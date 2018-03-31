import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {A,H2,H3,H4} from '../components/Typography'

// styled-components
const Content = styled.div`
  p {
    max-width: 500px;
  }
`

const HeroImage = styled(Img)`
  height: 100vh;
`
const ProjectContainer = styled.div `
  height: 92%;
  width: 25%;
  float: left;
  position: fixed;
  z-index: 100;
`

const ProjectInfo = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  border: 1px solid;
`

const Legend = styled.div `
  border-top: 1px solid;
`

const InfoContainer = styled.div `
    width: 75%;
    float: right;
`

const Info = styled.div `
  width: 75%;
  margin: 15px auto;
  padding: 10px;
  white-space: pre-wrap;
`

// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <div>

      <ProjectContainer>
        <ProjectInfo>
          <H4>{project.frontmatter.title}</H4>
          <H4>
            <Link to={`/graduates/${grad.replace(/\s+/g, "-").toLowerCase()}/`}>
              {grad}
            </Link>
          </H4>
          <Legend></Legend>
        </ProjectInfo>
      </ProjectContainer>

      <HeroImage sizes={project.frontmatter.image.childImageSharp.sizes}/>

      <InfoContainer>
        <Info>
            <Content dangerouslySetInnerHTML={{ __html: project.html }}/>
        </Info>
      </InfoContainer>

    </div>
  );
};


// template query
export const aboutPageQuery = graphql`
  query ProjectPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        graduate

        image {
              childImageSharp {
                sizes(maxWidth: 1500, quality: 90, maxHeight: 600, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
      }
    }
  }
`;
