import React, { useContext } from "react";
//import link
import { Link } from "react-router-dom";

//import icon
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

//import component
import CartItem from "../components/CartItem";

// import slibar context
import { SidebarContext } from "../contexts/SidebarContext";

//import cart context
import { CartContext } from "../contexts/CartContext";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  // console.log(useContext(CartContext));
  const { cart, clearCart, total } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? `right-0` : `-right-full`
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-[30vw] transition-all duration-300 z-20 px-4     lg:px-[35px]:`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div onClick={handleClose} className="font-semibold uppercase text-sm">
          Shopping Bag (0)
        </div>
        <div className=" cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward className="tetx-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="bg-pink-200 flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center ">
          {/* total  */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total</span>${parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon  */}
          <div
            onClick={clearCart}
            className="text-red-500 cursor-pointer py-4 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
