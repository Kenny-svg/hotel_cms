import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWIshlist } from "../../../features/slices/wishlistSlice";
import { HiTrash } from "react-icons/hi";

const WishlistView = ({ item }) => {
  const dispatch = useDispatch();
  const handleDel = () => {
    dispatch(removeFromWIshlist(item.id));
  };

  if (!item) {
    return <div>No item found</div>;
  }

  return (
    <>
      <div className="bg-white w-11/12 md:w-1/2 mx-auto p-5 rounded-md mt-5 mb-5">
        <div className="flex justify-between">
          <div>
            <img className="w-32 rounded-md" src={item.url} />
          </div>
          <div>
            <p>Room Number: {item.room_number}</p>
            <p>Category: {item.category}</p>
            <p>Amount: {item.amount}</p>
            {/* Display other item properties */}
          </div>
          <div>
            <HiTrash
              className="cursor-pointer text-2xl text-yellow-500"
              onClick={handleDel}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistView;
