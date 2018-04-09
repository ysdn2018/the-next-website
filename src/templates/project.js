import React from 'react';
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing, breakpoints } from '../utils/constants'
import Project from '../components/Project'

// styled-components
const Content = styled.div`
  padding-bottom: 5rem;

  blockquote {
    font-style: italic;
    width: 100%;
    margin: 0;

    p {
      font-size: 3rem;
    }

  }

  p {
    font-size: calc(0.3vw + 1.3rem);
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4.5rem;
    line-height: 1.2;
    font-weight: normal;
    margin: ${spacing.bigger}px 0 ${spacing.smaller}px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: -${spacing.medium}px;
  }

  a {
    text-decoration: underline;
  }

  .gatsby-resp-image-wrapper {
    line-height: 0;
    width: 150%;

    margin-left: -25% !important;
    max-width: none !important;
  }

  .gatsby-resp-image-background-image {
    height: 0 !important;
  }

  .gatsby-resp-image-image {
    height: auto !important;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {

    .gatsby-resp-image-wrapper {
      width: 100%;
      margin-left: 0 !important;
    }

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
  border-bottom: 1px solid black;
`

const ProjectHeader = styled.div `
  padding: ${spacing.small}px;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid black;

  h1 {
    margin: 0;
    line-height: 1;
  }

  h1, h3, h4, {
    margin: 0;
    line-height: 1;
    vertical-align: bottom;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {

    height: 100%;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

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

    &:not(:first-child) {
      display: none;
    }
    
  }
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`

const InfoContainer = styled.div `
    width: 100%;

    @media screen and (max-width: ${breakpoints.tablet} ) {
      width: 100%;
    }
`

const Info = styled.div `
  max-width: 800px;
  width: 75%;

  margin: ${spacing.bigger}px auto;
  padding: ${spacing.smaller}px;
  white-space: pre-wrap;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    width: calc(100% - ${spacing.medium}px);
  }

`

const RelatedProjects = styled.div `
  grid-template-columns: repeat(auto-fit, minmax(400px,2fr));
  display: grid;
  border: 1px solid;
`

// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <div>

      <Helmet title={`THE NEXT | ${project.frontmatter.title.toUpperCase()}`} />

      <ProjectHeader>

        <h1>{project.frontmatter.title}</h1>

        <ProjectInfo>
          <GraduateName>
            <Link to={`/graduates/${grad.replace(/[^0-9a-zA-Z\s'\-]+/g, "").replace(/[\'\s]+/g, "-").toLowerCase()}/`}>
              <h4>{grad}</h4>
            </Link>
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
        {false && (
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

      <RelatedProjects>

      </RelatedProjects>

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
