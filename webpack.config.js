module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
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
