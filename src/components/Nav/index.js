import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { spacing, breakpoints } from '../../utils/constants'

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
  padding-right: 2rem;
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

  @media (max-width: ${breakpoints.mobile}) {

    padding-right: 1rem;

    h1 {
      font-size: 1.6rem;
    }

  }

  @media (max-width: ${breakpoints.saba}) {
    padding-right: ${spacing.smaller}px;
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

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 ${spacing.smaller}px;
  }

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

  h3 {
    font-size: 1.6rem;
  }

  &:hover {
    text-decoration: underline;
  }


  ${props => props.active && "text-decoration: underline;"}
  ${props => props.mobileShow && "display:none;"}

  @media (max-width: ${breakpoints.mobile}) {

    ${props => props.mobileHide && "display:none;"}
    ${props => props.mobileShow && "display:block;"}
    margin-left: ${spacing.small}px;

    h3 {
      font-size: 1.6rem;
    }

  }

  @media (max-width: ${breakpoints.saba}) {
    margin-left: ${spacing.smaller}px;
  }

`

export default function Nav(props) {
  return (
    <NavContainer>
      <TitleLink to="/">
        <h1>THE NEXT</h1>
      </TitleLink>

      <PageLinks>
        <PageLink active={props.currentPage == "/graduates/"} mobileHide to="/graduates/"><h3>Graduates</h3></PageLink>
        <PageLink active={props.currentPage == "/graduates/"} mobileShow to="/graduates/"><h3>Grads</h3></PageLink>
        <PageLink active={props.currentPage == "/work/"} to="/work/"><h3>Work</h3></PageLink>
        <PageLink active={props.currentPage == "/sponsors/"} to="/sponsors/"><h3>Sponsors</h3></PageLink>
      </PageLinks>

    </NavContainer>
  )
}
