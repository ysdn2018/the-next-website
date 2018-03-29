import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'

// styled-components
const Content = styled.div`
  p {
    max-width: 500px;
  }
`


// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <div>

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
      }
    }
  }
`;
