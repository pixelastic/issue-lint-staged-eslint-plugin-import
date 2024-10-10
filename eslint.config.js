import pluginImport from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: pluginImport.flatConfigs.recommended.plugins.import,
    },
    rules: {
      ...pluginImport.flatConfigs.recommended.rules,
    },
    //settings: {
    //  // eslint-plugin-import doesn't currently support the "exports" syntax in
    //  // package.json. This is supposed to allow mapping between custom
    //  // entrypoints and files on disk.
    //  // For example, it doesn't understand "import * from 'vitest/config';" as
    //  // "vitest/config/" isn't really an existing filepath, but a mapping defined
    //  // in vitest package.json
    //  //
    //  // Until this is fixed (see
    //  // https://github.com/import-js/eslint-plugin-import/issues/2430)
    //  // we manually define the most common extensions
    //  'import/resolver': {
    //    node: { extensions: ['.js', '.cjs', '.mjs', '.d.ts'] },
    //  },
    //},
  },
];
