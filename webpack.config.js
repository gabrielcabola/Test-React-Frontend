const path = require('path');

module.exports = {
  resolve: {
    root: [path.resolve('./src')],
    extensions: ['js', 'ts'],
    alias: {
      'App': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
}
