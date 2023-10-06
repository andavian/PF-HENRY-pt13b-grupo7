const axios = require("axios");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../utils/envConfig");

const createOrder = async (req, res) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
        amount: {
          currency_code: "USD",
          value: "100.00",
        },
        description: "teclado",
      },
    ],
    application_context: {
      brand_name: "Henry Shop",
      locale: "en-US",
      landing_page: "LOGIN",
      user_action: "PAY_NOW",
      return_url: "http://localhost:3001/payment/capture-order",
      cancel_url: "https://localhost:3001/payment/cancel-order",
    },
  };

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const {
    data: { access_token },
  } = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    }
  );
  console.log(access_token);

  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
};

const captureOrder = async (req, res) => {
  const { token, PayerID } = req.query;

  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    }
  );
  console.log(response.data);
  res.redirect("/thanks");
};

const cancelOrder = (req, res) => {
  res.redirect("/");
};

module.exports = { createOrder, captureOrder, cancelOrder };
