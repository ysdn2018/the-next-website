import React from 'react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../utils/constants'

import PageContainer from '../components/PageContainer'
import SectionHeading from '../components/SectionHeading'

import RL_Logo from '../assets/images/rl-solutions.svg'
import GladstoneLogo from '../assets/images/gladstone.svg'
import SheridanLogo from '../assets/images/sheridan.svg'
import YorkLogo from '../assets/images/york.svg'
import VeritifLogo from '../assets/images/veritif.svg'
import WattLogo from '../assets/images/watt.svg'
import ForgeLogo from '../assets/images/forge.svg'
import CriticalMassLogo from '../assets/images/critical-mass.svg'

const SponsorContainer = styled.div `
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.mobile} ) {
    flex-direction: column;
  }
`

const Sponsor = styled.div`

`


const PresentingSponsor = styled.div `
  border-bottom: 1px solid;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  h5 {
    margin-top: 15px;
  }

  img {
    width: 50%;
    max-width: 800px;
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {
    height: 50vh;
  }

`

const SponsorTwo = styled.div`
  width: 50%;
  height: 60vh;
  border-bottom: 1px solid;
  border-right: 1px solid;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 50%;
    max-width: 800px;
        justify-content: center;
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {
    width: 100%;
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

  @media screen and (max-width: ${breakpoints.mobile} ) {
    width: 100%;
    border-right: 0px;
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
    width: 50%;
    max-width: 400px;
  }

  @media screen and (max-width: ${breakpoints.mobile} ) {
    width: 100%;
  }
`

// page component
export default function Sponsors({ data }) {
  return (
    <PageContainer>
      <SponsorContainer>
        <PresentingSponsor>
          <h5>Presenting Sponsor</h5>
          <img src = {RL_Logo} alt="RL Solutions"/>
        </PresentingSponsor>
      </SponsorContainer>

      <SponsorContainer>
        <SponsorTwo>
          <h5>Venue Sponsor</h5>
          <img src = {GladstoneLogo} alt="Gladstone Hotel"/>
        </SponsorTwo>
        <SponsorTwo>
          <h5>Print Sponsor</h5>
          <img src = {VeritifLogo} alt="Veritif"/>
        </SponsorTwo>
      </SponsorContainer>

      <SponsorContainer>
        <SponsorThree>
          <h5>Event Sponsors</h5>
          <img src = {CriticalMassLogo} alt="Critical Mass"/>
          <img src = {ForgeLogo} alt="Forge Media"/>
          <img src = {WattLogo} alt="Watt International"/>
        </SponsorThree>
        <SponsorFour>
          <h5>With Support From</h5>
          <img src = {YorkLogo} alt="York University"/>
          <img src = {SheridanLogo} alt="Sheridan College"/>
        </SponsorFour>
      </SponsorContainer>

    </PageContainer>
  )
}
