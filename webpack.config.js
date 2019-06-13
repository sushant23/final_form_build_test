const path = require("path");
module.exports = {
  entry: [path.join(process.cwd(), "src/main.js")],
  output: {
    publicPath: '',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
