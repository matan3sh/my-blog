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

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = res.data;

  posts.forEach((post) => {
    const node = {
      title: post.title,
      body: post.body,
      id: createNodeId(`Post-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Post',
        contentDigest: createContentDigest(post),
        content: JSON.stringify(post),
      },
    };
    actions.createNode(node);
  });
};
