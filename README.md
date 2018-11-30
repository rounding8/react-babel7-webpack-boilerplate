
# Demo #4 ∞ Latest React + Babel 7 + webpack Application 🍽

### Server-side Web Application using React v16 + Babel v7 + webpack v4

> The purpose of this boilerplate is to show that I know one of many ways to create a web application; feel free to clone|fork and use as needed :D

<br>

This setup would be ideal for deploying via [Docker](https://www.docker.com), [AWS S3 Bucket](https://aws.amazon.com/s3), etc.

<br>

## Development

```
$ git clone ssh://git@github.com:rounding8/react-babel7-webpack-boilerplate.git   # Clone Remote Repository
$ cd react-babel7-webpack-boilerplate/                                            # Change Directory to "react-babel7-webpack-boilerplate" of Local Repository
$ yarn                                                                            # Install Application Dependencies via [Yarn](https://yarnpkg.com)
$ yarn start                                                                      # Execute in "Development" mode
```

<br>

## Deployment

```
$ yarn build            # Generates Production *dist* distribution index.html, bundle.js, etc.
```

> App deployment can be handled using [CircleCI](https://circleci.com), [Jenkins](https://jenkins.io), [Grunt](https://gruntjs.com), etc.

<br>

## Structure

```
|- dist                 -- Webpack build of full-stack application
  |- index.html         // Single HTML Index File for Testing Progress SPA
  |- bundle.js          // Single webpack compiled source script of Application for Production
  |- ...                // Bundled assets to be included w/ dist (e.g. favicon.ico, custom font files, etc.)
|- node_modules/        // Packages installed via Yarn (dependencies & devDependencies)
|- public               -- Public assets
  |- html
    |- index.html       // Main HTML Source
  |- icon
    |- favicon.ico
|- src                  -- React Components
  |- component          // Generic reuseable component classes (header, menu, dropdown, table, lists, etc.)
    |- dropdown
      |- index.jsx
  |- container          // Main Section Parent Component Class Containers
    |- home
      |- index.jsx
  |- index.jsx          // Main webpack Entry
|- .gitignore           // Git repository tracking files & folders to ignore
|- LICENSE
|- package.json         // Resource for installing & managing Application dependencies
|- README.md            // Project Documentation & Code Development Management Reference
|- webpack.config.js    // webpack Build Configuration
|- yarn.lock
```

<br>

### Dependencies

| Resource                                                                    | npm                                                                | Description / Implementation                              |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------|
| [Polyfill](https://babeljs.io/docs/usage/polyfill)                          | [babel-polyfill](https://www.npmjs.com/package/babel-polyfill)     | Dependency for Authentication oidc-client-js library      |
| [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)      | [prop-types](https://www.npmjs.com/package/prop-types)             | Runtime type checking for React props and similar objects |
| [react](https://reactjs.org)                                                | [react](https://www.npmjs.com/package/react)                       | A JavaScript library for building user interfaces         |
| [ReactDOM](https://reactjs.org/docs/react-dom.html)                         | [react-dom](https://www.npmjs.com/package/react-dom)               | DOM-specific methods used at top level of application     |
| [React Idle Timer](https://github.com/supremetechnopriest/react-idle-timer) | [react-idle-timer](https://www.npmjs.com/package/react-idle-timer) | Idle Timeout component for forcing User Logout @ 30 mins. |

<br>

> See additional [development dependencies](https://github.com/rounding8/react-babel7-webpack-boilerplate/blob/master/package.json#L32-L43)

<br>

## References

* [HSL Color Picker](http://hslpicker.com)
* [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
* [React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)
* [webpack Configuration](https://webpack.js.org/configuration)

<br>

## Resources

* [Sublime Text](https://www.sublimetext.com)
* [VS Code](https://code.visualstudio.com/download)

<br>

## Chrome Dev Extensions

* [Immutable.js Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog)
* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh)

<br>

## Changelog

| Version | Date     | Commit                                                                                                                   | Description |
|---------|----------|--------------------------------------------------------------------------------------------------------------------------|-------------|
| 0.0.0   | 11-30-18 | [352dc2c](https://github.com/rounding8/react-babel7-webpack-boilerplate/commit/352dc2cd50e46f33f679fbedcd474ed3d6ccc6e2) | 🎉  Initial commit |
