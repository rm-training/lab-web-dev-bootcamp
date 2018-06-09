# Web Dev Bootcamp

This class is intended as a 3-5 day intensive to learn HTML, CSS and JS from the ground up.

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
