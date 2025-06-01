import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const AddPhoto = () => {
  return (
    <div className=" border-2  border-gray-500  flex-1 h-24 items-center flex flex-col bg-green-500 rounded-lg">
      <h2>Add photo</h2>
      <div className="text-5xl text-gray-500">
        <AddPhotoAlternateIcon fontSize="inherit" />
      </div>
    </div>
  );
};

export default AddPhoto;
