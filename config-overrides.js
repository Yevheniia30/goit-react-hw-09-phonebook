/* config-overrides.js */
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  alias({
    // example: 'example/src',
    '@components': 'src/Components',
    '@views': 'src/views',
    '@redux': 'src/redux',
    // '@components': 'src/Components',
    // '@components': 'src/Components',
  })(config);
  return config;
};
