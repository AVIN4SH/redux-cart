import React from "react";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/Slices/Cart-Slice";

function CardCart({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    console.log(cartItem);
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex flex-col justify-center h-auto m-2  hover:shadow-md hover:shadow-gray-400">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src={cartItem?.image}
              alt={cartItem?.title}
              className="rounded-xl h-28 w-28"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              {cartItem.title}
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              {cartItem.description}
            </p>
            <p className="text-xl font-black text-gray-800">
              ${cartItem.price}
            </p>
            <button
              onClick={handleRemoveFromCart}
              className="bg-black text-white border-2 rounded-lg font-bold p-2 hover:scale-105 transition-transform ml-auto"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCart;
