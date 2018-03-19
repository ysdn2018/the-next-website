import React from 'react'
import styled from 'styled-components'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import SectionHeading from '../components/SectionHeading'


// page component
export default function Sponsors() {
  return (
    <PageContainer>
      <SectionHeading fixed title="Sponsors" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </PageContainer>
  )
}
