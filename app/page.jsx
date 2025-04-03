"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Solid style
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"; // Verified checkmark
// import UserCard from "./components/UserCard";
import user from "./User";

export default function Home() {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState(user ?? []);
  // const [favoriteUser, setFavoriteUser] = useState([]);

 

 // This state is derived from users automatically now
 const favoriteUser = users.filter(user => user.favorite); // Filter out favorites from users
console.log(favoriteUser);
 const addFavorite = (i) => {
   setUsers((prevUsers) => {
     if (!prevUsers || !Array.isArray(prevUsers)) return [];
     // Toggle the favorite status
     const updatedUsers = prevUsers.map((user, index) =>
       index === i ? { ...user, favorite: !user.favorite } : user
     );
     return updatedUsers; // Update users state correctly
   });
 };


  return (
    <section className="flex flex-col h-screen">
      <div className="flex w-full gap-16 max-w-80 items-center header">
        <div className="flex items-center space-x-3 py-8">
          <div className="h-32 w-32 rounded-full">
            <img
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=250"
              alt=""
              className="rounded-full object-cover h-full w-full"
            />
          </div>
          <div>
            <h1 className="text-md py-4">Welcome,Temioluwa</h1>
            <div>
              <p className="text-sm">My profile completeness</p>
              {/* Progress Bar */}
              <div className="flex items-center">
                <div className="w-64 bg-gray-200 rounded-full h-2">
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
          <h1>Relationship type:</h1>
          <div className="flex items-center w-32 p-2 rounded-md">
            <select
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="w-full rounded-md text-sm px-2 py-2"
            >
              <option value="Dating">Dating</option>
              <option value="Marraige">Marraige</option>
              <option value="Friendhip">Friendhip</option>
              <option value="Proffessional">Proffessional</option>
            </select>
          </div>
        </div>
      </div>

      <div className="h-full inline-grid grid-cols-4 gap-2 overflow-auto no-scrollbar">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user, i) => (
            <div
              key={i}
              className="shadow-lg block  h-custom w-custom card-color flex flex-col items-center rounded-lg mt-2 ml-2"
            >
              <div className="card-img-height w-full relative">
                <img
                  className="h-full w-full object-cover rounded-t-lg "
                  src={user.backgroundImage}
                  alt=""
                />

                <div className="absolute translate-custom border-4 border- card-width card-height rounded-full bg-black">
                  <img
                    src={user.roundedImage}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col px-3">
                <div className="flex justify-between block">
                  {" "}
                  <div className="flex flex-col py-2">
                    <h1 className="text-xs font-bold py-1">
                      {user.name},{user.age}
                    </h1>
                    <h1 className="text-xs font-bold">{user.Nationality}</h1>
                  </div>
                  <div className="flex flex-col block items-center py-2 ">
                    <h2 className="text-xs font-bold py-1">
                      {user.percentage}, match
                    </h2>
                    {user.verified && (
                      <div className="flex space-x-1 items-center">
                        {" "}
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-sm px-1 text-blue-500 "
                        />
                        <p className="text-xs font-bold py-1 ">
                          Verified address
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-xs pt-5 pb-3">{user.description}</p>
                <div className="flex justify-center items-center w-full justify-between py-3">
                  <button
                    className={`w-24 h-8 p-2  text-xs text-white rounded-full ${
                      user.view_info ? "bg-red-500" : "bg-blue-500"
                    }`}
                  >
                    {user.view_info ? "More info" : "View info"}
                  </button>{" "}
                  {/* <FontAwesomeIcon
                  icon={faHeart}
                  className={` text-xl px-1 ${
                    item.favorite ? "text-red-500" : "white"
                  }`}
                /> */}
                  <FontAwesomeIcon
                    onClick={() => addFavorite(i)}
                    icon={faHeart}
                    size="xl"
                    className={`cursor-pointer ${
                      user.favorite ? "text-red-500" : "text-green-500"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading users...</p> // Fallback when users is empty
        )}
      </div>
    </section>
  );
}
