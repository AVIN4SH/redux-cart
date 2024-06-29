import React from "react";

import { useDispatch, useSelector } from "react-redux"; //this hook dispatches action to reducer method
import { addToCart, removeFromCart } from "../store/Slices/Cart-Slice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product)); //here addToCart reducer takes a payload which is product in our case as we need to perform action on product
  }
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 shadow-xl shadow-gray-200 hover:shadow-gray-400 border-gray-600 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px] ">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product.title}
          </h1>
          <p className="text-center">${product.price}</p>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-black text-white border-2 rounded-lg font-bold p-4 hover:scale-105 transition-transform "
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
