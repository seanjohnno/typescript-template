# 1. Getting started
```
# Install yarn if you don't already have it
npm install --global yarn
yarn install


# For hot reloading in browser
yarn hotreload


# Testing with jest
yarn test
```

# 2. Recreating from scratch

## 2.1 Installing dependencies
```
yarn init

# Globals
yarn global add typescript
yarn global add jest

# Jest for testing
yarn add @types/jest @types/node jest ts-jest --dev

# Webpack
yarn add webpack webpack-cli webpack-dev-server --dev

# Typescript
yarn add typescript ts-loader tslint --dev

# Create tslint file
yarn tslint --init
```

## 2.2 Copy files into root
```
jest.config.js
tsconfig.json
webpack.config.js
```

## 2.3 Add scripts to package.json
```
"scripts": {
    "test": "jest",
    "hotreload": "webpack-dev-server --mode development --host 0.0.0.0 --port 4000"
  },
```