// Test ID: IIDSAT

  import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
  } from "../../utils/helpers";


import CartItem from '../cart/CartItem.jsx'
const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-2">
      <div className=" py-3 justify-between  flex">
        <h2>Status</h2>

        <div className="flex gap-2">
          {priority && <span className="text-stone-100 bg-red-400 px-4 py-1 rounded-full">Priority</span>}
          <span className="text-stone-100 bg-green-700 px-4 py-1 rounded-full">{status} order</span>
        </div>
      </div>

      <div className="flex px-2 py-3 bg-stone-300 flex-wrap justify-between">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p> 
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>


      <ul>

      
            {

                cart.map((item)=>(

                  <CartItem  item={item} key={item.id} />
                ))
            }
       
        </ul>
    
      <div className="bg-stone-500">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;
