import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled(Link)`
  position: relative;
  border: 1px solid black;
  margin: 2rem;
  max-width: 400px;
`


const Text = styled.p`
  z-index: 4;
  color: black;
  max-width: 100%;
  text-transform: uppercase;
  margin: 0.4rem;
  font-size: 1.4rem; 
`

const LookingImage = styled(Img)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const NormalImage = styled(Img) `
  &:hover {
    opacity: 0;
  }

  position: relative;
  z-index: 3;
`

const ImagesContainer = styled.div`
  position: relative;
`;

// component
export default function Graduate(props) {
  return (
    <Container to={props.path}>
      <ImagesContainer>
        <NormalImage
          resolutions={props.image}
          className="image"
          backgroundColor
        />
        <LookingImage
          resolutions={props.imageHover}
          style={{position: "absolute"}}
          className=".image"
        />
      </ImagesContainer>
      <Text>{props.title}</Text>
    </Container>
  )
}
