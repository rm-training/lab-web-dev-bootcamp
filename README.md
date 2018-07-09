# Web Dev Bootcamp

This repository includes lab material for learning web development, covering the basics of HTML, CSS and then diving deep into JavaScript. The content was created by Ryan Morris (unless otherwise stated within a file) and has been compiled from multiple class deliveries over the years into a single repository to support the entire web dev class cycle.

## Running the server

To test your work you'll want to run a server locally. We have two options here.

### http-server

This is the simplest option.

https://www.npmjs.com/package/http-server

```
npm start
# or
npx http-server public -p 3000
```

### json-server

This is in use to help with simulating a local API. By running this server you can also specify a database.json file for it to watch - read from - and write to - as though it is your live API.

https://github.com/typicode/json-server

There are trade-offs however:

* Does not support HTTPS out of the box
* Does not render index.html by default

```
npm run api
# or
npx json-server --watch data/db.json
```

To run the API in HTTPS:

```
npm run api-https
```

### SSL

Keys not working? Create your own:

```
openssl req -x509 -newkey rsa:2048 -keyout ./ssl/key.pem -out ./ssl/cert.pem -days 120 -nodes
```

## Linting

ESLint is packaged with the project, depending on your IDE you can enable it for style-validation of your JavaScript.

I've disabled a few beneficial validations to prevent noisy lint feedback while learning the basics.

```
"no-var": 0,
"vars-on-top": 0,
"no-console": 0,
"comma-dangle": 0,
"no-plusplus": 0,
"eol-last": 0,
"no-param-reassign": 0,
"no-shadow": 0,
"func-names": 0
...
```