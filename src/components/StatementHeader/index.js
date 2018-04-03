import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../../utils/constants.js'

/*
  Base component
  Copy this directory and rename to your choosing
*/

const StatementContainer = styled.h1`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 ${spacing.smaller}px;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 ${ spacing.smaller}px;
  }
`

const OuterContainer = styled.div`
  width: 100%;
  height: ${props => props.height ? props.height : "100%"};
  padding: ${props => props.pad ? spacing.smaller : 0};
`

const StatementText = styled.span`
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 3rem;
  }
`

const TheNext = styled.span`
  position: relative;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  text-align: right;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 3rem;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
    top: auto;
  }
`

export default function Statement(props) {
  return (
    <OuterContainer {...props}>
      <StatementContainer>
        <StatementText>
          {props.verb || "Announcing"}
        </StatementText>

        <TheNext right>
          The Next
        </TheNext>

        <StatementText>
          {props.noun || "Gradshow"}
        </StatementText>
      </StatementContainer>
    </OuterContainer>
  )
}
