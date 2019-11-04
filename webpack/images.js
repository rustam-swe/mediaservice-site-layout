module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|svg|gif)$/,
          loader: "file-loader",
          options: {
            name: "img/[name].[ext]"
          }
        }
      ]
    }
  };
};
