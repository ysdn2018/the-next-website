import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Statement from '../Statement'

/*
  Base component
  Copy this directory and rename to your choosing
*/

const OuterContainer = styled.div`
  border: 1px solid black;

  margin-top: -1px;
  margin-left: -1px;
  padding: 1rem;
`

// styled components
const Container = styled(Link)`
  position: relative;
  display: flex;
  height: 100%;


`


const Text = styled.h3`
  color: black;
  text-transform: uppercase;
  margin: 1rem 0.7rem ;
  line-height: 1.1;
`

const LookingImage = styled(Img)`
  position: absolute;
  top: 0;
  height: 100%;
  width: calc(100% - 2px);
`

const NormalImage = styled(Img) `
  margin: 0 1rem;
  margin-top: 5px;

  border-radius: 50%;

  &.image {
    margin-top: 8px;
  }

  img {
    height: 65px !important;
  }

  height: 50px !important;
  

  position: relative;
  z-index: 3;
  width: calc(100% - 2px);
`

const ImagesOuterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
  
const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
`;


// component
export default function Graduate(props) {
  return (
    <OuterContainer>
      <Container to={props.path}>
        {/* <ImagesOuterContainer>
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
        </ImagesOuterContainer> */}

        <TextContainer>
          <NormalImage
            resolutions={props.image}
            className="image"
            outerWrapperClassName="image-wrapper"
            backgroundColor
          />
          <Text>{props.title}</Text>
          
        </TextContainer>

        
        
      </Container>
    </OuterContainer>
  )
}
