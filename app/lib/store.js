import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../lib/slices/usersSlice";
import userReducer from "../lib/slices/userSlice"
import filterReducer from "../lib/slices/filterSlice"

const store = configureStore({
  reducer: {
    users: usersReducer,
    user:userReducer,
    filter: filterReducer

  },
});
export default store;