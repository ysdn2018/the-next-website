import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { spacing } from '../../utils/constants'

/*
  Base component
  Copy this directory and rename to your choosing
*/


const TitleLink = styled(Link) `
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: -1px;
  height: ${spacing.big}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  pointer-events: auto;
`


// components
export default function Header() {
  return (
    <HeaderContainer>
      <TitleLink to="/">
        <h1>The Next</h1>
      </TitleLink>
    </HeaderContainer>
  )
}