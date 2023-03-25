/* istanbul ignore file */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.dev.cloud.barbooksaustralia.com/code-challenge',
      changeOrigin: true,
    })
  );

  app.use(
    '/g',
    createProxyMiddleware({
      target: 'https://api.dev.cloud.barbooksaustralia.com/code-challenge',
      changeOrigin: true,
    })
  );
};
