"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faPen,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

import AddPhoto from "../components/AddPhoto";

import { imageUpload } from "../lib/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import DescriptionCard from "../components/DescriptionCard";
import EditProfileModal from "../components/EditProfileModal";


const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const profilePicture = useSelector((state) => state.user.roundedImage);
  const profileArray = useSelector((state)=> state.user.profile || [])
  const images = useSelector((state) => state.user.imgCollection);

  console.log(profileArray);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(imageUpload(reader.result));
    };
    reader.readAsDataURL(file);
  };

  // <FontAwesomeIcon icon="fas fa-user" size="lg" style={{color: "#63E6BE",}} />

  const handleRemove = (index) => {
    dispatch(removeImage(index));
  };

  const triggerFileInput = () => {
    inputRef.current?.click();
  };

  const totalSlots = 4;
  const remainingSlots = totalSlots - images.length;

  const fonts = [
    { icon: "☂️", text: "Laying on the beach", color: "bg-green-300" },
    { icon: "🏍️", text: "Biking", color: "bg-red-500" },
    { icon: "🍽️", text: "cooking", color: "bg-yellow-500" },
    { icon: "🕺", text: "Dancing", color: "bg-purple-500" },
    { icon: "🏛️", text: "Musuems", color: "bg-blue-500" },
  ];
  const fonts1 = [
    { icon: "✈️", text: "Travelling", color: "bg-green-300" },
    { icon: "🎨", text: "Painting", color: "bg-red-500" },
    { icon: "🖌️", text: "Drawing", color: "bg-yellow-500" },
    { icon: "📖", text: "Reading", color: "bg-purple-500" },
    { icon: "⚽", text: "Football", color: "bg-blue-500" },
  ];



  const profile1 =profileArray?.filter((item,i)=>item.text!="occupation"&&item.text!="Gender" )
  const profileClone = [{ icon: "🚺", text: "Gender", reply: "Female", color: "bg-green-300" },...profile1]
  return (
    <div className="gap-x-4 gap-y-4 overflow-auto no-scrollbar h-screen mt-10 mr-20">
      <div className="w-full relative flex flex-col profile-custom-height ">
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-25"></div>
        <img
          className="object-cover w-full h-full overflow-hidden"
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt=""
        />

        <div className="justify-between px-4 absolute  gap-4 flex mt-4 w-full">
          <button className="w-24 cursor-pointer p-2 bg-black opacity-75 text-sm text-white rounded-lg text-white ">
            Back
          </button>
          <button className="w-40 cursor-pointer p-2 bg-black opacity-75 text-sm text-white rounded-lg text-white ">
            Update cover
          </button>
        </div>

        <div className="flex w-96 gap-4 profile-card-size absolute translate-y-24 translate-x-24 block">
          <div className="relative rounded-lg h-full w-1/2 ">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={profilePicture || '/blank.png'} alt="User Image"
              
            />
            <button className="px-2 absolute add-btn bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <FontAwesomeIcon icon={faPlus} size="xs" />
            </button>
          </div>
          <div className="h-full w-1/2 space-x-8 pt-8 flex">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-bold">Temioluwa, 27</h1>
              <h2 className="font-semibold">Lagos</h2>
            </div>

            <FontAwesomeIcon
              icon={faPenToSquare}
              size="lg"
              className="absolute right-5"
            />
          </div>
        </div>
      </div>
      <div className="justify-end  gap-4 flex mt-4 w-full">
        <button onClick={() => setShowEditModal(true)} className="w-24  p-2 bg-red-500 text-sm text-white rounded-full text-white ">
          Edit
        </button>
        <button className="w-40 p-2 bg-red-500 text-sm text-white rounded-full text-white ">
          Edit Match Setup
        </button>
      </div>

      <div className="text-area-container rounded-lg flex flex-col space-y-6 mt-20">
        <div className="relative h-24 w-full rounded-lg">
          {/* Fake placeholder with icon */}
          {value === "" && (
            <div className="absolute text-sm left-4 space-x-4 top-3 flex items-center text-gray-400 pointer-events-none transition-opacity duration-200">
              <span>A few words about myself</span>
              <FontAwesomeIcon icon={faPen} className="ml-2" />
            </div>
          )}

          {/* Actual textarea */}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full text-sm h-full pl-8 pt-4 pb-3 pr-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <div className="flex shadow-lg justify-center gap-8 img-card-height items-center w-full px-2 rounded-lg">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={inputRef}
            className="hidden"
          />
          {images.map((img, idx) => (
            <div
              key={idx}
              className=" border-2  border-gray-500  basis-3xs h-24 items-center flex flex-col rounded-lg"
            >
              <div className="text-5xl text-gray-500 h-full w-full ">
                <img
                  src={img}
                  alt={img}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}

          {[...new Array(remainingSlots)].map((_, idx) => (
            <button
              key={`placeholder-${idx}`}
              onClick={triggerFileInput}
              className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded hover:border-gray-500"
            >
              <AddPhoto />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-3">
        {" "}
        <DescriptionCard type={true} items={fonts} />
        <DescriptionCard type={true} items={fonts1} />
        <DescriptionCard profile={profileArray} text="About me" />
        <DescriptionCard profile={profileClone} text="I'm interested in"/>
      </div>


      {showEditModal && <EditProfileModal onClose={() => setShowEditModal(false)} />}

    </div>
  );
};

export default Profile;
