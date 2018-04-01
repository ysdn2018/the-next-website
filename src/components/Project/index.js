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
  border: 1px solid black;
  width: 100%;
  margin: 1rem;
  padding: 15px;
`

const Text = styled(H4)`

`

// component
export default function Base(props) {
  return (
    <Link to={props.path}>
      <Container>
        <Img resolutions={props.image} />
        <Text>{props.title}</Text>
        <Text>by {props.graduate}</Text>
      </Container>
    </Link>
  )
}
