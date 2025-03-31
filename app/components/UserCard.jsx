import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Solid style
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"; // Verified checkmark

const UserCard = () => {
  return (
    <div className="h-custom w-custom card-color flex flex-col items-center rounded-lg mt-2 ml-2">
      <div className="card-img-height w-full relative">
        <img
          className="h-full w-full object-cover rounded-t-lg "
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt=""
        />

        <div className="absolute translate-custom border-4 border- card-width card-height rounded-full bg-black">
          <img
            src="https://images.pexels.com/photos/20785/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col px-3">
        <div className="flex justify-between h-4">
          {" "}
          <div className="flex flex-col ">
            <h1 className="text-xs font-bold py-1">Frued,29</h1>
            <h1 className="text-xs font-bold">Mexico</h1>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-xs font-bold py-1">78% match</h2>
            <p className="text-xs font-bold">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-500 text-sm px-1"
              />
              Verified address
            </p>
          </div>
        </div>

        <p className="text-xs py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis id
          sit fugit consectetur nulla expedita eligendi et nesciunt officia cum.
        </p>
        <div className="flex justify-center items-center w-full justify-between">
          <button className="w-24 h-8 p-2 bg-red-500 text-xs text-white rounded-full">
            More info
          </button>{" "}
          <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 text-xl px-1"
              />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
