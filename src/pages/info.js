import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import SectionHeading from '../components/SectionHeading'
import { H1, H2, H3, H4, H5, H6 } from '../components/Typography/'

// INFO title (remove once nav sorted)
const Title = styled.div `
  margin-top: 160px;
  width: 100%;
  border-width: 1px 0;
  border-style: solid
  border-color: #000;
  padding: 8px 0 8px 0;
  text-align: center;
  text-transform: uppercase;

`



// three column containers
const ThreeColumn = styled.div `
  width: 33.33%;
  padding: 20px;
  position: relative;
  float: left;

  @media screen and (max-width: ${breakpoints.mobile} ) {
    width: 100%;
  }
`

// Spacing helpers
const Label = styled.div `
  margin-bottom: ${spacing.big}px;
`

const SubLabel = styled.div `
  margin-bottom: ${spacing.small}px;
`


// page component
export default function Info({ data }) {
  return (
    <PageContainer>

      <Title>Info</Title>


      <ThreeColumn>
          <Label><H5>Grad Show 2018</H5></Label>
          <H3>York University Sheridan College Design</H3>
      </ThreeColumn>

      <ThreeColumn>
          <Label><H5>Location</H5></Label>
          <H3>Gladstone Hotel</H3>
          <H3>1214 Queen St. West</H3>
          <H3>Toronto, Ontario</H3>
      </ThreeColumn>

      <ThreeColumn>
          <Label><H5>Dates</H5></Label>
          <SubLabel><H6>Industry Night</H6></SubLabel>
          <Label><H3>Wed. April 11, 5 P.M. &mdash; 8 P.M.</H3></Label>

          <SubLabel><H6>Open Nights</H6></SubLabel>
          <H3>Thurs. April 12, 11 A.M. &mdash; 4 P.M.</H3>
          <H3>Fri. April 13, 11 A.M. &mdash; 5 P.M.</H3>
      </ThreeColumn>


    </PageContainer>
  )
}
