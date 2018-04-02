import React from 'react'
import styled from 'styled-components'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled.div`

`

const Text = styled.p`

`

// component
export default function SearchField(props) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  )
}