# cheerio starter

[📦 cheerio on npm](https://www.npmjs.com/package/cheerio)

Cheerio provides a jQuery-style way to parse HTML on the server.

This example queries https://glitch.com/culture and extracts the items listed there.

## Screenshot

![A screenshot of the homepage](https://cdn.glitch.com/24fd29fc-94f8-4c91-b98b-08e64a7a57d2%2FScreen%20Shot%202019-01-02%20at%2015.12.22.png?1546470768792)

## Code

The example code using cheerio is in `server.js`.

The page at `/` loads a sample app that uses the queried content.

The `/glitch-culture` path returns a JSON list of entries extracted from the remote page
