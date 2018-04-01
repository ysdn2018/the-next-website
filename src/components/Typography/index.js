import React from 'react'
import styled from 'styled-components'

// styled components

const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 6rem;
`

const H2 = styled.h1`
  text-transform: uppercase;
  font-size: 4.5rem;
`

const H3 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
`

const H4 = styled.h1`
  text-transform: uppercase;
  font-size: 1.8rem;
`

// Caption Heading
const H5 = styled.h1`
  font-size: 1 rem;
`

const P = styled.p`
  font-size: 2.5rem;
  line-height: 1.5;
`

const A = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`

export { H1, H2, H3, H4, H5, P, A };
