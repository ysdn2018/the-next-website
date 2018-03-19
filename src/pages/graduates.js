import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import SectionHeading from '../components/SectionHeading'

const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  min-height: 100vh;
`


// page component
export default function Graduates() {
  return (
    <Container>
      <SectionHeading title="Graduates"/>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/page-2">Go back to the homepage</Link>
    </Container>
  )
}
