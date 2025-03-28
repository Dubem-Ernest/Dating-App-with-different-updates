import React from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const Nav = () => {
  return (
    <nav className="flex w-full px-8 h-20 bg-white space-x-12">
      {/* Left Section (Logo) */}
      <div className="w-1/6 h-full flex items-center text-white px-10 border-r-2 ">
        <Link href="#" className=" flex items-center ">
          Logo
        </Link>
      </div>

      {/* Center Section (Search & Filter) */}
      <div className="flex w-2/5 h-full items-center space-x-4  text-white px-4">
        {/* Search Input */}
        <div className="flex h-10 items-center w-1/2 text-black px-3 py-1 rounded-full border-2 border-blue-400">
          <GoSearch className="text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="ml-1 text-sm md:text-base bg-transparent px-1 py-3 outline-none border-none w-32 sm:w-48"
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center flex grow py-1 space-x-1 px-3 bg-white text-gray-500 rounded-full border-2 border-gray-400 ">
          <FaFilter />
          <span>Filter</span>
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="h-full flex flex-grow items-center w-48 justify-end space-x-8 pr-8">
        <span
          className="material-icons text-red-500"
          style={{ fontSize: "2rem" }}
        >
          notifications_active
        </span>
        <Link href="/profile" className="h-16 w-16 rounded-full object-cover">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="image"
            className="h-full w-16 rounded-full object-cover"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
