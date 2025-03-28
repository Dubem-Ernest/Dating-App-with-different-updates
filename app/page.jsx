"use client";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <main>
      <div className="flex w-full gap-16 max-w-80 items-center">
        <div className="flex items-center space-x-3">
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
              className="w-full rounded-md text-sm px-2 py-1"
            >
              <option  value="Dating">Dating</option>
              <option  value="Marraige">Marraige</option>
              <option  value="Friendhip">Friendhip</option>
              <option  value="Proffessional">Proffessional</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
}
