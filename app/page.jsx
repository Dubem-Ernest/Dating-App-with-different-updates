"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Solid style
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"; // Verified checkmark
import UserCard from "./components/UserCard";
import { changeFavorite } from "./lib/slices/usersSlice";
import { favorite } from "./lib/slices/userSlice";
import { changeFilter } from "./lib/slices/filterSlice"



import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user)
  const filterValue = useSelector((state) => state.filter.users)
  const [filteredUser, setFilteredUser] = useState([])
  const favoriteArray = useSelector((state)=>state.user.user)
  const dispatch = useDispatch();

  console.log(filterValue)


  function handleChange(e){
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
        favorite: !updatedUsers[i].favorite, // toggle favorite value
      };
      dispatch(changeFavorite(updatedUsers));
      let favoriteUsers=updatedUsers.filter((user) => user.favorite === true)
     
      dispatch(favorite(favoriteUsers))
    
  };

  return (
    <section className="flex flex-col h-screen">
      <div className="flex w-full gap-16 max-w-80 items-center header">
        <div className="flex items-center space-x-3 py-8">
          <div className="h-16 md:h-32 md:w-32 w-16 rounded-full">
            <img
              src={user?.roundedImage || '/blank.png'}
              alt=""
              className="rounded-full object-cover h-full w-full"
            />
          </div>
          <div>
            <h1 className="text-md py-4">Welcome,{user.name || "User"}</h1>
            <div>
              <p className="text-sm">My profile completeness</p>
              {/* Progress Bar */}
              <div className="flex items-center">
                <div className="w-32 md:w-64 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full text-center text-white"
                    style={{ width: "60%" }}
                  ></div>
                </div>{" "}
                <span className="text-xs pl-2">60%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <h1 className="text-base">Relationship type:</h1>
          <div className="flex items-center w-28 p-2 rounded-md">
            <select
               onChange={handleChange}
              className="w-44 rounded-md text-sm px-1 py-1"
            >
              <option value="All">All</option>
              <option value="Dating">Dating</option>
              <option value="Married">Married</option>
              <option value="friendship">friendship</option>
              <option value="professional">Professional</option>
            </select>
          </div>
        </div>
      </div>

      <div className="h-full inline-grid md:grid-cols-4 grid-cols-2  md:gap-x-4  md:gap-y-4 overflow-auto no-scrollbar">
        {Array.isArray(filteredUser) && filteredUser.length > 0 ? (
          filteredUser.map((user, i) => (
            <UserCard user={user} key={i} i={i} addFavorite={addFavorite} />
          ))
        ) : (
          <p>Loading users...</p> // Fallback when users is empty
        )}
      </div>
    </section>
  );
}
