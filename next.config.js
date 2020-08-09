// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

module.exports = {
  assetPrefix: !debug ? 'https://ivanv88.github.io/ag-copy/' : '',
}
module.exports = withFonts();
module.exports = withSass({
  cssModules: true
});