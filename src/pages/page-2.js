import React from 'react'
import Link from 'gatsby-link'
import Statement from '../components/Statement'

import { H1, P } from '../components/Typography'


// page component
export default function SecondPage() {
  return (
    <div>
      <H1>This is a test page, here it is grabbing a sloth image </H1>
      <P>Welcome to page 2</P>
      <Statement
      />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

