import { Introduction } from "../components/Introduction";
import { Motivation } from "../components/Motivation";
import { ProductFacts } from "../components/ProductFacts";
import { ProductPreview } from "../components/ProductPreview";
import { SubscribeForm } from "../components/SubscribeForm";
import { Products } from "../components/Products";
import { loadStripe } from "@stripe/stripe-js";
import { CustomerFeedback } from "../components/CustomerFeedback";

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
      <SubscribeForm />
      <CustomerFeedback />
    </div>
  );
}

export async function getServerSideProps() {
  const apiURL =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000/api/prices"
      : "https://annesmentoring.academy/api/prices";

  const { prices } = await fetch(apiURL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
  return { props: { prices: prices.data } };
}

export default University;
