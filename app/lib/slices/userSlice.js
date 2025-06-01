import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 100,
  name: "",
  roundedImage: "",
  backgroundimage:"",
  verified: false,
  description: "",
  isLoggedIn: false,
  imgCollection: [],
  favorite: [],
  profile: [
    { id: 1, icon: "🧑", text: "Gender", reply: "Male", color: "bg-green-300" },
    { id: 2, icon: "🎂", text: "Age", reply: "27", color: "bg-red-500" },
    {
      id: 3,
      icon: "🧑‍🔧",
      text: "occupation",
      reply: "Engineer",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      icon: "💘",
      text: "Relationship",
      reply: "Single",   
      color: "bg-purple-500",
    },
    {
      id: 5,
      icon: "🧍‍♂️",
      text: "Height-Range",
      reply: "5'6",
      color: "bg-blue-500",
    },
    {
      id: 6,
      icon: "🏋️‍♀️",
      text: "Weight-Range",
      reply: "60-70kg",
      color: "bg-red-500",
    },
    {
      id: 7,
      icon: "⛪",
      text: "Religion",
      reply: "Christian",
      color: "bg-yellow-500",
    },
    {
      id: 8,
      icon: "🏴",
      text: "Nationality",
      reply: "Nigerian",
      color: "bg-blue-500",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editProfile: (state, action) => {
      const {
        name,
        description,
        nationality,
        gender,
        relationship,
        religion,
        roundedImage,
      } = action.payload;

      state.name = name;
      state.description = description;
      state.roundedImage = roundedImage;

      state.profile = state.profile.map((item) => {
        switch (item.text) {
          case "Nationality":
            return { ...item, reply: nationality };
          case "Gender":
            return { ...item, reply: gender };
          case "Religion":
            return { ...item, reply: religion };
          case "Relationship":
            return { ...item, reply: relationship };
          default:
            return item;
        }
      });
    },
    favorite: (state, action) => {
      state.user = {
        ...state,
        favorite: [...action.payload],
      };
    },
    imageUpload: (state, action) => {
      const updatedImages = [...state.imgCollection, action.payload];
      const trimmedImages = updatedImages.slice(-4); // keep last 4 items
      return {
        ...state,
        imgCollection: trimmedImages,
      };
    },
    removeImage: (state, action) => {
      state.images.splice(action.payload, 1);
    },
  },
});
export const { editProfile, favorite, imageUpload, removeImage } =
  userSlice.actions;
export default userSlice.reducer;
