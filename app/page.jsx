"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./components/UserCard";
import { changeFavorite } from "./lib/slices/usersSlice";
import { favorite } from "./lib/slices/userSlice";
import { changeFilter } from "./lib/slices/filterSlice";

export default function Home() {
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user);
  const filterValue = useSelector((state) => state.filter.users);
  const [filteredUser, setFilteredUser] = useState([]);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  useEffect(() => {
    if (filterValue === "All") {
      setFilteredUser(users);
    } else {
      setFilteredUser(users.filter((user) => user.relationshipType === filterValue));
    }
  }, [users, filterValue]);

  const addFavorite = (i) => {
    const updatedUsers = [...users];
    updatedUsers[i] = {
      ...updatedUsers[i],
      favorite: !updatedUsers[i].favorite,
    };
    dispatch(changeFavorite(updatedUsers));
    const favoriteUsers = updatedUsers.filter((user) => user.favorite);
    dispatch(favorite(favoriteUsers));
  };

  return (
    <section className="flex flex-col h-screen px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between py-4 gap-4 md:gap-16 w-full max-w-7xl mx-auto">
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 md:h-28 md:w-28 rounded-full overflow-hidden">
            <img
              src={user?.roundedImage || "/blank.png"}
              alt="Profile"
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <h1 className="text-base md:text-lg font-medium">Welcome, {user.name || "Anonymous"}</h1>
            <div className="mt-2">
              <p className="text-xs md:text-sm text-gray-600">My profile completeness</p>
              <div className="flex items-center mt-1">
                <div className="w-40 md:w-64 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <span className="text-xs pl-2">60%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <label htmlFor="filter" className="text-sm md:text-base font-medium">
            Relationship type:
          </label>
          <select
            id="filter"
            onChange={handleChange}
            className="w-full md:w-44 rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="All">All</option>
            <option value="Dating">Dating</option>
            <option value="Married">Married</option>
            <option value="friendship">Friendship</option>
            <option value="professional">Professional</option>
          </select>
        </div>
      </div>

      {/* User Cards */}
      <div className="flex-1 overflow-auto scrollbar-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto pb-4">
          {Array.isArray(filteredUser) && filteredUser.length > 0 ? (
            filteredUser.map((user, i) => (
              <UserCard key={i} user={user} i={i} addFavorite={addFavorite} />
            ))
          ) : (
            <p className="text-center col-span-full">Loading users...</p>
          )}
        </div>
      </div>
    </section>
  );
}
