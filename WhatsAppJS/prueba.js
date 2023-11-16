client.on("ready", () => {
  console.log("Cliente está listo");

  // Ejemplo de envío de varios mensajes con intervalos de espera
  const destinatarios = ["1234567890", "0987654321"]; // Números de teléfono de destino

  // Función para enviar mensajes con intervalos de espera
  const enviarMensajesConIntervalo = async () => {
    for (const destinatario of destinatarios) {
      await enviarMensaje(destinatario, "Hola, este es un mensaje de prueba.");
      await esperar(2000); // Esperar 2 segundos entre mensajes
    }
  };

  enviarMensajesConIntervalo();
});

function enviarMensaje(destinatario, mensaje) {
  const chatId = `${destinatario}@c.us`;

  return client
    .sendMessage(chatId, mensaje)
    .then(() => {
      console.log(`Mensaje enviado a ${chatId}`);
    })
    .catch((err) => {
      console.error(`Error al enviar mensaje a ${chatId}: ${err}`);
    });
}

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

client.initialize();
