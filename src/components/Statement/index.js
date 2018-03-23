import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../../utils/constants.js'
import { H2 } from '../Typography'
/*
  Base component
  Copy this directory and rename to your choosing
*/


const StatementContainer = styled.div`
  position: relative;
  border: 1px solid black;
  height: 100%;
  width: 100%;
  padding: 0 ${spacing.smaller}px;
  color: black;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover .image {
    opacity: 1;
  }


  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 ${ spacing.smaller}px;
  }
`

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${props => props.pad ? spacing.smaller : 0};
`

const StatementText = styled(H2)`
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

const TheNext = styled(H2)`
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
    <OuterContainer>
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