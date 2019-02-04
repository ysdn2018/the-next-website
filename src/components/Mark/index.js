import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants.js'

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

const The = styled(MarkText)`
`

const Next = styled(MarkText)`
  writing-mode: vertical-lr;
  display: inline;
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