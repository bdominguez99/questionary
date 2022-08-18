import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    pushData: (state, action) => {
      state.push(action.payload);
    },
    popData: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { pushData, popData, saveData } = dataSlice.actions;
export default dataSlice.reducer;
