// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

module.exports = {
  assetPrefix: !debug ? '/ag-copy/out/' : '',
}
module.exports = withFonts();
module.exports = withSass({
  cssModules: true
});