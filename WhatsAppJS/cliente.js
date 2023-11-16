const { Client } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

module.exports = client;
