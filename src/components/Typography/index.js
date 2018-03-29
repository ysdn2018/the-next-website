import React from 'react'
import styled from 'styled-components'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
// *Styled per brand guidelines document.
const H1 = styled.h1`
  font-size: 54px;
  line-height: 56px;
`

const H2 = styled.h1`
  font-size: 46px;
  line-height: 48px;
`

const H3 = styled.h1`
  font-size: 34px;
  line-height: 38px;
`

const H4 = styled.h1`
  text-transform: uppercase;
  font-size: 28px;
  line-height: 32px;
`

// Sub-header #1
const H5 = styled.h1`
  font-size: 21px;
  line-height: 26px;
`

// Sub-header #2
const H6 = styled.h1`
  font-size: 16px;
  line-height: 20px;
`


const P = styled.p`

`

const A = styled.a `
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`

export { H1, H2, H3, H4, H5, H6, P, A };
