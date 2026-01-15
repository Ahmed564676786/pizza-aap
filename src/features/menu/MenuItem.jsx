import { formatCurrency } from "../../utils/helpers";

import Button  from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {addItem} from "../cart/cartSlice";
import Remove from "../cart/Remove";
import {getQtyById} from '../cart/cartSlice';

import IncreaseDecrease from "../cart/IncreaseDecrease";



function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const qty = useSelector(getQtyById(id));


  function handleAddItem(){

    const quantity = 1;
    const newItem = {

        pizzaId:id, 
        name ,
        quantity,     
        unitPrice,
        totalPrice:quantity*unitPrice, 
    }

    dispatch(addItem(newItem));
    console.log(newItem);
  }

  return (
    <li className="flex border text-sm  mb-2 gap-4">
      <img src={imageUrl} alt={name} className='h-20' />
      <div className="flex grow border flex-col text-start">
        <p className="uppercase">{name}</p>
        <p className="capitalize"
>{ingredients.join(', ')}</p>
        <div className="flex items-center border justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}


          { 

   
            qty > 0 ?<div className="space-x-4"><IncreaseDecrease id={id}/> <Remove pizzaId={id}/></div>:<Button type="primary" onClick={handleAddItem}>Add To Cart</Button>
          }

          
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
