import React from 'react'
import styled from 'styled-components'
import { spacing } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import StatementHeader from '../components/StatementHeader'

// page component
export default function Sponsors({ data }) {
  return (
    <PageContainer>

      <StatementHeader
        verb="Thanking"
        noun="Sponsors"
        height="30vh"
      />

    </PageContainer>
  )
}
