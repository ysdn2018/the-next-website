import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../../utils/constants.js'
import Headroom from 'react-headroom'

/*
  Base component
  Copy this directory and rename to your choosing
*/

const HeadroomWrapper = styled(Headroom)`
  .headroom {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 5;
    transition: transform 200ms cubic-bezier(.14,.6,.36,1);
  }
  .headroom--unfixed {
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms cubic-bezier(.14,.6,.36,1);
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-${spacing.bigger + 1}px);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }

`

// styled components
const Container = styled.div`
  width: 100%;

  ${'' /* margin-top: -1px; */}
  border-bottom: 1px solid black;
  padding: 0 ${spacing.small}px;

  display: flex;
  position: fixed;
  background-color: white;
  z-index: 6;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    top: 2px;
  }
`

const Text = styled.p`

`

// component
export default function Toolbar(props) {
  return (
    <HeadroomWrapper disableInlineStyles>
      <Container>
        {props.children}
      </Container>
    </HeadroomWrapper>
  )
}