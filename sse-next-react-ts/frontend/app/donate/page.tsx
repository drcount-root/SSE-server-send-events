import DonatePageComponent from "../../components/DonatePageComponent";

const page = () => {
  return (
    <main>
      <DonatePageComponent />
    </main>
  );
};

export default page;

// "use client";
// import React, { ChangeEvent, FormEvent, useState } from "react";

// const DonatePageComponent = () => {
//   const [amount, setAmount] = useState(777);

//   const donateFunction = async (e: FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:4650/donate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         "amount": amount,
//       }),
//     });

//     console.log(res, "post response");
//   };

//   return (
//     <div>
//       <form onSubmit={donateFunction}>
//         <label>Amount of donation</label>
//         <input
//           type="number"
//           name="amount"
//           value={amount}
//           placeholder="Enter amount"
//           onChange={(e: ChangeEvent<HTMLInputElement>) =>
//             setAmount(parseInt(e.target.value))
//           }
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default DonatePageComponent;
