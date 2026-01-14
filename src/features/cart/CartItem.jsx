import Remove from './Remove'

  import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
  } from "../../utils/helpers";
import IncreaseDecrease from './IncreaseDecrease';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
    
  return (
    <li className="flex justify-between py-2 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center gap-2'>
        <p>{formatCurrency(totalPrice)}</p>
        
        <IncreaseDecrease id={pizzaId}/>
        <Remove pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
