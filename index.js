const { getPlugin, pluginByName, throwUnexpectedConfigError } = require('@craco/craco');

const throwError = (message, githubIssueQuery) => throwUnexpectedConfigError({
  packageName: 'craco-plugin-custom-tsconfig',
  githubRepo: 'manuelurenah/craco-plugin-csutom-tsconfig',
  message,
  githubIssueQuery,
});

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions = {}, context: { env, paths } }) => {
    const { isFound, match } = getPlugin(webpackConfig, pluginByName('ForkTsCheckerWebpackPlugin'));
    if (!isFound)
      throwError('Could not find ForkTsCheckerWebpackPlugin in the webpack config', 'webpack+fork-ts-checker-webpack-plugin');

    const { targetEnv = 'production', tsConfigFileName = 'tsconfig.prod.json' } = pluginOptions;
    match.tsconfig = env === targetEnv ? paths.appTsConfig.replace('tsconfig.json', tsConfigFileName) : paths.appTsConfig;

    return webpackConfig;
  },
};
