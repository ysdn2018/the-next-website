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
  
  return (
    <div>

      <div className="top-section">
        <img src={headshot}/>
        <h1>{name}</h1>
        <div className="statement">
          <h3>{verb}</h3> 
          <h3>the next </h3>
          <h3>{noun}</h3>
        </div>
      </div>

      <div>
        {intro}
      </div>

      <div>
        <h4>Music:</h4> 
        {music}
      </div>

      <div>
        <h4>Tools:</h4> 
        {tools}
      </div>

      <div>
        <h4>Watch:</h4> 
        {watch}
      </div>

      <div>
        <h4>Watch:</h4> 
        {typeface}
      </div>
      
    </div>
  )
}

export default GraduatePagePreview