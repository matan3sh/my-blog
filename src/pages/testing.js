import React from 'react';
import { Link, graphql } from 'gatsby';

import { Layout } from 'components/layout';

const TestingPage = ({ data }) => {
  return (
    <Layout>
      <h2>I am Posts Page</h2>
      <ul>
        {data.allPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query AllPosts {
    allPosts {
      body
      id
      title
    }
  }
`;

export default TestingPage;
