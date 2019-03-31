# picturefoods-web-app

> Take snapshots of food ingredients to get recipe suggestions with AI support on your mobile device

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Deployment Setup
Project is set up for deployment at Zeit Now. Actual Prod domain is at 1&1 and 'aliased' through custom DNS entry to point to Zeit webspace.
``` bash
# deploy (to https://picturefoods.schafeld.now.sh, Staging)
now

# update aliased domain (to picturefoods domain, Prod)
now alias https://picturefoods.schafeld.now.sh picturefoods.com
now alias https://picturefoods.schafeld.now.sh www.picturefoods.com
```
