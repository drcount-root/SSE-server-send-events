"use client";
import { ChangeEvent, FormEvent, useState } from "react";

const DonatePageComponent = () => {
  const [amount, setAmount] = useState(0);

  const postAPIDonationFunction = async () => {
    const res = await fetch("http://localhost:4650/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const result = await res.json();
    console.log(result, "result");

    if (result.statusCode === 200) {
      return res;
    }
  };

  const donationFormSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    postAPIDonationFunction();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      postAPIDonationFunction();
    }
  };

  return (
    <div>
      <form onSubmit={donationFormSubmitHandler}>
        <label>Amount of donation</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const donationAmount = parseInt(e.target.value);
            if (donationAmount > 0) {
              setAmount(donationAmount);
            }
          }}
          onKeyDown={handleKeyPress}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonatePageComponent;
