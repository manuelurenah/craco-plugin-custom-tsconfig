type EnvType = 'production' | 'development' | 'test' | string;

type WebpackConfigOptions = {
  webpackConfig: any;
  pluginOptions: {
    targetEnv: EnvType;
    tsConfigFileName: string;
  };
  context: {
    env: EnvType;
    paths: any;
  }
}
type Plugin = {
  overrideWebpackConfig: (options: WebpackConfigOptions) => any;
}

declare const plugin: Plugin;

export default plugin;
