import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing, breakpoints } from '../utils/constants'

// styled-components
const Content = styled.div`
  p {
    max-width: 800px;
  }

  img {
    width: auto;
    height: auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4.5rem;
    line-height: 1.2;
    font-weight: normal;
  }

  h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: normal;
    margin-bottom: -${spacing.medium}px;
  }
`

const HeroImage = styled(Img)`
  height: 70vh;
`

const ProjectHeader = styled.div `
  padding: ${spacing.smaller}px;
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
  justify-content: space-between;
`

const ContentContainer = styled.div`
  display: flex;

`

const LegendContainer = styled.div `
  flex: 1;

  @media screen and (max-width: ${breakpoints.mobile} ) {
    display: none;
  }
`

const Legend = styled.div `
  position: sticky;
  top: ${spacing.bigger}px;
  padding: ${spacing.bigger}px;
`

const InfoContainer = styled.div `
    width: 70%;

    @media screen and (max-width: ${breakpoints.mobile} ) {
      width: 100%
    }
`

const Info = styled.div `
  width: 75%;
  margin: ${spacing.bigger}px auto;
  padding: ${spacing.smaller}px;
  white-space: pre-wrap;

  @media screen and (max-width: ${breakpoints.mobile} ) {
    width: 90%;
  }

`

// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <div>

      <ProjectHeader>

        <h1>{project.frontmatter.title}</h1>

        <ProjectInfo>
          <GraduateName>
            <h3>
              <Link href={`/graduates/${grad.replace(/\s+/g, "-").toLowerCase()}/`}>
                {grad}
              </Link>
            </h3>
          </GraduateName>

          <Categories>
            {project.frontmatter.category && (
              <h4>{project.frontmatter.category}</h4>
            )}

            {project.frontmatter.category2 && (
              <h4>{project.frontmatter.category2}</h4>
            )}

            {project.frontmatter.category3 && (
              <h4>{project.frontmatter.category3}</h4>
            )}
          </Categories>
        </ProjectInfo>


      </ProjectHeader>

      <HeroImage sizes={project.frontmatter.image.childImageSharp.sizes}/>

      <ContentContainer>
        {project.headings !== [] && (
          <LegendContainer>
            <Legend>
              {project.headings.map(heading =>
                <h3>{heading.value}</h3>
              )}
            </Legend>
          </LegendContainer>
        )}

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
      headings {
        value
        depth
      }
      html
      frontmatter {
        title
        graduate
        category
        category2
        category3
        image {
              childImageSharp {
                sizes(maxWidth: 1500, maxHeight: 1000, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
      }
    }
  }
`;
