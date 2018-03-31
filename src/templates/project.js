import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

// styled-components
const Content = styled.div`
  p {
    max-width: 500px;
  }
`

const HeroImage = styled(Img)`
  height: 90vh;
`


// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <div>
      <HeroImage sizes={project.frontmatter.image.childImageSharp.sizes}/>
      <h3>{project.frontmatter.title}</h3>
      <h5>by:
      <Link to={`/graduates/${grad.replace(/\s+/g, "-").toLowerCase()}/`}>
        {grad}
      </Link>
      </h5>
      <Content dangerouslySetInnerHTML={{ __html: project.html }}/>
      
    </div>
  );
};


// template query
export const aboutPageQuery = graphql`
  query ProjectPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        graduate

        image {
              childImageSharp {
                sizes(maxWidth: 1500, quality: 90, maxHeight: 600, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
      }
    }
  }
`;
