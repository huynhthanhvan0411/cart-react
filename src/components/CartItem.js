import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import icon
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
//import cart context
import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmout, decreaseAmout } =
    useContext(CartContext);
  //destructute item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div>
          {/* image */}
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt={title} />
          </Link>
        </div>
        <div className="w-full flex flex-col">
          {/* title anh icon remove */}
          <div className="flex justify-between mb-2 ">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            {/* remove icon  */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* quantity  */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium ">
              {/* minus icon */}
              <div
                onClick={() => decreaseAmout(id)}
                className="flex-1 flex justify-center items-center cursor-pointer bg-red-500  h-full"
              >
                <IoMdRemove className="cursor-pointer" />
              </div>
              {/* amout */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>

              <div
                onClick={() => increaseAmout(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price and amount */}
            <div className="flex-1 flex items-center justify-end ">
              $ {price}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              ${parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
