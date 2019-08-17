# GitHub Explorer

This is a web app for searching GitHub repositories and showing their details.<br>
For the Japanese documentation, please refer to `README-ja.md` .

## Specifications

- Search results are presented in real-time (incremental search)
- Details are shown when the repository is tapped or clicked
- React and Redux are used
  - Also: TypeScript, GraphQL (Apollo Client), Jest
  - Made use of [Create React App](https://github.com/facebook/create-react-app) for setup
  - Configurations of Webpack and Babel remains the default of Create React App

## Installation

### Configure GitHub API Token

Generate GitHub GraphQL API v4 token in advance. The default scope (only `public access` ) is sufficient.<br>
Run `cp .env.example .env` , then you can add your API token to the generated `.env` file.

### Configure the version of Node.js

If nvm (Node Version Manager) is already installed, you can switch the version of Node.js to `v10.16.2` by the following command:

```
nvm install
nvm use
```

## Running the App

### `yarn start` (or `npm start` )

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
