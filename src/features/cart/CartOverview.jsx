import { useSelector } from "react-redux";
 import {getTotalQuantity,getTotalPrice} from './cartSlice'
import Button from '../../ui/Button.jsx'
function CartOverview() {

  const  cart = useSelector((state) => (state.cart.cart));
  // const getTotalQuantity = cart.reduce((sum,p) => ( sum + p.quantity),0);
  // const getTotalPrice = cart.reduce((sum,p) => ( sum + p.totalPrice),0);
  
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className="flex text-stone-300 px-4 text-sm py-2 justify-between bg-stone-700">
      <p className="space-x-2 text-lg">
        <span className="">{totalQuantity}pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Button to="/cart" type="link">Open cart &rarr;</Button>
    </div>
  );
}

export default CartOverview;
