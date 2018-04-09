import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../../utils/constants.js'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Container = styled.div`
  width: 100%;
  ${'' /* margin-top: -1px; */}
  border-bottom: 1px solid black;

  height: ${spacing.bigger}px;
  padding: 0 ${spacing.small}px;

  display: flex;
  position: sticky;
  top: ${spacing.bigger-1}px;
  background-color: white;
  z-index: 5;

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
  }
`

const Text = styled.p`

`

// component
export default function Toolbar(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}