if (process.env.NODE_ENV === "development") {
  require("./scripts/.babelrc/development");
} else if (process.env.NODE_ENV === "production") {
  require("./scripts/.babelrc/production");
} else if (process.env.NODE_ENV === "test") {
  require("./scripts/.babelrc/development");
} else {
  throw new Error("Unknown Mode");
}

module.exports = {
  plugins: [
    [
      "@babel/plugin-proposal-optional-chaining",
      {
        loose: true
      }
    ],
    ["@babel/plugin-proposal-numeric-separator"]
  ]
};
