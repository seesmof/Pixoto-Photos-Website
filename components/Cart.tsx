import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  setIsCartShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({ setIsCartShown }: Props) => {
  return (
    <>
      <div className="flex min-h-screen font-medium bg-inherit text-inherit p-4 flex-col">
        <div className="flex flex-row h-min justify-between items-center">
          <h1 className="text-2xl">Your Cart</h1>
          <AiOutlineClose
            className="text-2xl stroke-[3] cursor-pointer"
            onClick={() => setIsCartShown(false)}
          />
        </div>
        <div className="flex-1 pt-4">No items found</div>
      </div>
    </>
  );
};

export default Cart;
