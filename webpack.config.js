const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/index.js"),
    login: path.resolve(__dirname, "../src/pages/login.js"),
    research: path.resolve(__dirname, "../src/pages/research.js"),
    scripts: [
      path.resolve(
        __dirname,
        "../src/scripts/header/features/adressModal/adressModal.js"
      ),
      path.resolve(
        __dirname,
        "../src/scripts/header/features/adressModal/openAdressModal.js"
      ),
      path.resolve(
        __dirname,
        "../src/scripts/header/features/userMenuModal/userMenuModal.js"
      ),
      path.resolve(
        __dirname,
        "../src/scripts/header/features/userMenuModal/openUserMenuModal.js"
      ),
      path.resolve(__dirname, "../src/scripts/header/basket.js"),
      path.resolve(__dirname, "../src/scripts/header/deliveryUserInfo.js"),
      path.resolve(__dirname, "../src/scripts/header/headerBottomSection.js"),
      path.resolve(__dirname, "../src/scripts/header/researchArea.js"),
      path.resolve(__dirname, "../src/scripts/header/returnAndOrder.js"),
      path.resolve(__dirname, "../src/scripts/header/userMenu.js"),
      path.resolve(__dirname, "../src/scripts/store/ConfigureStore.js"),
      path.resolve(__dirname, "../src/scripts/home_main/carrousel.js"),
      path.resolve(__dirname, "../src/scripts/home_main/homeCard.js"),
      path.resolve(__dirname, "../src/scripts/login_main/loginForm.js"),
      path.resolve(__dirname, "../src/scripts/login_main/setLoginInState.js"),
      path.resolve(__dirname, "../src/scripts/research/researchDisplay.js"),
      path.resolve(__dirname, "../src/scripts/research/filterMenu.js"),
      path.resolve(__dirname, "../src/scripts/footer/footer.js"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "[name].bundle.js", // Utilisation de [name] pour générer des noms de fichier uniques basés sur les clés des entrées
  },

  devServer: {
    static: path.resolve(__dirname, ".."),
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
