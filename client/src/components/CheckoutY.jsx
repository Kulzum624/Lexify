import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Services from "./assets/services.jpg";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

const CheckoutY = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1OxtGPJYXu7kJtendphJglIt",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl text-center">
        <h1 className="text-2xl font-bold mb-2 text-purple-800">
          Stripe Checkout
        </h1>
        <p className="text-lg font-semibold mb-2">Legalease Nexus Membership</p>
        <p className="text-lg mb-4">
          Secure a Lifetime Membership and Enjoy Endless Legal Assistance,
          Courses, and Books.
        </p>
        <p className="mt-6 flex items-baseline justify-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-gray-900">
            Rs 5000
          </span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 mb-7">
            PKR / year
          </span>
        </p>
        <img
          className="w-full max-w-lg mx-auto mb-6 rounded-lg shadow-lg"
          src={Services}
          alt="Services"
        />
        {stripeError && <p className="text-red-500 mb-4">{stripeError}</p>}
        <button
          className={`bg-purple-600 text-white font-semibold py-2 px-8 rounded-full transition duration-300 ease-in-out ${
            isLoading && "opacity-50 cursor-not-allowed"
          }`}
          onClick={redirectToCheckout}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Buy"}
        </button>
      </div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="fixed inset-0 z-[-10] overflow-hidden blur-3xl">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutY;
