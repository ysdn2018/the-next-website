import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants.js'

// styled components
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8rem;
`

const MarkText = styled.div`
  text-transform: uppercase;
  line-height: 1;
  position: relative;
  font-size: 4.5rem;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.8rem;
  }
`

const The = MarkText.extend`
`

const Next = MarkText.extend`
  writing-mode: vertical-lr;
  display: inline;
  margin-top: 0.35rem;
  width: 4rem;
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 0.18rem;
  }
`

// component
export default function Mark(props) {
  return (
    <Container>
      <The>The</The>
      <Next>Next</Next>
    </Container>
  )
}