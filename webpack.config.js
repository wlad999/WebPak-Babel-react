module.exports = {
  mode: "development",
  module: {
    rules: [
      //-----------------Loading images---------------------------
      {
        test: /\.(png|jpeg|jpg|gif|ico)$/,
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
      //----------------Loading fonts--------------------------
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            options: {
              outputPath: "fonts",
              name: "[name].[ext]",
            },
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
