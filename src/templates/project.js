import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing, breakpoints } from '../utils/constants'
import Project from '../components/Project'

// styled-components
const Content = styled.div`
  p {
    max-width: 800px;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4.5rem;
    line-height: 1.2;
    font-weight: normal;
    margin: ${spacing.smaller}px
  }

  h2 {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: -${spacing.medium}px;
  }

  .gatsby-resp-image-wrapper {
    line-height: 0;
  }

  .gatsby-resp-image-background-image {
    height: 0 !important;
  }

  .gatsby-resp-image-image {
    height: auto !important;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {

    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

  }

`

const HeroImage = styled(Img)`
  height: 70vh;
`

const ProjectHeader = styled.div `
  padding: 0 ${spacing.smaller}px;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    line-height: 1.1;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    justify-content: flex-start;
  }

`

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

const GraduateName = styled.div`
  width: 100%;
`

const Categories = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 100%;

  h4 {
    margin-left:${spacing.medium}px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    justify-content: flex-start;

    h4 {
      margin-left: 0;
      margin-right:${spacing.medium}px;
      margin-bottom: ${spacing.smaller}px
    }
  }
`

const ContentContainer = styled.div`
  display: flex;
`

const LegendContainer = styled.div `
  flex: 1;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    display: none;
  }
`

const Legend = styled.div `
  position: sticky;
  top: ${spacing.bigger}px;
  margin: ${spacing.medium}px;
  padding: ${spacing.bigger}px;
`

const InfoContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: ${breakpoints.tablet} ) {
      width: 100%;
    }
`

const Info = styled.div `
  width: 75%;
  margin: ${spacing.bigger}px auto;
  padding: ${spacing.smaller}px;
  white-space: pre-wrap;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    width: calc(100% - ${spacing.medium}px);
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
              <Link to={`/graduates/${grad.replace(/[^0-9a-zA-Z\s'\-]+/g, "").replace(/[\'\s]+/g, "-").toLowerCase()}/`}>
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
        {project.headings.length > 0 && (
          <LegendContainer>
            <Legend>
              {project.headings.map(heading =>
                <h4>{heading.value}</h4>
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
