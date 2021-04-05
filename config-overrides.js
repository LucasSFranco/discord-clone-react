const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@helpers': 'src/helpers',
    '@hooks': 'src/hooks',
    '@pages': 'src/pages',
    '@services': 'src/services',
    '@styles': 'src/styles',
    '@store': 'src/store',
  })(config);

  return config;
};
