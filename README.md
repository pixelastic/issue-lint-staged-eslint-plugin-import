This repo holds a reproduction for issue [#1474](https://github.com/lint-staged/lint-staged/issues/1474) on `lint-staged`.

Run `yarn run test` to see ESLint failing. Manually add `"main":
"./lib/index.js"` to `node_modules/lint-staged/package.json` to see the error go
away.
