import React from 'react'
import styled from 'styled-components'


/*
  Example Button component
  You can import it into any page.
  This gives a single source of truth for all buttons on your site
*/


// styled components
const Container = styled.button`
  outline: none;
  background-color: transparent;
  border: 1px solid black;
  padding: 0 2rem;

  &:active {
    background-color: black;
    color: white;
  }
`

const Text = styled.p`

`


// component
export default function Button(props) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  )
}
