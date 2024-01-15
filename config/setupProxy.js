module.exports = {
  '/api/*': {
    target: 'http://192.168.7.128:19005',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api': '',
    },
  },
}
