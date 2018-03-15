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
  const student = data.markdownRemark;

  return (
    <div>
      <h3>{student.frontmatter.name}</h3>
      {/* <Content dangerouslySetInnerHTML={{ __html: project.html }}/> */}
      <img src={student.frontmatter.headshot}/>
    </div>
  );
};


// template query
export const aboutPageQuery = graphql`
  query StudentPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
        headshot
      }
    }
  }
`;
