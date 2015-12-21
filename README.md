# frontend_demo
A demonstration app for the Front End Developer position using Angular, GitHUB APIs, and Bootstrap. Also, employs modern OOP using Borwserify, with Unit Testing via Jasmin and Karma. Build scripts written in GULP. See DIST folder for final compiled output, and SRC folder for original code.

# NOTE
This project needs to be built with tools from Node.JS.
Source code is in the folder /src
Built version is in the folder /dist

### Before building run:
```
npm install
bower install
```

NPM is used for all developer tools
BOWER is used for client side frameworks that are switched for CDN versions.

### Building is done with gulp:
```
gulp build
gulp build:final
```

### Testing can be done with Karma, npm or gulp:
```
gulp test
gulp build:test
gulp build:final:test
npm test
karma
```

Scaffolding of the app was done using a tool I wrote which is available on NPM:
https://www.npmjs.com/package/geordie-builders
https://github.com/GLBaird/geordie-builders

A test version of the final build can be views on:
http://leonbaird.co.uk/front_end_demo


