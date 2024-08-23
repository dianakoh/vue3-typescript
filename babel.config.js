const plugins = [];
if (process.env.NODE_ENV !== 'development') {
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }]);
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins,
};
