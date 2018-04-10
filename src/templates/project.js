import React from 'react';
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing, breakpoints } from '../utils/constants'
import Project from '../components/Project'
import Statement from '../components/Statement'
import 'intersection-observer'

// styled-components
const Container = styled.div`
  padding-bottom: ${spacing.bigger-4}px;
  overflow-x: hidden;
`

const Content = styled.div`
  padding-bottom: 5rem;

  blockquote {
    font-style: italic;
    width: 100%;
    margin: 0;

    p {
      line-height: 1.3;
      font-size: 3rem;
    }

  }

  p img {
    max-width: 100%;
  }

  p {
    font-size: calc(0.3vw + 1.3rem);
    margin: 0;
  }

  img {
    margin: auto;
  }

  sup {
    font-size: 1.4rem;
    vertical-align: super;
    margin-left: 1rem;
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

    max-width: none !important;
    margin-left: -25% !important;
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
  flex: 1;
`

const Categories = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 100%;
  flex: 2;

  h4 {
    margin-left:${spacing.medium}px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    &:not(:first-child) {
      display: none;
    }
  }

`

const ContentContainer = styled.div`

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
    width: calc(100% - ${spacing.normal}px);
  }
`

const RelatedProjects = styled.div `
  display: flex;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {
    display: block;
  }
`

const ProjectContainer = styled.div `
  border-left: 1px solid;
  margin-left: -1px;
  flex: 1;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    &:last-child {
      display: none;
    }
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {
    ${'' /* width: 100%; */}
    border-bottom: 1px solid black;

    &:last-child {
      display: block;
    }
  }

`

const ImageContainer = styled.div `
  width: 100%;
  padding: 15%;

`

const TextContainer = styled.div `
  display: flex;
  padding: 0 ${spacing.small}px ${spacing.small}px ;

  justify-content: space-between;
  align-items: flex-end;
`

const Text = styled.p`
  z-index: 4;
  color: black;
  max-width: 400px;

  margin: 0.4rem;
  font-size: 1.4rem;
  line-height: 1.2;
  width: 100%;

&:first-of-type {
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
}

&:last-of-type {
  flex: 2;
  text-align: right;
}
`

const BottomSection = styled.div`

`;

const RelatedText = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  line-height: 1.3;

  h3, h4 {
    max-width: calc(100% - ${spacing.big}px);
    text-align: center;
    text-transform: none;
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {
    h3 {
      font-size: 2.2rem;
    }
  }
`;


// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <Container>

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
        <InfoContainer>
          <Info>
              <Content dangerouslySetInnerHTML={{ __html: project.html }}/>
          </Info>
        </InfoContainer>
      </ContentContainer>

      <BottomSection>

        <RelatedText>
          <h3>See more work like {project.frontmatter.title}</h3>
        </RelatedText>

        <RelatedProjects>

          {data.projectByStudent && data.projectByStudent.edges.map(({ node: otherProj }) =>

            <ProjectContainer>
              <Link to={otherProj.fields.slug}>

                <ImageContainer>
                  <Img sizes={otherProj.frontmatter.image.childImageSharp.sizes} />
                </ImageContainer>

                <TextContainer>
                  <Text>{otherProj.frontmatter.title.length > 15 ? (otherProj.frontmatter.title.slice(0, 15) + "…") : otherProj.frontmatter.title}</Text>
                  <Text>{otherProj.frontmatter.graduate}</Text>
                </TextContainer>

              </Link>
            </ProjectContainer>

          )}

          {data.projectsInCategory ? (data.projectsInCategory.edges.map(({ node: otherProj }) =>
            <ProjectContainer>
              <Link to={otherProj.fields.slug}>

                <ImageContainer>
                  <Img sizes={otherProj.frontmatter.image.childImageSharp.sizes} />
                </ImageContainer>

                <TextContainer>
                  <Text>{otherProj.frontmatter.title.length > 15 ? (otherProj.frontmatter.title.slice(0, 15) + "…") : otherProj.frontmatter.title}</Text>
                  <Text>{otherProj.frontmatter.graduate}</Text>
                </TextContainer>
              </Link>
            </ProjectContainer>
          )) : (data.projectsInSecondCategory.edges.map(({ node: otherProj }) =>
              <ProjectContainer>
                <Link to={otherProj.fields.slug}>

                  <ImageContainer>
                    <Img sizes={otherProj.frontmatter.image.childImageSharp.sizes} />
                  </ImageContainer>

                  <TextContainer>
                    <Text>{otherProj.frontmatter.title.length > 15 ? (otherProj.frontmatter.title.slice(0, 15) + "…") : otherProj.frontmatter.title}</Text>
                    <Text>{otherProj.frontmatter.graduate}</Text>
                  </TextContainer>
                </Link>
              </ProjectContainer>
          ))}
        </RelatedProjects>
      </BottomSection>


    </Container>
  );
};


// template query
export const aboutPageQuery = graphql`
  query ProjectPage($slug: String!, $graduate: String!, $graduateName: String!, $category: String!, $category2: String!, $title: String!) {
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

  projectsInCategory: allMarkdownRemark(
    filter: { frontmatter: { category: { regex: $category }, graduate: { ne: $graduateName }}},
    limit: 2
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            graduate

            image {
              childImageSharp {
                sizes(maxWidth: 600, maxHeight: 400, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }


  projectsInSecondCategory: allMarkdownRemark(
    filter: { frontmatter: { category: { regex: $category2 }, graduate: { ne: $graduateName }}},
    limit: 2
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            graduate

            image {
              childImageSharp {
                sizes(maxWidth: 600, maxHeight: 400, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }

  projectByStudent: allMarkdownRemark(
    filter: { frontmatter: { graduate: { regex: $graduate }, title: { ne: $title }}},
    limit: 1
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            graduate

            image {
              childImageSharp {
                sizes(maxWidth: 600, maxHeight: 400, quality: 90, cropFocus: CENTER) {
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
