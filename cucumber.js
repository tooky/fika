// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const defaultOptions =
  "--require test/env.js --require 'features/**/*.ts' --publish-quiet";

module.exports = {
  default: `${defaultOptions}`,
};
