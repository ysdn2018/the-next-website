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

  .image {
    padding: 0 ${spacing.smaller}px;
    border-radius: 50%;
  }

  .outer-wrapper {
    height: 60px !important;
    padding: 0 ${spacing.normal}px;
  }

`

const Profile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

`

const Name = styled.h3`
  padding: 0;
  line-height: 1;
`

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.normal}px;

  .image {
    border-radius: 50%;
  }
`

const Social = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex: none;
  width: 100%;
  margin-right: -1px;
  border-bottom: 1px solid black;
`

const SocialLink = styled.a`
  border: 1px solid black;
  border-left: none;
  width: calc(50% + 1px);

  margin-bottom: -1px;
  margin-right: -1px;
  padding: ${spacing.smaller}px ${spacing.normal}px;
  display: flex;
  justify-content: space-between;

  &:hover {
    text-decoration: none;
    background-color: black;
    color: white;
  }

  &:first-of-type {
    width: calc(100% + 1px);
  }

  p {
    margin: 0;
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
`

const StatementWrapper = styled.div`
  padding: ${spacing.normal}px ${spacing.small}px;
  border-bottom: 1px solid black;
  height: 200px;
`

const About = styled.div `
  padding: ${spacing.smaller}px ${spacing.big}px  ${spacing.smaller}px ${spacing.normal}px;
  ${props => props.borderBottom && 'border-bottom: 1px solid black;'}

  p {
    margin-top: 1rem;
  }

  display: flex;
  flex-direction: column;

  > div:first-of-type {
    padding-top: ${spacing.small}px;
  }
`

const Question = styled.div `
  margin-bottom: ${spacing.normal}px;

  p {
    margin: 0.1rem 0;
  }
`

const QuestionHeader = styled.p`
  text-transform: uppercase;
`

const Projects = styled.div`
  width: 100%;
  flex: 2;
  padding-bottom: ${spacing.bigger-4}px;

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
  width: calc(100% - ${spacing.bigger*1.5 * 2}px);
  margin: ${spacing.bigger*1.5}px;
`

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  ${'' /* font-size: 1.4rem; */}

  padding:  0 ${spacing.normal}px ${spacing.small}px ;
`

// page template component

export default function Graduate({ data }) {
  const graduate = data.markdownRemark;

  

  // if (!graduate.frontmatter.website.includes('http')) {
  //   const website = "http://" + graduate.frontmatter.website;
  // } else {
  //   const website = graduate.frontmatter.website;
  // }

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

          <Social>
            {graduate.frontmatter.website && (
              <SocialLink target="_blank" href={graduate.frontmatter.website}><p>Portfolio Website</p> <p>&rarr;</p></SocialLink>
            )}
            {graduate.frontmatter.email && (
              <SocialLink target="_blank" href={"mailto:" + graduate.frontmatter.email}><p>Email</p> <p>&rarr;</p></SocialLink>
            )}
            {graduate.frontmatter.twitter && (
              <SocialLink target="_blank" href={graduate.frontmatter.instagram}><p>Instagram</p> <p>&rarr;</p></SocialLink>
            )}
            {graduate.frontmatter.twitter && (
              <SocialLink target="_blank" href={graduate.frontmatter.twitter}><p>Twitter</p> <p>&rarr;</p></SocialLink>
            )}
            {graduate.frontmatter.linkedin && (
              <SocialLink target="_blank" href={graduate.frontmatter.linkedin}><p>LinkedIn</p> <p>&rarr;</p></SocialLink>
            )}
          </Social>

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
                sizes(maxWidth: 1000, quality: 90, maxHeight: 500, cropFocus: CENTER) {
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
