import { Introduction } from "../components/Introduction";
import { Motivation } from "../components/Motivation";
import { ProductFacts } from "../components/ProductFacts";
import { ProductPreview } from "../components/ProductPreview";
import { SubscribeForm } from "../components/SubscribeForm";
import { Products } from "../components/Products";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function University({ prices }) {
  const handlePayment = async (price: string) => {
    const { sessionId } = await fetch("/api/checkout/session", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: 1, price }),
    }).then((res) => res.json());
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <div>
      <Introduction />
      <Motivation />
      <SubscribeForm />
      <ProductFacts />
      <SubscribeForm />
      <ProductPreview />
      <Products prices={prices} />
    </div>
  );
}

export async function getStaticProps() {
  const { prices } = await fetch("http://localhost:3000/api/prices", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
  return { props: { prices: prices.data } };
}

export default University;
