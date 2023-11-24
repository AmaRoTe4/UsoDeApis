async function sendMessage(client, destinatario, mensaje) {
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

const enviarMensajesConIntervalo = async (messajes) => {
  let numberOfTurns = 0;
  for (const messaje of messajes) {
    numberOfTurns++;
    await sendMessage(client, messaje.number, messaje.messaje);
    if (numberOfTurns % 5 === 0) await wait(60000);
  }
};

function cerrarSesion(client) {
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

function finalizar(client) {
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

function status_functions(status_app, res) {
  const { status } = status_app;

  if (!status)
    res.json({
      status: false,
      results: undefined,
      message:
        "no tiene permitido estas hacienes, tiene que ingresar primero con su numero de telefono",
    });

  return {
    status: true,
    results: undefined,
    message: "Valido",
  };
}

module.exports = {
  finalizar,
  cerrarSesion,
  wait,
  sendMessage,
  enviarMensajesConIntervalo,
};
