const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

client.on("qr", (qr) => {
  console.log(qr);
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
  client.sendMessage("5493482203063@c.us", "Hola Mono");
});

client.initialize();
