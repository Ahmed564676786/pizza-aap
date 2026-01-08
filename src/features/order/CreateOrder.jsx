import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="px-4 py-4">
      <h2>Ready to order? Let's go!</h2>

      <form method="POST" action='/order/new'  className="border flex flex-col gap-4 ">
        <div className="gap-0.5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" className="w-full" required />
        </div>

        <div className="gap-0.5 flex flex-col sm:flex-row sm:items-center">
          <label  className="sm:basis-40">Phone number</label>
          <div className="flex grow border border-red-500">
            <input type="tel" className="w-full block sm:flex-1" name="phone" required />
          </div>
        </div>

        <div className="gap-0.5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="flex grow border border-red-500">
            <input type="text" name="address" className="w-full block sm:flex-1"  required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button type="submit">Order now</button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;



export async function action({request}){

    const formData = await request.formData();

    const data = Object.fromEntries(formData);


    console.log(data);


    return null
}