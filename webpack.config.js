module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /.\png$/,
        use: [
          {
            options: {
              outputPath: "images",
              name: "[name] - [sha1:hash:7].[ext]",
            },
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
