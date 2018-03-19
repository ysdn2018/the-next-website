import React from 'react'
import styled from 'styled-components'

import SectionHeading from '../components/SectionHeading'

const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  min-height: 100vh;
`


// page component
export default function Info() {
  return (
    <Container>
      <SectionHeading title="Info" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </Container>
  )
}
