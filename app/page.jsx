"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Solid style
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"; // Verified checkmark
// import UserCard from "./components/UserCard";
import user from "../app/User/index";

export default function Home() {
  const [value, setValue] = useState("");
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

      <div className="bg-green-800 h-full grid grid-cols-4 gap-2 overflow-auto no-scrollbar">
        {user.map((item, i) => (
          <div key={i} className="h-custom w-custom card-color flex flex-col items-center rounded-lg mt-2 ml-2">
            <div className="card-img-height w-full relative">
              <img
                className="h-full w-full object-cover rounded-t-lg "
                src={item.backgroundImage}
                alt=""
              />

              <div className="absolute translate-custom border-4 border- card-width card-height rounded-full bg-black">
                <img
                  src={item.roundedImage}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col px-3">
              <div className="flex justify-between h-4">
                {" "}
                <div className="flex flex-col ">
                  <h1 className="text-xs font-bold py-1">
                    {item.name},{item.age}
                  </h1>
                  <h1 className="text-xs font-bold">{item.Nationality}</h1>
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-xs font-bold py-1">
                    {item.percentage}, match
                  </h2>
                  {item.verified && (
                    <p className="text-xs font-bold">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={`text-sm px-1 ${item.favorite ? "text-red-500" : "text-blue-500 "}`}
                      />
                      Verified address
                    </p>
                  )}
                </div>
              </div>

              <p className="text-xs py-4">
              {item.description}
              </p>
              <div className="flex justify-center items-center w-full justify-between">
                <button className={`w-24 h-8 p-2  text-xs text-white rounded-ful ${item.view_info ? 'bg-red-500': "bg-blue-500"}`}>
                {item.view_info ? "More info" : "View info"}
                </button>{" "}
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-red-500 text-xl px-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
