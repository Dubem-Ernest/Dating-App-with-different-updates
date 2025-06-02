"use client";

import React from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

const Nav = ({ sidebarOpen, setSidebarOpen }) => {
  const user = useSelector((state) => state.user);

  const handleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <nav className="flex items-center w-full h-20 bg-white px-4 md:px-8 shadow-sm">
      {/* Left Section - Logo */}
      <div className="w-1/6 h-full flex items-center border-r-2">
        <Link href="/" className="text-lg md:text-2xl font-bold text-red-500">
          Finder
        </Link>
      </div>

      {/* Center Section - Search and Filter */}
      <div className="flex items-center w-2/5 space-x-4 px-4">
        {/* Search */}
        <div className="flex items-center h-10 w-full max-w-xs px-3 border-2 border-blue-400 rounded-full text-black">
          <GoSearch className="text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="ml-2 bg-transparent text-sm md:text-base outline-none w-full"
          />
        </div>

        {/* Filter */}
        <button className="hidden md:flex items-center px-3 py-1 space-x-2 text-gray-500 border-2 border-gray-400 rounded-full">
          <FaFilter />
          <span>Filter</span>
        </button>
      </div>

      {/* Right Section - Notification, Profile Image, Menu Icon */}
      <div className="flex items-center justify-end flex-grow space-x-6 pr-4">
        <span className="material-icons text-red-500 text-2xl">
          notifications_active
        </span>

        {/* Profile Image */}
        <Link href="/profile" className="hidden md:block h-12 w-12 rounded-full overflow-hidden">
          <img
            src={user?.roundedImage || "/blank.png"}
            alt="User"
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Sidebar Toggle for Mobile */}
        <button onClick={handleSidebar} className="block md:hidden">
          <span className="material-icons text-gray-700 text-2xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
