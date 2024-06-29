import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardCart from "../components/CardCart";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0)); //accumulator + price and initial value as 0
  }, [cart]);

  return (
    <div>
      <div className="flex flex-col text-xl justify-center text-center  items-center ">
        <div className="p-3 border-2 shadow-xl shadow-gray-200 hover:shadow-gray-400 w-[80vw] sm:w-[65vw] md:w-[40vw]  rounded-xl border-gray-600">
          <h3 className="font-bold text-2xl">Cart Summary</h3>
          <hr className="border border-black my-1 w-[80%] text-center mx-auto" />
          <span>Total Items : {cart.length}</span> <br />
          <span>Total Amount : ${totalCart}</span>
        </div>
      </div>
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] mx-auto">
            <div className="flex flex-col items-center p-3">
              {cart.map((cartItem) => (
                <CardCart cartItem={cartItem} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-2xl mb-2">
            Cart is Empty, Add Now!!!
          </h1>
          <Link to={"/"}>
            <button className="bg-black text-white border-2 rounded-lg font-bold p-4 hover:scale-105 transition-transform ">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
