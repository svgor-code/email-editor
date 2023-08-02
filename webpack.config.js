const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"],
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'umd',
    library: 'ts-email-editor',
    globalObject: 'this',
  },
};
