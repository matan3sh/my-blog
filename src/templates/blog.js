import React from 'react';

import { Layout } from 'components/layout';

const Blog = ({ pageContext: { slug } }) => {
  return (
    <Layout>
      <h1>I am blog details page</h1>
      <p>{slug}</p>
    </Layout>
  );
};

export default Blog;
