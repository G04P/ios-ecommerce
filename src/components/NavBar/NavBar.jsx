import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import Dropdown from "./Dropdown";
import { CartContext } from "../../Context/CartContext";
import { AppContext } from "../../Context/appContext";

export const NavBar = ({}) => {
  const { getProductsDB } = AppContext;
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="bg-black from-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <FaApple className="text-white absolute-child  mr-2" />
          <div className="text-white  font-bold text-xl">
            <Link to={"/"}>Mi Tienda</Link>
          </div>
        </div>

        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link to={"/"} className="text-gray-400 hover:text-white">
              Inicio
            </Link>
          </li>

          <li>
            <Dropdown className="text-gray-400 hover:text-white" />
          </li>
          <li>
            <Link
              to={"/Contacto/Contacto"}
              className="text-gray-400 hover:text-white"
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div className="flex mx-3 p-2">
          <Link
            to={"/Login/createAccount"}
            className="text-gray-400 mx-2 mt-3 hover:text-white"
          >
            Login
          </Link>
          <Link
            to={"/Item/Cart"}
            className=" flex items-center justify-center center h-12 w-10 px-3 text-m rounded-lg peer-focus:relative peer-focus:rounded-l-none"
          >
            <button className="mt-7 bg-black text-white font-bold py-53 px-2 rounded-full">
              <GiShoppingBag className="h-43 w-5 " />
              <span className=" relative  bottom-2 left-3 bg-white mt-2  text-black  py-auto px-1 rounded-full">
                {totalItems}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
