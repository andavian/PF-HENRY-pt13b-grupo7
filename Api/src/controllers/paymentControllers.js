const axios = require("axios");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../utils/envConfig");

const createOrder = (req, res) => {
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
    payment_source: {
      paypal: {
        experience_context: {
          payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
          brand_name: "EXAMPLE INC",
          locale: "en-US",
          landing_page: "LOGIN",
          shipping_preference: "SET_PROVIDED_ADDRESS",
          user_action: "PAY_NOW",
          return_url: "https://localhost:3000/payment/capture-order",
          cancel_url: "https://localhost:3000/payment/cancel-order",
        },
      },
    },
  };

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const { data } = axios.post(
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
  console.log(data);

  // const response = axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
  //   headers: {
  //     Authorization:
  //   }
  // });
  res.send("creating an order");
};

const captureOrder = (req, res) => {
  res.send("capturing order");
};

const cancelOrder = (req, res) => {
  res.send("canceling an order");
};

module.exports = { createOrder, captureOrder, cancelOrder };
