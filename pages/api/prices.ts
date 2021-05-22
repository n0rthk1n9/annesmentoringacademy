import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prices = await stripe.prices.list({
    active: true,
    limit: 3,
    expand: ["data.product"],
  });
  res.status(200).json({ prices });
};
