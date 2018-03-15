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
  const post = data.markdownRemark;

  return (
    <div>
      <h3>{post.title}</h3>
      <Content dangerouslySetInnerHTML={{ __html: post.html }}/>
    </div>
  );
};


// template query
export const aboutPageQuery = graphql`
  query PostPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
