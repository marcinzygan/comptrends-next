import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNavigation: (state, data) => {
      state.isNavOpen = !data.payload;
    },
  },
});

export const { toggleNavigation } = navSlice.actions;
export default navSlice.reducer;
