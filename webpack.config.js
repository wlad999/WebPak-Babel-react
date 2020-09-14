const HtmlWebpackPlugin = require("html-webpack-plugin");
//require - аналог import для node.js
//webpack.config.js исполняется в среде Node.js
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        //use: [
        //  {
        loader: "babel-loader",
        //  },
        //],
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
      //-----------Loading css--------------
      {
        test: /\.(css)$/,
        use: [
          //{ loader:
          "style-loader",
          // },
          //{
          //  loader:
          "css-loader",
          //},
        ],
      },
      //-----------Loading SASS/SCSS--------------
      {
        test: /\.(s[ca]ss)$/,
        use: [
          //{ loader:
          "style-loader",
          // },
          //{ loader:
          "css-loader",
          // },
          //{ loader:
          "sass-loader",
          // },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World",
      buildTime: new Date().toString(),
      template: "public/index.html",
    }),
  ],
};
