import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import 'normalize.css'
import { spacing, breakpoints } from '../utils/constants'
import PageContainer from '../components/PageContainer'
import Nav from '../components/Nav'


// importing fonts
import NeueHaasGrotTextRoman_eot from "../assets/fonts/NeueHaasGrotText-55Roman-Web.eot"
import NeueHaasGrotTextRoman_woff from "../assets/fonts/NeueHaasGrotText-55Roman-Web.woff"
import NeueHaasGrotTextRoman_woff2 from "../assets/fonts/NeueHaasGrotText-55Roman-Web.woff2"
import NeueHaasGrotTextItalic_eot from "../assets/fonts/NeueHaasGrotText-56Italic-Web.eot"
import NeueHaasGrotTextItalic_woff from "../assets/fonts/NeueHaasGrotText-56Italic-Web.woff"
import NeueHaasGrotTextItalic_woff2 from "../assets/fonts/NeueHaasGrotText-56Italic-Web.woff2"
import NeueHaasGrotDispRoman_eot from "../assets/fonts/NeueHaasGrotDisp-55Roman-Web.eot"
import NeueHaasGrotDispRoman_woff from "../assets/fonts/NeueHaasGrotDisp-55Roman-Web.woff"
import NeueHaasGrotDispRoman_woff2 from "../assets/fonts/NeueHaasGrotDisp-55Roman-Web.woff2"
import NeueHaasGrotDispItalic_eot from "../assets/fonts/NeueHaasGrotDisp-56Italic-Web.eot"
import NeueHaasGrotDispItalic_woff from "../assets/fonts/NeueHaasGrotDisp-56Italic-Web.woff"
import NeueHaasGrotDispItalic_woff2 from "../assets/fonts/NeueHaasGrotDisp-56Italic-Web.woff2"


/*
  Layout File
  this file is the base of every page
  useful for headers & navs

  this is where global styles/font loading lives
*/

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: ${spacing.big + 3}px;
`;

// page component
function TemplateWrapper (props) {
  return (
    <React.Fragment>
      <Helmet
        title="THE NEXT"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />

      <Nav />

      <InnerContainer>
        {props.children()}
      </InnerContainer>

    </React.Fragment>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


/* Global Site Styles
 * used for importing fonts and setting up sizes
 * also for default values
 * avoid using for anything else
 */
injectGlobal`
  *, *:before, *:after {
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
  }

  html {
    /* Maybe Try?  font-size: calc(1.25vw + 62.5%); */
    /* font-size: calc(0.30vw + 42.5%); */
    font-size: 62.5%;
    height: 100% !important;
  }

  body {
      margin: 0;
      height: 100% !important;
      overflow-x: hidden;

      font-size: 1.6em;
      line-height: 1.6;
      font-weight: 400;
      font-family: 'Haas Grot Text', 'Helvetica', 'Arial', sans-serif;
      color: #222;
      webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      text-rendering: optimizeLegibility;
  }

  #___gatsby {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Haas Grot Display', 'Helvetica', 'Arial', sans-serif;
    margin-top: 0;
    margin-bottom: 0rem;
    font-weight: 400;
  }

  h1 {
    text-transform: uppercase;
    font-size: 5.5rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
    text-transform: uppercase;
  }

  h4 {
    text-transform: uppercase;
    font-size: 2rem;
  }

  h5 {
    text-transform: uppercase;
    font-size: 1.5 rem;
  }

  strong {
    font-weight: 400;
  }

  p {
    font-size: calc(0.5vw + 1.2rem);
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {

    h1 {
      font-size: 4.5rem;
    }

    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 3rem;
      line-height: 1.1;
    }

    h4 {
      font-size: 1.8rem;
      line-height: 1.2;
    }

    p {
      font-size: calc(0.5vw + 1.3rem);
      line-height: 1.5;
    }

  }


  @font-face {
    font-family: 'Haas Grot Text';
    src: url(${NeueHaasGrotTextRoman_eot});
    src: url('${NeueHaasGrotTextRoman_eot}?#iefix') format('embedded-opentype'),
      url('${NeueHaasGrotTextRoman_woff2}') format('woff2'),
      url('${NeueHaasGrotTextRoman_woff}') format('woff');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Haas Grot Text';
    src: url(${NeueHaasGrotTextRoman_eot});
    src: url('${NeueHaasGrotTextItalic_eot}?#iefix') format('embedded-opentype'),
      url('${NeueHaasGrotTextItalic_woff2}') format('woff2'),
      url('${NeueHaasGrotTextItalic_woff}') format('woff');
    font-weight: 400;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Haas Grot Display';
    src: url(${NeueHaasGrotDispRoman_eot});
    src: url('${NeueHaasGrotDispRoman_eot}?#iefix') format('embedded-opentype'),
      url('${NeueHaasGrotDispRoman_woff2}') format('woff2'),
      url('${NeueHaasGrotDispRoman_woff}') format('woff');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Haas Grot Display';
    src: url(${NeueHaasGrotDispItalic_eot});
    src: url('${NeueHaasGrotDispItalic_eot}?#iefix') format('embedded-opentype'),
      url('${NeueHaasGrotDispItalic_woff2}') format('woff2'),
      url('${NeueHaasGrotDispItalic_woff}') format('woff');
    font-weight: 400;
    font-style: italic;
    font-stretch: normal;
  }
`
