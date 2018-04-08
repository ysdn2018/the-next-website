import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { H4 } from '../Typography'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled.div`

  border-right: 1px solid black;
  border-bottom: 1px solid black;
  
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
    width: 100%;
  }
`

const ImageContainer = styled.div`
  padding: 8.2rem;
`;

const TextContainer = styled.div`
  display: flex;
  padding: 1rem 1.5rem;


  justify-content: space-between;
  align-items: flex-end;
`;

const Text = styled.p`
  z-index: 4;
  color: black;
  max-width: 400px;
  
  margin: 0.4rem;
  font-size: 1.4rem;
  line-height: 1.2;
  

  &:first-of-type {
    ${'' /* font-style: italic; */}
    text-transform: uppercase;
  }

  &:last-of-type {
    
  }
`


// component
export default function Base(props) {
  return (
    <Link to={props.path}>
      <Container>
      
        <ImageContainer>
          <Img sizes={props.image} />
        </ImageContainer>

        <TextContainer>
          <Text>{props.title}</Text>
          <Text>{props.graduate}</Text>
        </TextContainer>
      </Container>
    </Link>
  )
}
