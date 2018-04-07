import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import StatementHeader from '../components/StatementHeader'

// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
`

// page component
export default function IndexPage() {
  return (
    <Container>
      <StatementHeader
        verb="Experience"
        noun="Gradshow"
      />
    </Container>
  )
}
