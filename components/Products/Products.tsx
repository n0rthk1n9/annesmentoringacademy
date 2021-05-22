import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export function Products({ prices }): JSX.Element {
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
      <section className="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full w-full lg:px-10 py-12 ">
        {prices.map((price) => (
          <article
            key={price.id}
            className={`w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center rounded-lg ${
              ((price.unit_amount as number) / 100).toFixed(2) == "200.00"
                ? "text-white"
                : "text-primary-dark"
            } `}
            style={
              ((price.unit_amount as number) / 100).toFixed(2) == "200.00"
                ? {
                    backgroundImage:
                      "linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)",
                  }
                : {
                    backgroundImage: "none",
                  }
            }
          >
            <h5 className="font-bold text-base">{price.product.name}</h5>
            <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
              <span className="text-6xl">
                {((price.unit_amount as number) / 100).toFixed(2)}
              </span>
              <span className="text-3xl mb-6 ml-1">€</span>
            </h2>
            <ul className="text-sm font-bold">
              <li className="pt-4 pb-4 border-b border-gray-300">
                {price.product.description}
              </li>
            </ul>
            <button
              className={`uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold  rounded-md ${
                ((price.unit_amount as number) / 100).toFixed(2) == "200.00"
                  ? "bg-primary-very-light text-primary-blue"
                  : "text-primary-very-light"
              }`}
              style={
                ((price.unit_amount as number) / 100).toFixed(2) == "200.00"
                  ? {
                      backgroundImage: "none",
                    }
                  : {
                      backgroundImage:
                        "linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)",
                    }
              }
              role="link"
              onClick={() => handlePayment(price.id)}
            >
              Kaufen
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
