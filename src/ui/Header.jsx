import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchOrder from "../features/order/SearchOrder.jsx"

function Header() {
  // Access userName from Redux store
  const userName = useSelector((state) => state.user.userName);

  return (
    <>


      <header className="flex justify-between bg-yellow-500 px-5 py-4">
        <Link to="/menu">Fast React</Link>
        <SearchOrder />
        <p className="hidden sm:block">{userName}</p>
      </header>
    </>
  );
}

export default Header;
