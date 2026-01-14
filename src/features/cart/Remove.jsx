import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import {removeItem} from '../cart/cartSlice.js'

const Remove = ({pizzaId})=>{

    const dispatch = useDispatch();
    function handleRemove(pizzaId){

        dispatch(removeItem(pizzaId));
        
    }

    return <Button type="small" onClick={()=>handleRemove(pizzaId)}>Remove</Button>

}

export default Remove;