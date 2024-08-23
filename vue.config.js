module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Documents",
    },
  },
  publicPath: "/",
  configureWebpack: {
    mode: "development",
    devtool: "eval-source-map",
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
};
