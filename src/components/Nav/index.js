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
  text-align: left;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;


  h1 {
    font-size: 1.6rem;
    margin: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`

const NavContainer = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: -1px;
  height: ${spacing.bigger}px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
  pointer-events: auto;
  padding: 0 ${spacing.small}px;
  
`

const PageLinks = styled.div`
  display: flex;
`;

const PageLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  margin-left: ${spacing.normal}px;

  &:hover {
    text-decoration: underline;
  }
`

export default function Nav() {
  return (
    <NavContainer>
      <TitleLink to="/">
        <h1>THE NEXT</h1>
      </TitleLink>

      <PageLinks>
        <PageLink to="/graduates/">Graduates</PageLink>
        <PageLink to="/work/">Work</PageLink>
        <PageLink to="/sponsors/">Sponsors</PageLink>
      </PageLinks>

    </NavContainer>
  )
}
