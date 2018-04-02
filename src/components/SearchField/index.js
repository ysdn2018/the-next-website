import React from 'react'
import styled from 'styled-components'

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
  flex: 1;
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
