# picturefoods-web-app-2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Deployment
Example for deployment with [Zeit Now](https://zeit.co). For your own project make sure to enter your own domain, of course, and adapt Zeit configuration in ```now.json```to your domain.
``` 
now  &&  now alias https://picturefoods.schafeld.now.sh www.picturefoods.com  &&  now alias https://picturefoods.schafeld.now.sh picturefoods.com
``` 

For other domain hosting providers you need to build ```npm run build``` and upload the content of the ```dist/``` folder to your domain root. Routing is set to ```mode: 'history'```, you might need to remove that line in ```router/index.js``` and fall back to using hash tag ('/#') routes).
