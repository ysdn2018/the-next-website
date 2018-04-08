import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Statement from '../components/Statement'
import { spacing, breakpoints } from '../utils/constants'

// styled-components

// Profile Card

const Container = styled.div `
  width: 100%;
  min-height: 100%;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    flex-direction: column;
  }

`

const InnerContainer = styled.div`
  display: flex;
  min-height: 100%;
`

const ProfileContainer = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  height: 80px;
  border-bottom: 1px solid black;

  .image {
    padding: 0 ${spacing.smaller}px;
    border-radius: 50%;
  }

  .outer-wrapper {
    height: 50px !important;
    padding: 0 ${spacing.small}px;
  }

`

const Profile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Name = styled.h3 `
  padding: 0 ${spacing.smaller}px;
  line-height: 1.2;
`

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.smaller}px;

  .image {
    border-radius: 50%;
  }
`

const Social = styled.div `
  padding: ${spacing.smaller}px;
  display: flex;
  flex-wrap: wrap;
  flex: none;

  a {
    margin-right: ${spacing.small}px;
  }

`


const Info = styled.div `
  flex: 1;
  width: 100%;
  min-height: 100%;
  max-width: 900px;
  white-space: pre-wrap;
  border-right: 1px solid black;
  padding-bottom: ${spacing.bigger}px;

  h4 {
    margin-bottom: -${spacing.small}px;
  }
`

const StatementWrapper = styled.div`
  padding: ${spacing.small}px ${spacing.smaller}px;
  border-bottom: 1px solid black;
  height: 200px;
`

const About = styled.div `
  padding: 0 ${spacing.normal}px 0 ${spacing.small}px;
  margin-bottom: ${spacing.bigger}px;
`

const Question = styled.div `
  margin-bottom: ${spacing.bigger}px;
`

const Projects = styled.div`
  width: 100%;
  flex: 2;
  padding-bottom: ${spacing.bigger*2}px;

  > h4 {
    margin: ${spacing.small}px;
  }

  h2 {
    margin-bottom: ${spacing.medium}px;
  }
`

const ProjectContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
`

const Project = styled.div`
  width: 100%;

  a {
    font-size: calc(0.5vw + 1.2rem);
    padding: ${spacing.smaller}px;
  }
`

const ProjectImageContainer = styled.div`
  width: 80%;
  margin: 10%;
`

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${spacing.smaller}px ${spacing.small}px;
`

// page template component

export default function Graduate({ data }) {
  const graduate = data.markdownRemark;

  return (
    <Container>

      <ProfileContainer>
        <Profile>

            <Img
              resolutions={graduate.frontmatter.headshot.childImageSharp.resolutions}
              outerWrapperClassName="outer-wrapper"
              className="image"
            />
  
          <Name>{graduate.frontmatter.title}</Name>
        </Profile>

          <Social>
              {graduate.frontmatter.website && (
                  <a target="_blank" href={graduate.frontmatter.website}>Website</a>
              )}
              {graduate.frontmatter.email && (
                  <a target="_blank" href={"mailto:" + graduate.frontmatter.email}>Email</a>
              )}
              {graduate.frontmatter.twitter && (
                  <a target="_blank" href={graduate.frontmatter.instagram}>Instagram</a>
              )}
              {graduate.frontmatter.twitter && (
                  <a target="_blank" href={graduate.frontmatter.twitter}>Twitter</a>
              )}
              {graduate.frontmatter.linkedin && (
                  <a target="_blank" href={graduate.frontmatter.linkedin}>LinkedIn</a>
              )}
          </Social>
        
      </ProfileContainer>

      <InnerContainer>

        <Info>
          <StatementWrapper>
            <Statement
              verb = {graduate.frontmatter.verb}
              noun = {graduate.frontmatter.noun}
            />
          </StatementWrapper>

          <About>
            <p>{graduate.frontmatter.intro}</p>
          </About>

          <About>
            {graduate.frontmatter.hobbies && (
              <Question>
                <h4>Hobbies</h4>
                <p>{graduate.frontmatter.hobbies}</p>
              </Question>
            )}

            {graduate.frontmatter.music && (
              <Question>
                <h4>Listening To</h4>
                <p>{graduate.frontmatter.music}</p>
              </Question>
            )}

            {graduate.frontmatter.tools && (
              <Question>
                <h4>Favourite Tools</h4>
                <p>{graduate.frontmatter.tools}</p>
              </Question>
            )}

            {graduate.frontmatter.watch && (
              <Question>
                <h4>Currently Watching</h4>
                <p>{graduate.frontmatter.watch}</p>
              </Question>
            )}

            {graduate.frontmatter.typeface && (
              <Question>
                <h4>Favourite Typefaces</h4>
                <p>{graduate.frontmatter.typeface}</p>
              </Question>
            )}
          </About>
        </Info>


        <Projects>
          {data.projects ? data.projects.edges.map(({ node: project }) => (
            <ProjectContainer>
              <Link key={project.id} to={project.fields.slug}>
                <Project>
                  <ProjectImageContainer>
                    <Img sizes={project.frontmatter.image.childImageSharp.sizes} className="image" />
                  </ProjectImageContainer>

                  <ProjectInfo>
                    <h5>{project.frontmatter.title}</h5>
                    <h5>{project.frontmatter.category}</h5>
                  </ProjectInfo>
                </Project>
              </Link>
            </ProjectContainer>
          )) : (
            <h4>This student has no projects :( </h4>
          )}
        </Projects>

      </InnerContainer>
    </Container>
  );
};


// template query
export const aboutPageQuery = graphql`
  query GraduatePage($slug: String!, $name: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        noun
        verb
        intro
        hobbies
        music
        tools
        watch
        typeface
        twitter
        instagram
        linkedin
        email
        website
        
        headshot {
          childImageSharp {
            resolutions(width: 50, height: 50, quality: 90, cropFocus: CENTER) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }

    projects: allMarkdownRemark(filter: { frontmatter: { graduate: { regex: $name }}}) {
      edges {
        node {
          id
          fields {
            slug
          }

          frontmatter {
            title
            category

            image {
              childImageSharp {
                sizes(maxWidth: 1000, quality: 90, maxHeight: 600, cropFocus: CENTER) {
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


