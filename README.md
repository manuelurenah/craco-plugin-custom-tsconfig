# craco-plugin-custom-tsconfig

This craco plugin let's you specify the `tsconfig.json` you want to load for a specific environment

## 🛠 Installation

Install `craco-plugin-custom-tsconfig` in your project with the following command:
```bash
yarn add -D craco-plugin-custom-tsconfig

# OR

npm install --save-dev craco-plugin-custom-tsconfig
```

## 🔌 Usage

Here's an example `craco.config.js` file that adds this plugin to `creact-react-app`:
```js
const CustomTsConfigPlugin = require('craco-plugin-custom-tsconfig');

module.exports = {
  plugins: [
    {
      plugin: CustomTsConfigPlugin,
      options: {
        targetEnv: 'production',
        tsConfigFileName: 'tsconfig.prod.json',
      },
    },
  ],
}
```
