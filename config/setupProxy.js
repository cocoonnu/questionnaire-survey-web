module.exports = {
  '/api/*': {
    target: 'http://192.168.10.179:8080',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^/api': '' },
  },
  '/address/*': {
    target: 'https://apis.map.qq.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^/address': '' },
  },
}
