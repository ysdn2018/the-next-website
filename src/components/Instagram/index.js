import React from 'react'
import styled from 'styled-components'
import { breakpoints, spacing } from '../../utils/constants.js'

// styled components
const Container = styled.a`
  height: 70px;
  flex: 1;
  width: 100% !important;
  padding: 0 1rem;

  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  text-decoration: none;
  height: 100%;
  border-bottom: 1px solid;

  #instagram {
    stroke: black;
  }

  &:hover {
    border-left: 1px solid black;
    background-color: black;

    #instagram {
      stroke: white;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.small-3}px 0px;
    border-right: 1px solid black;
    border-bottom: none;

  }
`

// component
export default function Instagram(props) {
  return (
    <Container target="_blank" href="https://www.instagram.com/ysdnthenext/" {...props}>
      <svg width="31px" height="34px" viewBox="0 0 31 30" version="1.1" shapeRendering="geometricPrecision">
        <g id="Home---Scroll-State" stroke="none" strokeWidth="1.1" fill="none" fillRule="evenodd" transform="translate(-1373.000000, -263.000000)">
          <g id="instagram" transform="translate(1372.000000, 263.000000)">
            <rect id="Rectangle" x="1.6" y="1" width="29" height="29" rx="5"></rect>
            <circle id="Oval" cx="15.8" cy="15.5" r="8"></circle>
            <circle id="Oval-Copy" cx="24.9" cy="5.5" r="1.5"></circle>
          </g>
        </g>
      </svg>
    </Container>
  )
}
