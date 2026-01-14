import { Link } from 'react-router-dom';
import CartItem  from './CartItem'
import Button from '../../ui/Button'
import {clearCart} from '../cart/cartSlice.js'
import { useDispatch, useSelector } from 'react-redux';


// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetable',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {

 const cart = useSelector((state) => (state.cart.cart));
  // const cart = fakeCart;

 const userName= useSelector((state)=>(state.user.userName));

  const dispatch = useDispatch();

  function handleClearCart(){

      dispatch(clearCart());
      // alert('Hello');

  }
  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>
      <h2>Your cart, {userName}</h2>

      {
        cart.map((item) => (
           <CartItem item={item} key={item.pizzaId}/>
        ))
      }
      <div className='flex items-center gap-2'>

        <Button to="/order/new" type="link" >Order pizzas</Button>
   

        <Button onClick={handleClearCart} type="grey">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
