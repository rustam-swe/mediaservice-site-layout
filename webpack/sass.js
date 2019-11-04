const path = require("path");
module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          include: path.resolve(__dirname, "/src/sass/main.scss"),
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  };
};
