// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/usluge/štampanje-kopiranje-i-skeniranje': { page: '/usluge', query: { title: 'štampanje-kopiranje-i-skeniranje' } },
      '/usluge/veliki-formati': { page: '/usluge', query: { title: 'veliki-formati' } },
      '/usluge/vhs-u-digitalni-format': { page: '/usluge', query: { title: 'vhs-u-digitalni-format' } },
      '/usluge/koričenje': { page: '/usluge', query: { title: 'koričenje' } },
      '/usluge/reklamni-materijal-i-id-kartice': { page: '/usluge', query: { title: 'reklamni-materijal-i-id-kartice' } },
      '/usluge/ostale-usluge': { page: '/usluge', query: { title: 'ostale-usluge' } },
      '/o-nama': { page: '/o-nama' },
      '/kontakt': { page: '/kontakt' },
    }
  },
}
module.exports = withFonts();
module.exports = withSass({
  cssModules: true
});