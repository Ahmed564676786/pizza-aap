import { Outlet, useNavigation } from "react-router-dom";

import Header from './Header'

import CartOverview from '../features/cart/CartOverview.jsx'

import Loader from './Loader.jsx'
function Applayout(){

    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";

    console.log(navigation.state);


 
    return(
            
        
        <>
            {
                    isLoading && <Loader/>
             }

            <div className="grid grid-rows-[auto_1fr_auto] border border-gray-300  h-screen">
                <header>
                
                  <Header/>
                </header>
                <main className="border border-red-700  bg-red-200">
                    <Outlet/>
                </main>
                <footer>
                    <CartOverview/>
                </footer>
            </div>
         

       
        </>

    );

}


export default Applayout;