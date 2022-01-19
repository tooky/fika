// eslint-disable-next-line @typescript-eslint/no-var-requires
require("ts-node").register({
  extends: __dirname + "/../tsconfig.json",
  transpileOnly: true,
  compilerOptions: {
    module: "commonjs",
    target: "es6",
    jsx: "react",
  },
});
