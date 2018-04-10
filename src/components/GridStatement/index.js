import React from 'react'
import styled, {css} from 'styled-components'
import { spacing, breakpoints } from '../../utils/constants.js'
/*
  Base component
  Copy this directory and rename to your choosing
*/


const StatementContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${spacing.small}px;
  color: black;
  min-height: 170px;

  
  border-bottom: 1px solid black;

  ${props => !props.noBorderRight && "border-right: 1px solid black;"}

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover .image {
    opacity: 1;
  }

  @media (min-width: ${breakpoints.mobile}px) {
    min-height: 220px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 ${spacing.smaller}px;
  }
`

const OuterContainer = styled.div`


  ${props => props.work && css`
    @media (min-width: ${1614}px) {
      grid-column: 1 / 3;
    }

    @media screen and (max-width: ${breakpoints.mobile} ) {
      height: 30%;
    }
  `}

  ${props => props.grads && css`
      grid-column: 1 / 2;
      grid-row: 1 / 4;
  `}


  width: 100%;
  height: 100%;
  flex: 1;
  padding: ${props => props.pad ? spacing.smaller : 0};
`

const StatementText = styled.h2`
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

const TheNext = styled.h2`
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
      <StatementContainer {...props}>
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
