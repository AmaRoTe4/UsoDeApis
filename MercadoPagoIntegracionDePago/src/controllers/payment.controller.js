import mercadopago from "mercadopago";
import { ACCESS_TOKEN } from "../config.js";

export const creandoOrden = async (req, res) => {
  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Termo de acero",
        unit_price: 100,
        currency_id: "ARS",
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http:localhost:3000/success",
      failure: "http:localhost:3000/failure",
      pending: "http:localhost:3000/pending",
    },
    notification_url: "https://b8f8-200-43-114-3.ngrok.io/webhook",
  });

  console.log(result);

  res.send(result.body);
};

export const reiceiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(req.query["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500).json({ error: error.message });
  }
};
