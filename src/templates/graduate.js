import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'
import Statement from '../components/Statement'


// styled-components

const Profile = styled.div`
  border: 1px solid black;
  width: 25%;
  height: 88%;
  position: fixed;
  margin: 15px;
  padding: 10px;

  h2 {
    text-transform: uppercase;
  }

  img{
    width: 50%;
  }

`

const Info = styled.div `
  width: 60%;
  float: right;
  margin: 15px;
  padding: 10px;
`

// page template component

export default function Post({ data }) {
  const graduate = data.markdownRemark;

  return (
    <React.Fragment>

      <Profile>
        <h2>{graduate.frontmatter.title}</h2>
        <Img resolutions={graduate.frontmatter.image.childImageSharp.resolutions}/>
        <h2>{graduate.frontmatter.verb} The Next {graduate.frontmatter.noun}</h2>
      </Profile>

      <Info>
        <h2>About</h2>
      </Info>

    </React.Fragment>
  );
};


// template query
export const aboutPageQuery = graphql`
  query GraduatePage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        noun
        verb
        image {
          childImageSharp {
            resolutions(width: 200) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;
