import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { spacing, breakpoints } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import GridStatement from '../components/GridStatement'

import RL_Logo from '../assets/images/rl-solutions.svg'
import GladstoneLogo from '../assets/images/gladstone.svg'
import SheridanLogo from '../assets/images/sheridan.svg'
import YorkLogo from '../assets/images/york.svg'
import VeritifLogo from '../assets/images/veritif.svg'
import WattLogo from '../assets/images/watt.svg'
import ForgeLogo from '../assets/images/forge.svg'
import CriticalMassLogo from '../assets/images/critical-mass.svg'

const Container = styled.div`
  display: flex;
  padding-bottom: ${spacing.big + 2}px;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    flex-direction: column;
  }
`;

const SponsorContainer = styled.div `
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    flex-direction: column;
  }
`

const InnerInfoContainer = styled.div`

`

const ThankYouContainer = styled.div`
  padding: ${spacing.normal}px;

  p {
    margin: 0;
  }

`;

const InfoContainer = styled.div`
  height: calc(100vh - ${spacing.bigger*2-4}px);
  width: 100%;
  max-width: 400px;
  border: 1px solid black;
  border-top: 0;
  border-left: none;

  position: sticky;
  top: ${spacing.bigger}px;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    max-width: 100%;
    height: 100%;
    position:relative;
    border: 0;
    top: 0;
  }
`;

const StatementContainer = styled.div`
  height: 400px;
  border-right: 0px !important;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    height: 100%;
  }

`;

const AllSponsors = styled.div`
  width: 100%;
  height: calc(100%-${spacing.bigger}px);
`


const SponsorImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.column && "flex-direction: column;"}
  ${props => props.justify && "justify-content: space-around; width:90%"}

  @media screen and (max-width: ${breakpoints.tablet} ) {
    flex-direction: column;
  }

`

const Title = styled.h5 `
  margin-top: 10px;
`


const PresentingSponsor = styled.div `
  border-bottom: 1px solid;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  h5 {
    margin-top: 10px;
  }

  a {
    width: 50%;
    max-width: 800px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    height: 100%;
    border-top: 1px solid;

    a {
      padding: ${spacing.bigger}px;
      width: 100%;
    }
  }

`

const Video = styled.div `
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  height: 50vh;
  width: 100%;

  @media screen and (max-width: ${breakpoints.mediumScreen} ) {
    flex-direction: column;
    height: 100%;

    iframe {
      height: 400px !important;
    }
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    flex-direction: column;
    height: 100%;

    iframe {
      height: 250px !important;
      padding: 0;
      display: block;
    }
  }
`

const RlIntro = styled.div `
  width: 100%;
  border-right: 1px solid;

  p {
    font-size: 1.9rem;
    padding: ${spacing.small}px;
    margin: 0;
    max-width: 600px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {

    border-right: 0px;

    p {
      font-size: 1.5rem;
      padding: ${spacing.normal}px;
    }

  }
`

const SponsorTwo = styled.div`
  width: 50%;
  height: 60vh;
  border-bottom: 1px solid;
  ${props => props.borderRight && 'border-right: 1px solid;'}
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    width: 50%;
    max-width: 800px;
  }

  @media screen and (max-width: ${breakpoints.tablet})  {
    width: 100%;
    height: 100%;
    border-right: 0;

    a {
      padding: ${spacing.bigger}px;
      width: 80%;
    }
  }
`
const SponsorThree = styled.div `
  display: flex;
  justify-content: space-around;
  width: 65%;
  height: 40vh;
  border-bottom: 1px solid;
  border-right: 1px solid;
  align-items: center;
  flex-direction: column;

  a {
    width: 20%;
    max-width: 500px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    width: 100%;
    border-right: 0px;
    height: 100%;

    a {
      padding: ${spacing.small}px;
      width: 60%;
    }
  }
`

const SponsorFour = styled.div`
  width: 35%;
  height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid;

  a {
    width: 40%;
    max-width: 400px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    width: 100%;
    height: 100%;

    a {
      padding: ${spacing.small}px;
      width: 60%;
    }
  }
`


// page component
export default function Sponsors({ data }) {
  return (
    <Container>

    <Helmet title="THE NEXT | SPONSORS" />

    <InfoContainer>
      <InnerInfoContainer>
      <StatementContainer>
        <GridStatement
          verb="Thanking"
          noun="Sponsors"
          border
          noBorderRight
        />
      </StatementContainer>
      <ThankYouContainer>
          <p>The work YSDN students put into the grad show wouldn't have come to fruition without some wonderful people willing to back us up. Thank you to all our sponsors for their support in THE NEXT grad show.</p>
      </ThankYouContainer>
      </InnerInfoContainer>
    </InfoContainer>

      <AllSponsors>
      <SponsorContainer>
        <PresentingSponsor>
          <Title>Presenting Sponsor</Title>
          <SponsorImage>
            <a href="http://www.rlsolutions.com/" target="_blank"><img src = {RL_Logo} alt="RL Solutions"/></a>
          </SponsorImage>
        </PresentingSponsor>
      </SponsorContainer>

      <SponsorContainer>
        <Video>
          <RlIntro>
            <p>Earlier this year, RL Solutions opened up their studio for YSDN students to present and receive feedback on how to move forward with their projects. It was a day for students to refine their presentation skills, reflect more critically on their work, and take their projects outside of the classroom. For this incredible opportunity, and for their generosity as our presenting sponsor, the YSDN students would like to give a big thanks to RL solutions for making THE NEXT grad show a possibility.</p>
          </RlIntro>
          <iframe width="100% !important" height="auto !important" src="https://www.youtube.com/embed/bBg4uLulOVM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </Video>
      </SponsorContainer>

      <SponsorContainer>
        <SponsorTwo borderRight>
          <Title>Venue Sponsor</Title>
          <SponsorImage>
            <a href="http://www.gladstonehotel.com/" target="_blank"><img src = {GladstoneLogo} alt="Gladstone Hotel"/></a>
          </SponsorImage>
        </SponsorTwo>
        <SponsorTwo>
          <Title>Print Sponsor</Title>
          <SponsorImage>
            <a href="https://www.veritivcorp.com/" target="_blank"><img src = {VeritifLogo} alt="Veritif"/></a>
          </SponsorImage>
        </SponsorTwo>
      </SponsorContainer>

      <SponsorContainer>
        <SponsorThree>
          <Title>Event Sponsors</Title>
          <SponsorImage justify>
            <a href="https://www.criticalmass.com/" target="_blank"><img src = {CriticalMassLogo} alt="Critical Mass"/></a>
            <a href="https://www.forgemedia.ca/" target="_blank"><img src = {ForgeLogo} alt="Forge Media"/></a>
            <a href="https://www.wattisretail.com/" target="_blank"><img src = {WattLogo} alt="Watt International"/></a>
          </SponsorImage>
        </SponsorThree>
        <SponsorFour>
          <Title>With Support From</Title>
          <SponsorImage column>
            <a href="http://www.yorku.ca/index.html" target="_blank"><img src = {YorkLogo} alt="York University"/></a>
            <a href="https://www.sheridancollege.ca/" target="_blank"><img src = {SheridanLogo} alt="Sheridan College"/></a>
          </SponsorImage>
        </SponsorFour>
      </SponsorContainer>
    </AllSponsors>

    </Container>
  )
}
