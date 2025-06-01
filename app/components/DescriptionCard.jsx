import React from "react";

import {
  faPenToSquare,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DescriptionCard = ({ type, items, profile, text }) => {
  
  return (
    <div className="w-80 desc-card bg-green-500 mr-4 py-3 px-4 rounded-lg shadow-lg ">
      {type ? (
        <>
          {" "}
          <div className="flex justify-between py-2">
            <h1 className="text-sm">My Hobbies</h1>{" "}
            <div>
              {" "}
              <FontAwesomeIcon icon={faPenToSquare} size="lg" className="" />
            </div>
          </div>
          <div className="grid grid-cols-3">
            {items.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col py-3 items-center text-center`}
              >
                {" "}
                <div
                  className={`icon-container ${item.color} rounded-full text-center`}
                >
                  <h1 className="text-5xl text-white">{item.icon}</h1>
                </div>
                <h4 className="text-xs text-center">{item.text}</h4>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h1 className="pb-4">{text}</h1>
          <table className="w-64">
            <tbody className="p-2 text-end">
              {profile.map((item, i) => (
                <tr key={i} className="py-8">
                  <td>
                    <span
                      className={`mr-2 icon-container-1 ${item.color}  rounded-full text-center`}
                    >
                      {item.icon}
                    </span>{" "}
                    {item.text}:
                  </td>
                  <td>{item.reply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DescriptionCard;
