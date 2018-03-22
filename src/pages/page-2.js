import React from 'react'
import Link from 'gatsby-link'
import Statement from '../components/Statement'
// import slothImage from '../assets/images/other-sloth.jpg'


// page component
export default function SecondPage() {
  return (
    <div>
      <h1>This is a test page, here it is grabbing a sloth image </h1>
      <p>Welcome to page 2</p>
      <Statement
      />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

