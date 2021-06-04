import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/layout';

const Blogs = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.relativePath}>
            <p>{node.relativePath}</p>
            <p>{node.extension}</p>
            <p>{node.birthTime}</p>
            <p>{node.prettySize}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        relativePath
        prettySize
        extension
        birthTime(fromNow: true)
      }
    }
  }
`;

export default Blogs;
