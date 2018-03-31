import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled.div`
  position: relative;
`

const Text = styled.p`

`

const LookingImage = styled(Img)`
  position: absolute;
  top: 0;
  
`

const NormalImage = styled(Img) `
  &:hover {
    opacity: 0;
  }
`

// component
export default function Graduate(props) {
  return (
    <Container>
      <NormalImage resolutions={props.image} />
      <LookingImage resolutions={props.image} style={{position: "absolute"}}/>
      <Text>{props.text}</Text>
    </Container>
  )
}
