const {
  finalizar,
  enviarMensajesConIntervalo,
} = require("./functions/index.js");
const express = require("express");
const cors = require("cors");
const { PORT } = require("./config.js");
const QRCode = require("qrcode");
const client = require("./cliente.js");
const bodyParser = require("body-parser");

const app = express();
client.initialize();

let status = {
  status: false,
  telefono: 0,
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/test_conection", (req, res, next) => res.json(true));
app.get("/status_conection", (req, res, next) => res.json(status));

//interface html
//app.get("/login", (req, res, next) => {
//  try {
//    client.on("qr", async (qr) => {
//      const qrCode = await QRCode.toDataURL(qr);
//      res.send(`
//      <img src="${qrCode}" alt="QR Code">
//      <br>
//      <a href="/message">Seguir</a>
//      `);
//    });
//  } catch (error) {
//    res.status(500).send("Error al generar el código QR");
//  }
//});

app.get("/login", (req, res, next) => {
  try {
    client.on("qr", async (qr) => {
      const qrCode = await QRCode.toDataURL(qr);
      res.json({
        qr: qrCode.toString(),
      });
    });
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
    next(error);
  }
});

app.post("/message-ars", async (req, res, next) => {
  try {
    status_functions(status, res);
    const mensaje = req.body.mensaje;
    const numero = req.body.numero;

    const resultado = await client.sendMessage(
      client,
      "549" + numero + "@c.us",
      mensaje
    );
    res.json({
      status: true,
      results: undefined,
      message: "Mensaje enviado",
    });
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
    next(error);
  }
});

app.post("/messages-ars", async (req, res, next) => {
  try {
    status_functions(status, res);
    //messaje is a object that have 2 values, numer and messaje
    const messajes = req.body.mesajes ?? [];
    if (messajes.length === 0)
      return res.json({
        status: false,
        results: [],
        message: "no a enviado ningun mensaje",
      });

    const resultado = await enviarMensajesConIntervalo();

    res.json({
      status: true,
      results: undefined,
      message: "Mensajes enviados",
    });
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
    next(error);
  }
});

app.post("/finish", async (req, res, next) => {
  try {
    status_functions(status, res);
    finalizar(client);
    status.status = false;
    res.json({
      status: true,
      results: undefined,
      message: "Sesion Cerrada",
    });
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
    next(error);
  }
});

client.on("ready", () => {
  console.log("Client is ready!");
  status.status = true;
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
