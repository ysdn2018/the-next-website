import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {P,A,H2,H3,H4} from '../components/Typography'

// styled-components
const Content = styled.div`
  p {
    max-width: 800px;
    font-size: 2.8rem;
  }
`

const HeroImage = styled(Img)`
  height: 60vh;
`

const ProjectHeader = styled.div `
  padding: 10px;
  width: 100%;
`

const Categories = styled.div `
  display: inline-grid;
`

const LegendContainer = styled.div `
  width: 30%;
  float: left;
`

const Legend = styled.div `
`

const InfoContainer = styled.div `
    width: 70%;
    float: right;
`

const Info = styled.div `
  width: 75%;
  margin: 15px auto;
  padding: 10px;
  white-space: pre-wrap;

  img {
    width: 100%;
  }
`

// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <div>

      <ProjectHeader>

        <H2>{project.frontmatter.title}</H2>
        <H3>
          <A href={`/graduates/${grad.replace(/\s+/g, "-").toLowerCase()}/`}>
            {grad}
          </A>
        </H3>

        <Categories>
          {project.frontmatter.category && (
            <H4>{project.frontmatter.category}</H4>
          )}

          {project.frontmatter.category2 && (
            <H4>{project.frontmatter.category2}</H4>
          )}

          {project.frontmatter.category3 && (
            <H4>{project.frontmatter.category3}</H4>
          )}
        </Categories>

      </ProjectHeader>

      <HeroImage sizes={project.frontmatter.image.childImageSharp.sizes}/>

      <LegendContainer>
        <Legend>
            <H3>Heading One</H3>
            <H3>Heading Two</H3>
            <H3>Heading Three</H3>
            <H3>Heading Four</H3>
        </Legend>
      </LegendContainer>

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
        category
        category2
        category3
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
