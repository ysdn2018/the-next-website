import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'


// styled components
const Container = styled.div`

`

const Subtitle = styled.div`
  text-align: left;
`


// page component
export default function IndexPage() {
  return (
    <Container>
      <Subtitle>hey hows it goin? don't worry, we're workin on it. some kind of homepage will be here</Subtitle>
    </Container>
  )
}
