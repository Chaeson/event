const ansiRegex = require('ansi-regex')

module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify","vuetify-dialog",ansiRegex],
  publicPath:'/pamphlet'
};
