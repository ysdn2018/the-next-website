import React from 'react';
import styled from 'styled-components'


// styled-components
const Content = styled.div`
  p {
    max-width: 500px;
  }
`


// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;

  return (
    <div>
      <h3>{project.frontmatter.title}</h3>
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
      }
    }
  }
`;
