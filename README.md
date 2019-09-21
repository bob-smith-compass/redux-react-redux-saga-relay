# Redux

need both `redux` and `react-redux`

1. import { createStore } from 'redux'

## Learn Redux

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
[https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started)
You can use Redux together with React, or with any other view library.

It is also available as a precompiled UMD package that defines a window.Redux global variable. The `UMD` package can be used as a <script> tag directly.
Redux itself is small and `unopinionated`. We also have a separate package called `redux-starter-kit`, which includes some opinionated defaults that help you use Redux more effectively.

It helps simplify a lot of common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.

The whole state of your app is stored in an `object tree` inside a single store.
The `only way` to change the `state` tree is to emit an `action`, an `object` describing what happened.
To specify how the actions transform the state tree, you write pure `reducers`.

### Motivation

As the requirements for JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on.

As if this weren't bad enough, consider the `new requirements becoming common in front-end product development`. As developers, we are expected to handle optimistic updates, server-side rendering, fetching data before performing route transitions, and so on. We find ourselves trying to manage a complexity that we have never had to deal with before, and we inevitably ask the question: is it time to give up? The answer is no.

This complexity is difficult to handle as we're mixing two concepts that are very hard for the human mind to reason about: `mutation and asynchronicity`. I call them Mentos and Coke. Both can be great in separation, but together they create a mess. Libraries like React attempt to solve this problem in the view layer by removing both `asynchrony` and `direct DOM manipulation`. However, `managing the state` of your data is left up to you. This is where `Redux` enters.

[https://martinfowler.com/eaaDev/EventSourcing.html](https://martinfowler.com/eaaDev/EventSourcing.html)
Following in the steps of Flux, CQRS, and Event Sourcing, Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux.




## React Redux

### react-redux

Complementary Packages
Most likely, you'll also need the React bindings and the developer tools.

`npm install react-redux`
`npm install --save-dev redux-devtools`

Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like Webpack and Browserify for the most comfortable development experience.
[https://redux.js.org/introduction/installation](https://redux.js.org/introduction/installation)

## Styles

`yarn add react-bootstrap bootstrap`

### Theming

[https://react-bootstrap.github.io/getting-started/theming/](https://react-bootstrap.github.io/getting-started/theming/)

```language=javascrip
<style type="text/css">
            {`
        .btn-flat {
        background-color: purple;
        color: white;
        }

        .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        }
        `}
      </style>

      <Button 
        variant="flat" 
        size="xxl" 
        onClick={props.onClick}>
        +
      </Button >
```

### Prefixing components

In some cases you may need to change the base class "prefix" of one or more Components. You can control how a Component prefixes it's classes locally by changing the bsPrefix prop. Or globally via the ThemeProvider Component. [https://react-bootstrap.github.io/getting-started/theming/](https://react-bootstrap.github.io/getting-started/theming/)

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
