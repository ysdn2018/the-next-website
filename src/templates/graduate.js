import React from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'


// styled-components
const Content = styled.div`
  p {
    max-width: 500px;
  }
`


// page template component
export default function Post({ data }) {
  const graduate = data.markdownRemark;

  return (
    <div>
      <h3>{graduate.frontmatter.title}</h3>
      {/* <Content dangerouslySetInnerHTML={{ __html: project.html }}/> */}
      <Img resolutions={graduate.frontmatter.image.childImageSharp.resolutions}/>
    </div>
  );
};


// template query
export const aboutPageQuery = graphql`
  query GraduatePage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            resolutions(width: 600) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;
