import React from 'react'
import Link from 'gatsby-link'


// page component
export default function SecondPage() {
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}
