import { Plugin, LoadContext } from '@docusaurus/types';
// Import the plugin factory function and its options type
import originalPluginPkg, {
  Options as DocsOptions,
} from '@docusaurus/plugin-content-docs';

/* 
No declaration file available. See consult the documentation:
https://github.com/oyslin/replace-in-file-webpack-plugin
*/
// import ReplaceInFileWebpackPlugin from 'replace-in-file-webpack-plugin';

export default async function extendedDocsPlugin(
  context: LoadContext,
  options: DocsOptions,
): Promise<Plugin<any>> {
  // 1. Initialize the parent plugin instance
  const pluginInstance = await originalPluginPkg(context, options);

  return {
    // 2. Inherit all parent methods
    ...pluginInstance,

    // 3. Provide a unique plugin namebb
    name: 'my-plug',
    
    // // 4. Extend the webpack configuration safely
    // configureWebpack(config, isServer, utils, content) {
    //   const parentWebpack = pluginInstance.configureWebpack
    //     ? pluginInstance.configureWebpack(config, isServer, utils, content)
    //     : {};

    //   if (!parentWebpack)
    //     // or something else entirely??? ueo
    //     return parentWebpack;

    //   return {
    //     ...parentWebpack,
       
    //   };
    // },
  };
}
