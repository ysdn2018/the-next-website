import React from 'react'
import styled from 'styled-components';


const Name = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
`

const Headshot = styled.img`
  max-width: 500px;
  width: 90%;
`

const Statement = styled.div`
  color: pink;
  text-transform: uppercase;
`

const GraduatePagePreview = ({ entry, getAsset }) => {
  // const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  var image = entry.getIn(['data', 'image']);
  var headshot = getAsset(image);

  const entryName = entry.getIn(['data', 'title'])
  const name = entryName;

  const noun = entry.getIn(['data', 'noun'])
  const verb = entry.getIn(['data', 'verb'])

  // const questions = entry.getIn(['data', 'intro', 'music', 'tools', 'watch', 'typeface'])
  const intro = entry.getIn(['data', 'intro'])
  const music = entry.getIn(['data', 'music'])
  const tools = entry.getIn(['data', 'tools'])
  const watch = entry.getIn(['data', 'watch'])
  const typeface = entry.getIn(['data', 'typeface'])


  // const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  // const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <div>

      <img src={headshot}/>
      <h1>{name}</h1>
      <h4>
        {verb} the next {noun}
      </h4>


      
    </div>
  )
}

export default GraduatePagePreview