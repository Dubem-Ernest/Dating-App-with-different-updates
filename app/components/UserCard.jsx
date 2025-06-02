"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCircleCheck,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ user, i, addFavorite }) => {
  const router = useRouter();

  const handleChatClick = () => {
    const params = new URLSearchParams({
      id: user.id,
      name: user.name,
      description: user.description,
    }).toString();

    router.push(`/chat?${params}`);
  };

  const truncatedDescription =
    user.description.length > 120
      ? `${user.description.substring(0, 100)}...`
      : user.description;

  return (
    <div
      onClick={handleChatClick}
      className="shadow-lg w-60 rounded-lg mt-2 ml-2 flex flex-col items-center cursor-pointer bg-neutral-100"
    >
      {/* Background image section */}
      <div className="card-img-h w-full relative">
        <img
          src={user.backgroundImage}
          alt={`${user.name}'s background`}
          className="h-full w-full object-cover rounded-t-lg"
        />
        {/* Profile round image */}
        <div className="absolute translate-custom border-4 card-width card-height rounded-full bg-black">
          <img
            src={user.roundedImage}
            alt={`${user.name}'s profile`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* User info section */}
      <div className="flex flex-col px-3 pb-3 w-full">
        <div className="flex justify-between items-start mt-4">
          {/* Name, Age, Nationality */}
          <div className="flex flex-col">
            <h1 className="text-xs font-bold">
              {user.name}, {user.age}
            </h1>
            <h2 className="text-xs font-semibold">{user.Nationality}</h2>
          </div>

          {/* Match percentage and Verified badge */}
          <div className="flex flex-col items-end text-right">
            <span className="text-xs font-bold">{user.percentage}, match</span>
            {user.verified && (
              <div className="flex items-center mt-1 space-x-1 text-blue-500">
                <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                <p className="text-xs font-semibold text-black">
                  Verified address
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm mt-3">{truncatedDescription}</p>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-4 space-x-3">
          <button
            className={`w-24 h-8 text-xs text-white rounded-full ${
              user.view_info ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {user.view_info ? "More info" : "View info"}
          </button>

          {/* Message Icon */}
          <FontAwesomeIcon
            icon={faMessage}
            size="lg"
            onClick={(e) => {
              e.stopPropagation();
              handleChatClick();
            }}
            className="cursor-pointer text-blue-500"
          />

          {/* Heart Icon */}
          <FontAwesomeIcon
            icon={faHeart}
            size="xl"
            onClick={(e) => {
              e.stopPropagation();
              addFavorite(i);
            }}
            className={`cursor-pointer ${
              user.favorite ? "text-red-500" : "text-green-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
