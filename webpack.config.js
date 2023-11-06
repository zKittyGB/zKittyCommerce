const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./dist/src/index.js"),
    login: path.resolve(__dirname, "./dist/src/pages/login.js"),
    research: path.resolve(__dirname, "./dist/src/pages/research.js"),
    scripts: [
      path.resolve(
        __dirname,
        "./dist/src/scripts/header/features/adressModal/adressModal.js"
      ),
      path.resolve(
        __dirname,
        "./dist/src/scripts/header/features/adressModal/openAdressModal.js"
      ),
      path.resolve(
        __dirname,
        "./dist/src/scripts/header/features/userMenuModal/userMenuModal.js"
      ),
      path.resolve(
        __dirname,
        "./dist/src/scripts/header/features/userMenuModal/openUserMenuModal.js"
      ),
      path.resolve(__dirname, "./dist/src/scripts/header/basket.js"),
      path.resolve(__dirname, "./dist/src/scripts/header/deliveryUserInfo.js"),
      path.resolve(
        __dirname,
        "./dist/src/scripts/header/headerBottomSection.js"
      ),
      path.resolve(__dirname, "./dist/src/scripts/header/researchArea.js"),
      path.resolve(__dirname, "./dist/src/scripts/header/returnAndOrder.js"),
      path.resolve(__dirname, "./dist/src/scripts/header/userMenu.js"),
      path.resolve(__dirname, "./dist/src/scripts/store/ConfigureStore.js"),
      path.resolve(__dirname, "./dist/src/scripts/home_main/carrousel.js"),
      path.resolve(__dirname, "./dist/src/scripts/home_main/homeCard.js"),
      path.resolve(__dirname, "./dist/src/scripts/login_main/loginForm.js"),
      path.resolve(
        __dirname,
        "./dist/src/scripts/login_main/setLoginInState.js"
      ),
      path.resolve(__dirname, "./dist/src/scripts/research/researchDisplay.js"),
      path.resolve(__dirname, "./dist/src/scripts/research/filterMenu.js"),
      path.resolve(__dirname, "./dist/src/scripts/footer/footer.js"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "[name].bundle.js", // Utilisation de [name] pour générer des noms de fichier uniques basés sur les clés des entrées
  },

  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          },
        },
      },
    ],
  },
};
