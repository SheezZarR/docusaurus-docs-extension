import { Plugin, LoadContext } from '@docusaurus/types';
// Import the plugin factory function and its options type
import originalPluginPkg, {
  Options as DocsOptions,
} from '@docusaurus/plugin-content-docs';

/* 
No declaration file available. See consult the documentation:
https://github.com/oyslin/replace-in-file-webpack-plugin
*/
import ReplaceInFileWebpackPlugin from 'replace-in-file-webpack-plugin';

export { validateOptions } from '@docusaurus/plugin-content-docs';

export default async function extendedDocsPlugin(
  context: LoadContext,
  options: DocsOptions,
): Promise<Plugin<any>> {
  // 1. Initialize the parent plugin instance
  const pluginInstance = await originalPluginPkg(context, options);

  return {
    // 2. Inherit all parent methods
    ...pluginInstance,

    configureWebpack(config, isServer, utils, content) {
      const parentWebpack = pluginInstance.configureWebpack(config, isServer, utils, content)
      
      console.log('EXPLORING PARENT WEBPACK', JSON.stringify(parentWebpack))
      const outputConfig = {
        ...parentWebpack,
        plugins: [
          new ReplaceInFileWebpackPlugin([
            {
              dir: __dirname,
              test: /\*.tsx/,
              rules: [
                {
                  search: '|REPLACE_ME|',
                  replace: 'REPLACED'
                }
              ]
            },
          ])
        ]
      }
      console.log('EXPLORING PARENT WEBPACK', JSON.stringify(outputConfig))
      // return parentWebpack
      return outputConfig
    }
  };
}
