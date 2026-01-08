import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';

import Home from './ui/Home.jsx';
import Error from './ui/Error.jsx';
import Order from "./features/order/Order";
import CreateOrder,{action as actionOrder} from "./features/order/CreateOrder";
import Menu,{Loader as menuOrder} from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Applayout from './ui/Applayout';

import CreateUser from "./features/user/CreateUser.jsx";




function App() {
  const [count, setCount] = useState(0);

  // 
  

  const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,

    children: [
      {
        index: true, // ✅ replaces path: "/"
        element: <CreateUser />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuOrder,
        errorElement:<Error/>
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: actionOrder,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/:orderId",
        element: <Order />,
      },
    ],
  },
]);



  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
