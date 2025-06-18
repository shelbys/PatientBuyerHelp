import globals from 'globals';
import pluginJs from '@eslint/js';
//import tseslint from 'typescript-eslint';
import pluginMocha from 'eslint-plugin-mocha';
//import pluginReact from 'eslint-plugin-react';

export default [
  {languageOptions: {globals: {...globals.browser, ...globals.webextensions}}},
  pluginJs.configs.recommended,
  pluginMocha.configs.recommended,
  //pluginReact.configs.flat.recommended,
  //...tseslint.configs.recommended
  {
    files: ['**/*.{js,jsx}'],
    //BUG: Why aren't these honored, but CLI params are?
    ignores: ['.vscode/'],
    rules: {
      'react/prop-types': 0
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
