import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayAnimation: true,
  isHelpShown: true,
  isDataShown: true,
};

const checkScreenSizeSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    checkScreenSize: (state) => {
      if (window.innerWidth > 1300) {
        state.displayAnimation = false;
      }
      if (window.innerWidth > 1290) {
        state.isDataShown = false;
        state.isHelpShown = false;
      } else {
        return;
      }
    },
    showHelp: (state) => {
      state.isDataShown = false;
      if (state.isHelpShown === false) {
        state.isHelpShown = true;
      } else {
        state.isHelpShown = false;
      }
    },
    showData: (state) => {
      state.isHelpShown = false;
      if (state.isDataShown === false) {
        state.isDataShown = true;
      } else {
        state.isDataShown = false;
      }
    },
  },
});

export const { checkScreenSize, showHelp, showData } =
  checkScreenSizeSlice.actions;
export default checkScreenSizeSlice.reducer;
