import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../lib/slices/userSlice";

const EditProfileModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    nationality: "",
    gender: "",
    religion: "",
    relationship: "",
    roundedImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, roundedImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfile(formData));
    onClose(); // Close modal after submit
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-2 border rounded"
            value={formData.description}
            onChange={handleChange}
          />
          <select
            name="gender"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            className="w-full p-2 border rounded"
            value={formData.nationality}
            onChange={handleChange}
          />
          <input
            type="text"
            name="religion"
            placeholder="Religion"
            className="w-full p-2 border rounded"
            value={formData.religion}
            onChange={handleChange}
          />
          <input
            type="text"
            name="relationship"
            placeholder="Relationship Status"
            className="w-full p-2 border rounded"
            value={formData.relationship}
            onChange={handleChange}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
