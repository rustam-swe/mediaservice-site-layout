const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
        // {
        //   test: /\.css$/,
        //   include: paths,
        //   use: ExtractTextPlugin.extract({
        //     publicPath: "../",
        //     fallback: "style-loader",
        //     use: "css-loader"
        //   })
        // }
      ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].css" })]
  };
};
