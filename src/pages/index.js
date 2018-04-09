import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import HomepageStatement from '../components/HomepageStatement'
import Instagram from '../components/Instagram'
import Facebook from '../components/Facebook'
import HomeInfo from '../components/HomeInfo'
import { spacing, breakpoints } from '../utils/constants.js'

// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
`

const ShowInfo = styled.div `
  padding: ${spacing.small}px;
  display: flex;
  justify-content: space-between;


  h3 {
    text-transform: none;
    font-size: 3.5rem;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    padding: ${spacing.small}px;

    h3 {
      font-size: 2.2rem;
    }
  }
`

const Intro = styled.div `

  border-top: 1px solid;
  padding: ${spacing.small}px;

  h1 {
    text-transform: none;
    line-height: 1.1;
    margin-bottom: ${spacing.normal}px;
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {
    h1 {
      font-size: 3rem;
    }
  }
`

const Links = styled.div `
  display: flex;

  h1 {
    margin-right: ${spacing.bigger}px;
    width: 100%;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {

    h1 {
      margin-bottom: ${spacing.small}px
    };
  }
`

const HomeLinks = styled(Link)`
`

// page component
export default function IndexPage({ data }) {
  return (
    <Container>
      <HomepageStatement
        verb="Experience"
        noun="Gradshow"
        gradData={data.allMarkdownRemark.edges}
        border
      />

      <ShowInfo>
        <h3>Gladstone Hotel</h3>
        <h3>April 11th-13th, 2018</h3>
      </ShowInfo>

      <Intro>
        <h1>In the last four years the class of 2018 has proven to be resilient, resourceful, and passionate. We have been crafting our skills and trying to push the limit with every project. We are constantly looking for the next challenge. We are not simply creating the next design—we are telling the next story, envisioning the next experience, and starting the next movement. Through this show we are taking the next step in our lives and are proud to share this moment with you.</h1>
        <Links>
          <HomeLinks to="/work"><h1>Explore the Work &rarr;</h1></HomeLinks>
          <HomeLinks to="/graduates"><h1>Meet the Grads &rarr;</h1></HomeLinks>
        </Links>
      </Intro>

    <HomeInfo></HomeInfo>

    </Container>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/content/graduates/"} },
    sort: {fields: [frontmatter___title], order: ASC} ) {
      edges {
        node {
          id
          frontmatter {
            noun
            verb
          }
        }
      }
    }
  }
`;
