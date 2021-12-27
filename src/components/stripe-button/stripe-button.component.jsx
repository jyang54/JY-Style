import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //price in cents
  const publishableKey =
    "pk_test_51KBLITDMP3MaClCQzQ5SUqEGnbLcBKP3wwQ3hMiYtwI4aa0fLkSrrncB5INXEJMd4h2PZKY4py9SuQIg60wlS4GT00fZKI6Ftu";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay"
      name="JY Style Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
