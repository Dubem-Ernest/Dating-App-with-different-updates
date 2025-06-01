import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: "All",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const allowedValues = ["Dating", "friendship", "Married", "professional", "Single", "All"];
      if (allowedValues.includes(action.payload)) {
        state.users = action.payload;
      }
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
