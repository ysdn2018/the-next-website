import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../utils/constants'

import PageContainer from '../components/PageContainer'

const Container = styled.div`
  display: flex;
`

// three column containers
const Section = styled.div`
  padding: 20px;
  position: relative;
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

// Spacing helpers
const Label = styled.h5`
  margin-bottom: ${spacing.big}px;
`

const SubLabel = styled.div`
  margin-bottom: ${spacing.small}px;
`


// page component
export default function Info({ data }) {
  return (
    <Container>

      <Section>
          <Label>Grad Show 2018</Label>
          <h5>York University Sheridan College Design</h5>
      </Section>

      <Section>
          <Label>Location</Label>
          <h5>Gladstone Hotel</h5>
          <h5>1214 Queen St. West</h5>
          <h5>Toronto, Ontario</h5>
      </Section>

      <Section>
          <Label>Dates</Label>
          <SubLabel><h5>Industry Night</h5></SubLabel>
          <Label><h5>Wed. April 11, 5 P.M. &mdash; 8 P.M.</h5></Label>

          <SubLabel><h6>Open Nights</h6></SubLabel>
          <h5>Thurs. April 12, 11 A.M. &mdash; 4 P.M.</h5>
          <h5>Fri. April 13, 11 A.M. &mdash; 5 P.M.</h5>
      </Section>


    </Container>
  )
}
