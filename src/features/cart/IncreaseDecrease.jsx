import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import {increaseQty,decreaseQty} from './cartSlice'


function IncreaseDecrease({id}){


    const dispatch = useDispatch();


    function Increase(id){

        // alert('hello');
        dispatch(increaseQty(id));

    }
    function Decrease(){

        alert('Hello');
    }

    return(


       <>
       
        <Button type="primary" onClick={()=>Increase(id)}>+</Button>
        <span>1</span>
        <Button type="primary">-</Button>
       </>
    );
}

export default IncreaseDecrease;