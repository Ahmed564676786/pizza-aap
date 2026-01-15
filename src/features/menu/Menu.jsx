import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem.jsx"

function Menu() {

    const menu = useLoaderData();
    console.log(menu);

      return (
    
        <ul>
          {
    
                menu.map((p) => (

                    <MenuItem pizza={p} key={p.id}/>
                ))

          }

              </ul>

      );

}

export default Menu;


// Named Export
export async function Loader(){
    const menu = await getMenu();
    return menu;
}