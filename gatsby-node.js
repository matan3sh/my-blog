const axios = require('axios');

exports.createPages = async ({ actions: { createPage } }) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = res.data;
  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.id}`,
      component: require.resolve('./src/templates/post.js'),
      context: { post },
    });
  });

  createPage({
    path: '/posts',
    component: require.resolve('./src/templates/posts.js'),
    context: { posts },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type PostContent {
      title: String
      text: String
    }

    type PostJson {
      id: ID
      title: String
      body: String!
      wordCount: Int
      isActive: Boolean
      rating: Float
      tags: [String!]!
      content: PostContent
    }
  `;

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      allPosts: {
        type: ['PostJson'],
        args: {
          filter: 'String',
          limit: 'Int',
        },
        resolve(source, args, context, info) {
          const { filter } = args;
          const posts = [
            {
              id: '1',
              title: 'Hello World',
              body: 'My Custom Text',
              wordCount: 200,
              isActive: true,
              rating: 4.23,
              tags: ['Programming', 'Development', 'React JS'],
              content: {
                text: 'My content text',
                title: 'My content title',
              },
            },
            {
              id: '2',
              title: 'Hello World2',
              body: 'My Custom Text2',
              wordCount: 300,
              isActive: false,
              rating: 2.23,
              tags: ['Vue JS', 'Next JS', 'React JS'],
              content: {
                text: 'My content text2',
                title: 'My content title2',
              },
            },
          ];

          if (filter) {
            return posts.filter((post) => post.title === filter);
          }

          return posts;
        },
      },
    },
  };

  createResolvers(resolvers);
};
