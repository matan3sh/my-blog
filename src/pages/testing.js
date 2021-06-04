import React from 'react';
import { Link, graphql } from 'gatsby';

import { Layout } from 'components/layout';

const TestingPage = ({ data }) => {
  const posts = data.allPost.nodes;
  return (
    <Layout>
      <h2>I am Posts Page</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allPost {
      nodes {
        body
        title
        id
      }
    }
  }
`;

export default TestingPage;
