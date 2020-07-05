const http = require('https');
const fs = require('fs');

const file = fs.createWriteStream("api/bitcoin.json");
const request = http.get("https://api.bitfinex.com/v1/pubticker/btcusd", function(response) {
  response.pipe(file);
});
