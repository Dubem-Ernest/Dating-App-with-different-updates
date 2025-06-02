"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faPen,
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
  const profileArray = useSelector((state) => state.user.profile || []);
  const images = useSelector((state) => state.user.imgCollection);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(imageUpload(reader.result));
    };
    reader.readAsDataURL(file);
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

  const profile1 = profileArray?.filter(
    (item) => item.text !== "occupation" && item.text !== "Gender"
  );
  const profileClone = [
    { icon: "🚺", text: "Gender", reply: "Female", color: "bg-green-300" },
    ...profile1,
  ];

  return (
    <div className="w-full h-full overflow-auto pb-10">
      {/* Cover Image Section */}
      <div className="relative w-full h-64 sm:h-80">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="Cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>

        <div className="absolute top-4 left-4 flex gap-2">
          <button className="bg-black text-white px-4 py-1 rounded-lg text-sm opacity-75">
            Back
          </button>
          <button className="bg-black text-white px-4 py-1 rounded-lg text-sm opacity-75">
            Update cover
          </button>
        </div>

        <div className="absolute  left-[20%] top-52 transform -translate-x-1 flex  sm:flex-row items-center gap-4 px-4 w-full sm:w-auto">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-lg">
            <img
              src={profilePicture || "/blank.png"}
              className="w-full h-full object-cover rounded-lg"
              alt="Profile"
            />
            <button className="px-2 absolute bottom-0 right-0 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <FontAwesomeIcon icon={faPlus} size="xs" />
            </button>
          </div>

          <div className="text-center sm:text-left sm:hidden">
            <h1 className="text-xl font-bold text-white md:text-sm ">Temioluwa, 27</h1>
            <h2 className="font-semibold text-white text-xs md:text-sm">Lagos</h2>
          </div>

          <FontAwesomeIcon
            icon={faPenToSquare}
            size="lg"
            className="text-white absolute top-4  block md:hidden right-4"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-end gap-4 mt-24 px-4">
        <button
          onClick={() => setShowEditModal(true)}
          className="w-32 p-2 bg-red-500 text-sm text-white rounded-full"
        >
          Edit
        </button>
        <button className="w-40 p-2 bg-red-500 text-sm text-white rounded-full">
          Edit Match Setup
        </button>
      </div>

      {/* About Textarea */}
      <div className="mt-6 px-4">
        <div className="relative h-24 w-full rounded-lg">
          {value === "" && (
            <div className="absolute left-4 top-3 text-sm flex items-center text-gray-400 pointer-events-none">
              <span>A few words about myself</span>
              <FontAwesomeIcon icon={faPen} className="ml-2" />
            </div>
          )}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full text-sm h-full p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Image Upload Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 px-4">
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
            className="border-2 border-gray-500 w-24 h-24 flex items-center justify-center rounded-lg overflow-hidden"
          >
            <img src={img} alt={img} className="h-full w-full object-cover" />
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

      {/* Description Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 px-4">
        <DescriptionCard type={true} items={fonts} />
        <DescriptionCard type={true} items={fonts1} />
        <DescriptionCard profile={profileArray} text="About me" />
        <DescriptionCard profile={profileClone} text="I'm interested in" />
      </div>

      {showEditModal && <EditProfileModal onClose={() => setShowEditModal(false)} />}
    </div>
  );
};

export default Profile;
