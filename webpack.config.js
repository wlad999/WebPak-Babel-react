const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlagin = require("mini-css-extract-plugin");
//require - аналог import для node.js
//webpack.config.js исполняется в среде Node.js
module.exports = (env = {}) => {
  const { mode = "development" } = env;
  const isProd = mode === "production";
  const isDev = mode === "development";

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlagin.loader : "style-loader",
      "css-loader",
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "Hello World",
        buildTime: new Date().toString(),
        template: "public/index.html",
      }),
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlagin({
          filename: "main-[hash:8].css",
        })
      );
    }
    return plugins;
  };

  return {
    mode: isProd ? "production" : isDev && "development",

    output: {
      filename: isProd ? "main-[hash:8].js" : undefined,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_module/,
          loader: "babel-loader",
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
          use: getStyleLoaders(),
        },
        //-----------Loading SASS/SCSS--------------
        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), "sass-loader"],
        },
      ],
    },
    //plugins: [
    //  new HtmlWebpackPlugin({
    //    title: "Hello World",
    //    buildTime: new Date().toString(),
    //    template: "public/index.html",
    //  }),
    //  new MiniCssExtractPlagin({
    //    filename: "main-[hash:8].css",
    //  }),
    //],
    plugins: getPlugins(),
    devServer: {
      open: true,
    },
  };
};
