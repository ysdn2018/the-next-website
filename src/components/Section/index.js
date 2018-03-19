import React from 'react'
import styled from 'styled-components'
import SectionHeading from '../SectionHeading'

const SectionContainer = styled.div`
  height: 100%;
  background-color: white;
  width: 100%;
  position: relative;

  border-bottom: 1px solid black;
`



export default function Section(props) {
  return (
    <SectionContainer {...props}>
      <SectionHeading title={props.title} />
      {props.children}
    </SectionContainer>
  )
}