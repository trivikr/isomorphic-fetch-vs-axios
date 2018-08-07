# isomorphic-fetch-vs-axios

This package tries to reproduce "Aw, Snap!" error on Chrome when user moves away from page while using isomorphic-fetch

- run `npm install` to install the dependencies
- run `npm run build` to run webpack
- run `node src/server.js` to run client/server
- Visit `http://localhost:3000/` in Chrome
  - Click on button `"Start server calls with isomorphic-fetch"` which will fetch string `"Hello"` from server every second and append to the body
  - I want to repro "Aw, Snap!" error when `"Click to navigate away from page"` but it doesn't happen (WIP)
