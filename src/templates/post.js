import React from 'react';

import { Layout } from 'components/layout';

const Post = ({ pageContext: { post } }) => {
  return (
    <Layout>
      <h1>Post Detail Page</h1>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </Layout>
  );
};

export default Post;
