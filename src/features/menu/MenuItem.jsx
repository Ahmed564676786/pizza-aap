import { formatCurrency } from "../../utils/helpers";

import Button  from "../../ui/Button";


function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex border text-sm  mb-2 gap-4">
      <img src={imageUrl} alt={name} className='h-20' />
      <div className="flex grow border flex-col text-start">
        <p className="uppercase">{name}</p>
        <p className="capitalize"
>{ingredients.join(', ')}</p>
        <div className="flex items-center border justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          <Button type="primary">Add To Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
