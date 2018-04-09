import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../../utils/constants.js'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const Input = styled.input`
  outline: none;
  background-color: none;
  border: none;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  text-align: center;
  height: ${spacing.bigger}px;
  flex: 1;
  padding-top: 4px;

  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 7px;
  }
`;


// component
export default function Base(props) {
  return (
    <Input 
      {...props} 
      type="text"
      placeholder="Search"
    />
  )
}
