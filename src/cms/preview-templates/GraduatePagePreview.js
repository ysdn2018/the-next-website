import React from 'react'
// import styled from 'styled-components';

// const Name = styled.h1`
//   font-size: 4rem;
//   text-transform: uppercase;
// `

// const Headshot = styled.img`
//   max-width: 500px;
//   width: 90%;
// `

// const Statement = styled.div`
//   color: pink;
//   text-transform: uppercase;
// `

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

  const twitter = entry.getIn(['data', 'twitter'])
  const instagram = entry.getIn(['data', 'instagram'])
  const linkedin = entry.getIn(['data', 'linkedin'])
  const email = entry.getIn(['data', 'email'])

  
  return (
    <div>
      <div className="disclaimer"> Styling is only a rough approximation of actual styles</div>

      <div className="top-section">
        <img src={headshot} alt="headshot"/>
        <h1 className="name">{name}</h1>
        <div className="statement">
          <h3>{verb}</h3> 
          <h3>the next </h3>
          <h3>{noun}</h3>
        </div>

        <div className="social-links">
          {twitter &&
            <a className="social-link" href={twitter} target="_blank" rel="noopener noreferrer">twitter</a>
          }
          {instagram &&
            <a className="social-link" href={instagram} target="_blank" rel="noopener noreferrer">instagram</a>
          }
          {linkedin &&
            <a className="social-link" href={linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
          }
          {email &&
            <a className="social-link" href={email} target="_blank" rel="noopener noreferrer">email</a>
          }

        </div>
      </div>

      <div>
        {intro}
      </div>

      {music && 
        <div>
          <h4>Music:</h4> 
          {music}
        </div>
      }

      {tools && 
        <div>
          <h4>Tools:</h4> 
          {tools}
        </div>
      }

      {watch && 
        <div>
          <h4>Watch:</h4> 
          {watch}
        </div>
      }

      {typeface && 
        <div>
          <h4>Typefaces:</h4> 
          {typeface}
        </div>
      }
      
    </div>
  )
}

export default GraduatePagePreview