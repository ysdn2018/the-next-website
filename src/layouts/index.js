import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import 'normalize.css'
import { spacing, breakpoints } from '../utils/constants'
import Nav from '../components/Nav'
import InfoDrawer from '../components/InfoDrawer'
import './index.css'

import facebookCard from "../assets/images/facebook_card.png"
import twitterCard from "../assets/images/twitter_card.png"

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
  padding: ${spacing.big + 3}px 0;
`;

// page component
function TemplateWrapper(props) {
  const { location } = props;

  let rootPath = `/`

  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <React.Fragment>
      <Helmet
        title="THE NEXT"
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
          { name: 'description', content: 'The Next Design Grad Show by York University/Sheridan College' },
          { name: 'keywords', content: 'York University, Sheridan College, ysdn, design, york, sheridan, the next, the next gradshow' },
          { property: 'author', content: 'York University/Sheridan College Joint Program in Design' },
          { property: 'og:url', content: 'http://thenext.website' },
          { property: 'og:title', content: 'EXPERIENCE THE NEXT GRAD SHOW' },
          { property: 'og:description', content: 'The Next Design Grad Show by York University/Sheridan College' },
          { property: 'og:image', content: 'http://thenext.website' + facebookCard },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:title', content: 'EXPERIENCE THE NEXT GRAD SHOW' },
          { property: 'twitter:description', content: 'The Next Design Grad Show by York University/Sheridan College' },
          { property: 'twitter:image', content: 'http://thenext.website' + twitterCard },
          { property: 'twitter:image:alt', content: 'EXPERIENCE THE NEXT GRAD SHOW' },
        ]}
      />

      <Nav currentPage={location.pathname}/>

      <InnerContainer>
        {props.children()}
      </InnerContainer>

      {location.pathname !== rootPath && <InfoDrawer />}

    </React.Fragment>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper