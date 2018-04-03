import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {P,A,H2,H3,H4} from '../components/Typography'

// styled-components
const Content = styled.div`
  p {
    max-width: 800px;
  }

  img {
    position: absolute;
    width: 100%;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4.5rem;
    line-height: 1.2;
    font-weight: normal;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: normal;
  }
`

const HeroImage = styled(Img)`
  height: 70vh;
`

const ProjectHeader = styled.div `
  padding: 10px;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const GraduateName = styled.div`
  width: 100%;
  align-items: flex-end;
`

const Categories = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const ContentContainer = styled.div`
  display: flex;
`

const LegendContainer = styled.div `
  flex: 1;
`

const Legend = styled.div `
  position: sticky;
  top: 50px;
  padding: 50px;
`

const InfoContainer = styled.div `
    width: 70%;
`

const Info = styled.div `
  width: 75%;
  margin: 50px auto;
  padding: 10px;
  white-space: pre-wrap;
`

// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <div>

      <ProjectHeader>

        <H2>{project.frontmatter.title}</H2>

        <ProjectInfo>
          <GraduateName>
            <H3>
              <Link href={`/graduates/${grad.replace(/\s+/g, "-").toLowerCase()}/`}>
                {grad}
              </Link>
            </H3>
          </GraduateName>

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
        </ProjectInfo>


      </ProjectHeader>

      <HeroImage sizes={project.frontmatter.image.childImageSharp.sizes}/>

      <ContentContainer>
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
      </ContentContainer>

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
