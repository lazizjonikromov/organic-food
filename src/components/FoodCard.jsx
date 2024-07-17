import React from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[300px] bg-white p-5 flex flex-col rounded-lg">
      <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg mb-5">
        <img
          src={img}
          alt=""
          className="w-full h-[150px] relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
        />
      </div>
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-purple-500">${price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between mt-3">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-500" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-purple-500 hover:bg-purple-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
