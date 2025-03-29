# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


Here are the complete steps to create a new React project using Vite, initialize it with Git, and push it to GitHub:

## 1. Create a New React Project Using Vite :-

Open VS Code and open the terminal (Ctrl + `).

Run the following command to create a new Vite project:
#### `npm create vite@latest my-vite-project --template react`
OR
#### `yarn create vite`

Navigate into the project folder:
#### `cd my-vite-project`

Install dependencies:
#### `npm install`

Start the development server:
#### `npm run dev`

## 2. Initialize Git Repository :-

Inside the project directory, initialize a Git repository:
## `git init`

Create a .gitignore file and add:

node_modules
dist
.env

## 3. Create a GitHub Repository :-

Go to GitHub and log in.

Click New Repository.

Name your repository (e.g., my-vite-project).

Do not initialize with a README, .gitignore, or license (we'll add them manually).

Click Create Repository.

## 4. Connect Local Repo to GitHub :-
Back in VS Code terminal, add the GitHub remote:
#### `git remote add origin https://github.com/your-username/my-vite-project.git`

## 5. Commit and Push Code to GitHub :-

#### `git add .`
#### `git commit -m "Initial commit: Vite React setup"`
#### `git branch -M main`
#### `git push -u origin main`

## 6. Verify on GitHub :-
Go to your repository link on GitHub and refresh the page to see your committed code.

Now your React project using Vite is successfully set up and pushed to GitHub! 🚀
