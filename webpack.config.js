const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const mode = process.env.NODE_ENV === "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;
const ghpages = require('gh-pages');


const entryPoints = {
  "index": path.resolve(__dirname, './src/pages/index/index.js'),
  "main": path.resolve(__dirname, './src/pages/main/main.js'),
  "projects": path.resolve(__dirname, './src/pages/projects/projects.js'),
  "detal-project": path.resolve(__dirname, './src/pages/detal-project/detal-project.js'),
  "services": path.resolve(__dirname, './src/pages/services/services.js'),
  "detal-services": path.resolve(__dirname, './src/pages/detal-services/detal-services.js'),
  "about": path.resolve(__dirname, './src/pages/about/about.js'),

  // Добавьте другие страницы здесь
};
// Создаем экземпляры HtmlWebpackPlugin для каждой страницы
const htmlPlugins = Object.keys(entryPoints).map((entryName) => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `src/pages/${entryName}/${entryName}.html`),
    filename: `${entryName}.html`, // Имя файла для каждой страницы
    cache: false,
  });
});

module.exports = {
  mode,
  target,
  devtool,
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].bundle.js',
    publicPath: "../",
    assetModuleFilename: "utils/img/[name].[hash:8][ext]",
    clean: true,
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.js$/i,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      // добавили правило для обработки файлов
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "utils/fonts/[name][ext]",
        },
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(c|sa|sc|)ss$/i,
        use: [
          mode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin({ filename: "css/[name].css"}),
    // копируем .nojekyll из корневой директории проекта в папку dist
    new CopyWebpackPlugin({
      patterns: [
        // копируем .nojekyll из корневой директории проекта в папку dist
        {
          from: ".nojekyll",
          to: "",
          toType: "dir",
        },
      ],
    }),
  ],
};
