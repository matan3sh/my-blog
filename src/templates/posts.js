import React from 'react';
import { Link } from 'gatsby';

import { Layout } from 'components/layout';

const Posts = ({ pageContext: { posts } }) => {
  return (
    <Layout>
      <h2>I am Posts Page</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Posts;
