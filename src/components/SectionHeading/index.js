/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../utils/constants'

const Container = styled.div`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
  height: ${spacing.bigger}px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${spacing.big-1}px;
  background-color: white;
  position: ${props => props.fixed ? "fixed" : "relative"};
`

export default function SectionHeading(props) {
  return (
    <Container {...props}>
      <h4>{props.title}</h4>
    </Container>
  )
}