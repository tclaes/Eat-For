const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://gydmu24m.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;