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
  "detail-project": path.resolve(__dirname, './src/pages/detail-project/detail-project.js'),
  "services": path.resolve(__dirname, './src/pages/services/services.js'),
  "detail-services": path.resolve(__dirname, './src/pages/detail-services/detail-services.js'),
  "about": path.resolve(__dirname, './src/pages/about/about.js'),
  

  // Добавьте другие страницы здесь
};
// Создаем экземпляры HtmlWebpackPlugin для каждой страницы
const htmlPlugins = Object.keys(entryPoints).map((entryName) => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `src/pages/${entryName}/${entryName}.html`),
    filename: `${entryName}.html`, // Имя файла для каждой страницы
    cache: false,
    chunks: "all",
  });
});

module.exports = {
  mode,
  target,
  devtool,
  entry: {main: path.resolve(__dirname, "./src/js/index.js")},
  // entry: entryPoints,
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'src/js/[name].[contenthash].bundle.js',
    assetModuleFilename: "src/utils/img/[name].[hash:8][ext]",
    clean: true,
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist/"),
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
          filename: "src/utils/fonts/[name][ext]",
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
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'inputmask': path.resolve(__dirname, '../node_modules/inputmask/dist/inputmask'),
    },
  },
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin({ filename: "src/css/[name].[contenthash].css",}),
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
