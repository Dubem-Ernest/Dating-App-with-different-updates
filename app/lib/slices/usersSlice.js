import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
};


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
     
      state.users = [...action.payload];
    },
    changeFavorite:(state,action)=> {
     
      state.users = action.payload
    },

  },
});
export const { getUsers,changeFavorite } = usersSlice.actions;
export default usersSlice.reducer;
