const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@danilok/modulo-comum'])

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
