// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');


module.exports = withFonts();
module.exports = withSass({
  cssModules: true,
 
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/usluge/štampanje-kopiranje-i-skeniranje': { page: '/usluge/[id]', query: { id: 'štampanje-kopiranje-i-skeniranje' } },
        '/usluge/veliki-formati': { page: '/usluge/[id]', query: { id: 'veliki-formati' } },
        '/usluge/vhs-u-digitalni-format': { page: '/usluge/[id]', query: { id: 'vhs-u-digitalni-format' } },
        '/usluge/koričenje': { page: '/usluge/[id]', query: { id: 'koričenje' } },
        '/usluge/reklamni-materijal-i-id-kartice': { page: '/usluge/[id]', query: { id: 'reklamni-materijal-i-id-kartice' } },
        '/usluge/ostale-usluge': { page: '/usluge/[id]', query: { id: 'ostale-usluge' } },
        '/o-nama': { page: '/o-nama' },
        '/kontakt': { page: '/kontakt' },
      }
    }
  
});

