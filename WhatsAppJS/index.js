const express = require("express");
const cors = require("cors");
const { PORT } = require("./config.js");
const QRCode = require("qrcode");
const client = require("./cliente.js");
const bodyParser = require("body-parser");

const app = express();
client.initialize();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/init", (req, res, next) =>
  res.send(
    `
    <p>
    Hello, it's the api of the whatsapp web js, use the path login for the initial, next use the next message page!
    </p>
    <a href="/login">
    Ir
    </a>
    `
  )
);

app.get("/login", (req, res, next) => {
  try {
    client.on("qr", async (qr) => {
      const qrCode = await QRCode.toDataURL(qr);
      res.send(`
      <img src="${qrCode}" alt="QR Code">
      <br>
      <a href="/message">Seguir</a>
      `);
    });
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
  }
});

app.get("/message", (req, res, next) => {
  try {
    res.send(`
    <form method="POST">
    <label>
    Numero
    </label>
    <input id="numero" name="numero" type="text">
    <label>
    mensaje
    </label>
    <input id="mensaje" name="mensaje" type="text">
    <br>
    <button>mandar</button>
    </form>
      `);
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
  }
});

app.get("/messages", (req, res, next) => {
  try {
    res.send(`
    <form method="POST">
    <button>mandar muchos</button>
    </form>
      `);
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
  }
});

app.post("/message", async (req, res, next) => {
  try {
    const mensaje = req.body.mensaje;
    const numero = req.body.numero;

    await client.sendMessage("549" + numero + "@c.us", mensaje);
    console.log("mensaje enviado");
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
  }
});

app.post("/messages", async (req, res, next) => {
  try {
    let numberOfTurns = 0;
    //messaje is a object that have 2 values, numer and messaje
    const messajes = req.body.mesajes ?? [
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
      {
        number: 3482650397,
        messaje: "hola",
      },
    ];

    const enviarMensajesConIntervalo = async () => {
      for (const messaje of messajes) {
        numberOfTurns++;
        await sendMessage(messaje.number, messaje.messaje);
        if (numberOfTurns % 5 === 0) await wait(60000);
      }
    };
    enviarMensajesConIntervalo();
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
  }
});

app.post("/finish", async (req, res, next) => {
  try {
    finalizar();
  } catch (error) {
    res.status(500).send("Error al generar el código QR");
  }
});

async function sendMessage(destinatario, mensaje) {
  const chatId = `54${destinatario}@c.us`;

  return client
    .sendMessage(chatId, mensaje)
    .then(() => {
      console.log(`Mensaje enviado a ${chatId}`);
    })
    .catch((err) => {
      console.error(`Error al enviar mensaje a ${chatId}: ${err}`);
    });
}

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function cerrarSesion() {
  // Cerrar sesión y realizar otras operaciones necesarias
  client
    .logout()
    .then(() => {
      console.log("Sesión cerrada exitosamente");
    })
    .catch((err) => {
      console.error("Error al cerrar sesión:", err);
    });
}

function finalizar() {
  // Cerrar sesión y realizar otras operaciones necesarias
  client
    .destroy()
    .then(() => {
      console.log("Sesión finalizada exitosamente");
    })
    .catch((err) => {
      console.error("Error al cerrar sesión:", err);
    });
}

client.on("ready", () => {
  console.log("Client is ready!");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
