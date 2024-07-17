import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, img, price, qty }));
          toast(`${name} is removed`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-gray-700 cursor-pointer hover:text-red-500"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="text-gray-800 font-bold">{name}</h2>
        <div className="flex justify-between">
          <span className="text-purple-500 font-bold">${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FiMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-purple-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <FiPlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-purple-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
