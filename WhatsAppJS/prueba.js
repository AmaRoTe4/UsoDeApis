const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const fs = require("fs");

const SESSION_FILE_PATH = "./session.json";

let sessionData;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
}

//nuevo cliente por defecto
//if (sessionData == null) client = new Client();
//este lo que hace es crear una instacion de cliente pero con memoria
//else
const client = new Client({
  authStrategy: new LocalAuth({
    session: sessionData,
  }),
});

//ejemplo de multiple clientes
//const client1 = new Client({
//    authStrategy: new LocalAuth({ clientId: "client-one" })
//});

//const client2 = new Client({
//    authStrategy: new LocalAuth({ clientId: "client-two" })
//});

//crea el qr y lo renderiza
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

//inicializa y confirma la conexion
client.on("ready", () => {
  console.log("Client is ready!");
});

//evento de autentisacion de la sesion
client.on("authenticated", (session) => {
  //lo que hacemos aca es guarda la sesion en un json
  sessionData = session;
  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session) ?? "null", (err) => {
    if (err) {
      console.error(err);
    }
  });
});

//el evento message es cuaando nos llega un mensaje
client.on("message", (message) => {
  //en el body se encuentra el texto que nos enviaron
  if (message.body === "!ping") {
    //reply es para responder directo al envio de un mensaje, por decirlo asis reply ya sabe el destino
    message.reply("pong");

    //mientras que, lo que hacemos aca es enviar el mismo, pero referenciandonos de from
    //client.sendMessage(message.from, 'pong');
  }
});

client.initialize();
