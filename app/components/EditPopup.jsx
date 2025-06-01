import { useState, useEffect, useRef } from "react";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";

const EditPopup = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user);
  const [image, setimage] = useState("");
  const imgUpload = useRef(null);

  // console.log(userProfile);

  const handleProfilePictureChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log(file);
      // You can now work with the file object, e.g., display a preview, upload it, etc.
    }
  };

  const handleButtonClick = () => {
    imgUpload.current.click();
  };

  const handleInputChange = (index, event) => {};

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const formData = {
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    // };
    // dispatch(submitFormData(formData));
  };

  return (
    <div className="Edit-container bg-green-500 p-2">
      <form
        onSubmit={handleSubmit}
        className="w-full overflow-auto no-scrollbar"
      >
        <div className="w-full items-center px-2 top-height flex justify-between">
          <div className="flex text-lg font-medium items-center w-40 px-2 h-full bg-green-500 justify-between">
            {" "}
            <span className="">X</span> <h1>Edit profile</h1>{" "}
          </div>

          <div className="w-24">
            <button
              className="rounded-full px-1 w-full py-1 w-full bg-gray-500"
              type="submit"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="w-full h-48 ">
          <div className="w-full h-full relative">
            <img
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              alt=""
              className="w-full px-1 h-full "
            />
            <div className="edit-icon-position p-1 flex w-32   justify-between">
              <span className="w-1/3 text-center cursor-pointer py-1 rounded-full opacity-75  bg-gray-600">
                X
              </span>{" "}
              <div
                onClick={handleButtonClick}
                className="w-1/3 rounded-full cursor-pointer opacity-75 p-2 bg-gray-600 "
              >
                {" "}
                <FontAwesomeIcon icon={faCameraRetro} size="xl" />
              </div>
            </div>

            <div className="edit-container-popup rounded-full absolute top-0 left-0">
              <img
                className="w-full h-full rounded-full  "
                src="https://images.pexels.com/photos/20877/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt=""
              />
              <FontAwesomeIcon icon={faCameraRetro} size="xl" className="" />
            </div>
          </div>
        </div>

        <input
          ref={imgUpload}
          type="file"
          name="backgroundImage"
          onChange={handleProfilePictureChange}
          className="hidden"
        />

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label htmlFor="age">
          Age:{" "}
          <input
            type="number"
            id="age"
            name="age"
            value=""
            onChange={handleInputChange}
            min="0"
            max="100"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPopup;
