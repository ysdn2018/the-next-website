import React from 'react'
import styled from 'styled-components'
import Instagram from '../Instagram'
import Facebook from '../Facebook'
import { spacing, breakpoints } from '../../utils/constants.js'

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  height: 380px;
  width: 100%;
  background-color: #00B919;
  border-top: 1px solid;

  p {
    font-size: 2.5rem;
    line-height: 0.1;
    margin-bottom: 1rem;
  }

  h2 {
    text-transform: none;
    font-size: 4rem;
    line-height: 1.1;
  }

  h3 {
    text-transform: none;
    font-size: 3.5rem;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  h4 {
    text-transform: uppercase;
    font-size: 2.5rem;
    margin: ${spacing.smaller}px 0;
  }

  @media screen and (max-width: ${breakpoints.smallScreen} ) {

    h2 {
      font-size: 3.35rem;
    }

    h3 {
      font-size: 2.9rem;
    }

    h4 {
      font-size: 2.2rem;
    }

    p {
      font-size: 2.2rem;
    }

  }

  @media screen and (max-width: ${breakpoints.tablet} ) {

    height: 80vh;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 4.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 2.2rem;
      line-height: 1.1;
      margin-bottom: .2rem;
    }

    h4 {
      font-size: 1.8rem;
      line-height: 1.2;
      margin-bottom: .1rem;
    }

    p {
      font-size: 1.8rem;
      line-height: .1;
    }

  }

  @media screen and (max-width: ${breakpoints.saba} ) {

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    h4 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.4rem;
    }

  }

`

const ShowInfo = styled.div`
  width: 95%;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`

const ShowTitle = styled.div`
  width: 100%;
  padding: ${spacing.small}px;
  border-right: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (max-width: ${breakpoints.tablet}) {
    border-right: 0px;
    border-bottom: 1px solid;
  }

`

const ShowTimes = styled.div`
  padding: ${spacing.small}px ${spacing.normal}px;
  border-right: 1px solid;
  width: 45%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.smaller}px ${spacing.small}px;
    width: 100%;
    border-right: 0px;
    border-bottom: 1px solid;
    align-content: center;
  }

`

const ShowDate = styled.div`
  margin-bottom: ${spacing.big}px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.saba}) {
    margin-top: .8rem;
    margin-bottom: .8rem;
  }

`

const ShowNight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .2rem;

  .tighten {
    margin-right: -0.7%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .tighten {
      margin-right: -.5%;
    }
  }
`

const ShowAddress = styled.div`
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 5%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    flex-direction: row;
    height: ${spacing.bigger+spacing.normal}px;
  }
`

// component
export default function HomeInfo() {
    return (
      <InfoContainer>

        <ShowInfo>

          <ShowTitle>
            <h2>The Next Design Grad Show <br></br>By York University/Sheridan College</h2>
            <ShowAddress>
              <p>Gladstone Hotel</p>
              <p>1214 Queen St. West</p>
              <p>Toronto, Ontario</p>
            </ShowAddress>
          </ShowTitle>

          <ShowTimes>
            <ShowDate>
              <h4>April 11</h4>
              <ShowNight>
                <h3>Industry Night</h3>
                <h3>5PM-8PM</h3>
              </ShowNight>
              <ShowNight>
                <h3>Opening Night</h3>
                <h3 className="tighten">8PM-10PM</h3>
              </ShowNight>
            </ShowDate>
            <ShowDate>
              <h4>April 12-13</h4>
              <ShowNight>
                <h3>Public Viewing</h3>
                <h3>11AM-4PM</h3>
              </ShowNight>
            </ShowDate>
          </ShowTimes>

        </ShowInfo>

        <SocialLinks>
          <Instagram />
          <Facebook />
        </SocialLinks>

      </InfoContainer>
    )
  }
