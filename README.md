Summary

To generate bundle file:
NODE_ENV=production node_modules/.bin/webpack -p

This will compile the code into bundle.js and create a babel_cache folder

To run it on a http-server:
node_modules/.bin/http-server src/static

Once the server is up, you can view the app in:
http://localhost:8080.
