import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import SectionHeading from '../components/SectionHeading'


// page component
export default function Graduates() {
  return (
    <PageContainer>
      <SectionHeading fixed title="Graduates"/>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/page-2">Go back to the homepage</Link>
    </PageContainer>
  )
}
