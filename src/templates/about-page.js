import React from 'react';
import styled from 'styled-components'

// styled components
const Title = styled.h1`

`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`

// page template component
export default function AboutPage({ data }) {
  const pageData = data.markdownRemark;

  return (
    <div>
      <Title>{pageData.title}</Title>
      <h2>{pageData.subtitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: pageData.html }}></div>

      <List>
        {pageData.frontmatter.exampleList.map( (listItem, i) =>
          <li key={i}>
            {listItem.text}
          </li>
        )}
      </List>

    </div>
  );
};


// template query
export const aboutPageQuery = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title

        exampleList {
          text
        }
      }
    }
  }
`;
