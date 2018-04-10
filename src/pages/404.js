import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image'
import { spacing, breakpoints } from '../utils/constants'

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${spacing.bigger + spacing.normal}px;
`;


const ImageContainer = styled.div`
  width: 70vmin;
  height: 70vmin;
`;

const Text = styled.div`
  text-align: center;
  position: absolute;

  h1 {
    font-size: calc(8rem + 10vw);
    margin: 0;
    line-height: 1.15;
  }

  p {
    margin: 0;
    font-size: 1.9rem;
  }

  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`

// page component
export default function NotFoundPage({ data }) {
  return (
    <Container>
        <ImageContainer>
          <Img sizes={data.file.childImageSharp.sizes} />
        </ImageContainer>

        <Text>
          <h1>404!</h1>
          <p>Something spooky just happened!</p>
          <p>Want to <Link to="/">go home?</Link></p>
        </Text>
    </Container>
  )
}

export const query = graphql`
  query BadQuery {
    file (relativePath: {regex: "/404-ghost/"}) {
      childImageSharp {
        sizes(maxWidth: 1000, quality: 85, cropFocus: CENTER) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;