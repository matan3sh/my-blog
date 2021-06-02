import React from 'react';
import { Layout } from 'components/layout';

import { graphql } from 'gatsby';

const About = ({ data }) => {
  return (
    <Layout>
      <h2>{data.site.siteMetadata.title}</h2>
      <h2>{data.site.siteMetadata.body.content}</h2>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        body {
          content
        }
      }
    }
  }
`;

export default About;
