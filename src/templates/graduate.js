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
  
  height: 100px;
  border-bottom: 1px solid black;

  .image {
    padding: 0 ${spacing.smaller}px;
    border-radius: 50%;
  }

  .outer-wrapper {
    height: 60px !important;
    padding: 0 ${spacing.small}px;
  }

`

const Profile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

`

const Name = styled.h3`
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
  min-height: calc(100vh - ${spacing.bigger}px);
  max-width: 400px;
  white-space: pre-wrap;
  border-right: 1px solid black;
  padding-bottom: ${spacing.bigger}px;
  margin-bottom: calc(0.5vw + 1rem);

  QuestionHeader {
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
  ${props => props.borderBottom && 'border-bottom: 1px solid black;'}

  p {
    margin-top: 1rem;
  }
`

const Question = styled.div `
  margin-bottom: ${spacing.normal}px;
  p {
    margin: 0.25rem 0;
  }
`

const QuestionHeader = styled.p`
  text-transform: uppercase;
`

const Projects = styled.div`
  width: 100%;
  flex: 2;
  padding-bottom: ${spacing.bigger*2}px;

  > QuestionHeader {
    margin: ${spacing.small}px;
  }

  h2 {
    margin-bottom: ${spacing.normal}px;
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
  width: calc(100% - ${spacing.normal * 2}px);
  margin: ${spacing.normal}px;
`

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  ${'' /* font-size: 1.4rem; */}

  padding:  0 ${spacing.normal}px ${spacing.smaller}px ;
`

// page template component

export default function Graduate({ data }) {
  const graduate = data.markdownRemark;

  return (
    <Container>



      <InnerContainer>

        <Info>
          <ProfileContainer>
            <Profile>

              <Img
                resolutions={graduate.frontmatter.headshot.childImageSharp.resolutions}
                outerWrapperClassName="outer-wrapper"
                className="image"
              />

              <Name>{graduate.frontmatter.title}</Name>
            </Profile>


          </ProfileContainer>


            {/* <Social>
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
            </Social> */}

          <StatementWrapper>
            <Statement
              verb = {graduate.frontmatter.verb}
              noun = {graduate.frontmatter.noun}
            />
          </StatementWrapper>

          <About borderBottom>
            <p>{graduate.frontmatter.intro}</p>
          </About>

          <About>
            {graduate.frontmatter.hobbies && (
              <Question>
                <QuestionHeader>Hobbies</QuestionHeader>
                <p>{graduate.frontmatter.hobbies}</p>
              </Question>
            )}

            {graduate.frontmatter.music && (
              <Question>
                <QuestionHeader>Listening To</QuestionHeader>
                <p>{graduate.frontmatter.music}</p>
              </Question>
            )}

            {graduate.frontmatter.tools && (
              <Question>
                <QuestionHeader>Favourite Tools</QuestionHeader>
                <p>{graduate.frontmatter.tools}</p>
              </Question>
            )}

            {graduate.frontmatter.watch && (
              <Question>
                <QuestionHeader>Currently Watching</QuestionHeader>
                <p>{graduate.frontmatter.watch}</p>
              </Question>
            )}

            {graduate.frontmatter.typeface && (
              <Question>
                <QuestionHeader>Favourite Typefaces</QuestionHeader>
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
            <QuestionHeader>This student has no projects :( </QuestionHeader>
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
            resolutions(width: 60, height: 60, quality: 90, cropFocus: CENTER) {
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
                sizes(maxWidth: 1000, quality: 90, maxHeight: 400, cropFocus: CENTER) {
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
