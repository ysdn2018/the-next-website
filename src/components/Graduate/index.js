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

`

const NormalImage = styled(Img) `
  &:hover {
    opacity: 0;
  }

  position: relative;
  z-index: 3;

`

// component
export default function Graduate(props) {
  return (
    <Container to={props.path}>
      <NormalImage
        resolutions={props.image}
        className=".image"
      />
      <LookingImage
        resolutions={props.imageHover}
        style={{position: "absolute"}}
        className=".image"
      />
      <Text>{props.title}</Text>
    </Container>
  )
}
