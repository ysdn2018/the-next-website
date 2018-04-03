import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

/*
  Base component
  Copy this directory and rename to your choosing
*/

const OuterContainer = styled.div`
  border: 1px solid black;
  overflow: hidden;
`

// styled components
const Container = styled(Link)`
  position: relative;
`


const Text = styled.p`
  z-index: 4;
  color: black;
  max-width: 100%;
  text-transform: uppercase;
  margin: 0.4rem;
  font-size: 1.4rem; 
`

const LookingImage = styled(Img)`
  position: absolute;
  top: 0;
  height: 100%;
  width: calc(100% - 2px);
`

const NormalImage = styled(Img) `
  &:hover {
    opacity: 0;
  }

  position: relative;
  z-index: 3;
  width: calc(100% - 2px);
`

const ImagesOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


  
const ImagesContainer = styled.div`
  position: relative;

`;


// component
export default function Graduate(props) {
  return (
    <OuterContainer>
      <Container to={props.path}>
        <ImagesOuterContainer>
          <ImagesContainer>
          <NormalImage
            resolutions={props.image}
            className="image"
            backgroundColor
          />
          <LookingImage
            resolutions={props.imageHover}
            style={{position: "absolute"}}
            className=".image"
          />
          </ImagesContainer>
        </ImagesOuterContainer>
        <Text>{props.title}</Text>
      </Container>
    </OuterContainer>
  )
}
