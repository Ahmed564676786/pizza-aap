import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {increaseQty,decreaseQty,getQtyById} from './cartSlice'


function IncreaseDecrease({id}){


    const dispatch = useDispatch();

    const qtyById =  useSelector(getQtyById(id));

    function Increase(id){

        // alert('hello');
        dispatch(increaseQty(id));

    }
    function Decrease(){

         dispatch(decreaseQty(id));
    }

    return(


       <>
       
        <Button type="primary" onClick={()=>Increase(id)}>+</Button>
        <span>{qtyById}</span>
        <Button type="primary" onClick={()=>Decrease(id)}>-</Button>
       </>
    );
}

export default IncreaseDecrease;