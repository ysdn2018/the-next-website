import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { spacing, breakpoints } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import Statement from '../components/Statement'

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
  height: calc(100vh - ${spacing.bigger}px);
  width: 100%;
  max-width: 400px;
  border: 1px solid black;
  border-top: 0;
  border-left: none;

  position: sticky;
  top: ${spacing.bigger}px;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    max-width: 100%;
    position: relative;
    border: 0;
  }
`;

const StatementContainer = styled.div`
  padding: ${spacing.small}px ${spacing.smaller}px;
  border-bottom: 1px solid black;
  height: 200px;

  @media screen and (max-width: ${breakpoints.tablet} ) {
    height: 100%;
  }

`;

const AllSponsors = styled.div`
  width: 100%;
`;


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

  img {
    width: 50%;
    max-width: 800px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    height: 50vh;
    border-top: 1px solid;
    
    img {
      width: 80%;
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

  img {
    width: 50%;
    max-width: 800px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    width: 100%;
    height: 50vh;
    border-right: 0;

    img {
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

  img {
    width: 20%;
    max-width: 500px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    width: 100%;
    border-right: 0px;
    height: 60vh;

    img {
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

  img {
    width: 40%;
    max-width: 400px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: ${breakpoints.tablet} ) {
    width: 100%;
    height: 50vh;

    img {
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
        <Statement
          verb="Thanking"
          noun="Sponsors"
          border
        />
      </StatementContainer>
      <ThankYouContainer>
          <p>We would like to express our gratitude to our generous sponsors. This show wouldn’t have been possible without their kind support.</p>
      </ThankYouContainer>
      </InnerInfoContainer>
    </InfoContainer>

      <AllSponsors>
      <SponsorContainer>
        <PresentingSponsor>
          <Title>Presenting Sponsor</Title>
          <SponsorImage>
            <img src = {RL_Logo} alt="RL Solutions"/>
          </SponsorImage>
        </PresentingSponsor>
      </SponsorContainer>

      <SponsorContainer>
        <SponsorTwo borderRight>
          <Title>Venue Sponsor</Title>
          <SponsorImage>
            <img src = {GladstoneLogo} alt="Gladstone Hotel"/>
          </SponsorImage>
        </SponsorTwo>
        <SponsorTwo>
          <Title>Print Sponsor</Title>
          <SponsorImage>
            <img src = {VeritifLogo} alt="Veritif"/>
          </SponsorImage>
        </SponsorTwo>
      </SponsorContainer>

      <SponsorContainer>
        <SponsorThree>
          <Title>Event Sponsors</Title>
          <SponsorImage justify>
            <img src = {CriticalMassLogo} alt="Critical Mass"/>
            <img src = {ForgeLogo} alt="Forge Media"/>
            <img src = {WattLogo} alt="Watt International"/>
          </SponsorImage>
        </SponsorThree>
        <SponsorFour>
          <Title>With Support From</Title>
          <SponsorImage column>
            <img src = {YorkLogo} alt="York University"/>
            <img src = {SheridanLogo} alt="Sheridan College"/>
          </SponsorImage>
        </SponsorFour>
      </SponsorContainer>
    </AllSponsors>

    </Container>
  )
}
