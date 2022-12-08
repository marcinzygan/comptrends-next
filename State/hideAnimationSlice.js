import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayAnimation: true,
};

const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    checkScreenSize: (state) => {
      if (window.innerWidth > 1300) {
        state.displayAnimation = false;
      } else {
        return;
      }
    },
  },
});

export const { checkScreenSize } = animationSlice.actions;
export default animationSlice.reducer;
