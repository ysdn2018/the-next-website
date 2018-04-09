import React from 'react'
import styled from 'styled-components'
import { breakpoints, spacing } from '../../utils/constants.js'

// styled components
const Container = styled.a`
  height: 50px;
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

  #facebook {
    stroke: black;
  }

  &:hover {
    border-left: 1px solid black;
    background-color: black;

    #facebook {
      stroke: white;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.small}px 0px;
    height: 100%;
  }
`



// component
export default function Facebook(props) {
  return (
    <Container target="_blank" href="https://www.facebook.com/ysdnTHENEXT/" {...props}>
      <svg width="32" height="32" viewBox="0 0 42 42">
        <path id="facebook" fill="none" stroke="#000" strokeWidth="1.2" d="M1374.3653,858 L1355.20769,858 C1353.98806,858 1353,857.011326 1353,855.792169 L1353,820.207676 C1353,818.988208 1353.98822,818 1355.20769,818 L1390.79246,818 C1392.01163,818 1393,818.988208 1393,820.207676 L1393,855.792169 C1393,857.011481 1392.01147,858 1390.79246,858 L1380.59942,858 L1380.59942,842.509796 L1385.79877,842.509796 L1386.5773,836.472988 L1380.59942,836.472988 L1380.59942,832.618868 C1380.59942,830.871073 1381.08476,829.680008 1383.59107,829.680008 L1386.78776,829.678611 L1386.78776,824.279242 C1386.2349,824.205674 1384.33732,824.041309 1382.12963,824.041309 C1377.5207,824.041309 1374.3653,826.854605 1374.3653,832.021007 L1374.3653,836.472988 L1369.1526,836.472988 L1369.1526,842.509796 L1374.3653,842.509796 L1374.3653,858 L1374.3653,858 Z" transform="translate(-1352 -817)" />
      </svg>
    </Container>
  )
}
