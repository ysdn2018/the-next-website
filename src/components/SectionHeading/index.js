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
  
`

export default function SectionHeading(props) {
  return (
    <Container>
      <h4>{props.title}</h4>
    </Container>
  )
}