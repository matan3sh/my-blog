import React from 'react';

import { Layout } from 'components/layout';

const Posts = ({ pageContext: { testingData } }) => {
  return (
    <Layout>
      <h2>I am Posts Page</h2>
      <p>{testingData}</p>
    </Layout>
  );
};

export default Posts;
