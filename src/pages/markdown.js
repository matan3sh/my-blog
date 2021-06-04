import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'components/layout';

const MarkdownPage = ({ data }) => {
  const { totalCount, nodes } = data.allMarkdownRemark;

  return (
    <Layout>
      <h4>{totalCount} Posts</h4>
      {nodes.map(({ id, frontmatter, excerpt }) => (
        <div key={id}>
          <h3>
            {frontmatter.title} <span> - {frontmatter.date}</span>
          </h3>
          <p>{excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        excerpt
      }
    }
  }
`;

export default MarkdownPage;
