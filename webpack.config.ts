// IMPORTS
const path = require('path');

// EXPORTS
module.exports = {
  resolve: {
    alias: {
      'mail-templates': path.resolve(__dirname, 'src/mail-templates'),
    },
    extensions: ['.js', '.ts', '.json']
  }
};