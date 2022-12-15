import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../State/navSlice";
import constructionReducer from "../State/constructionSlice";
import screenSizeReducer from "../State/checkScreenSizeSlice";

export const store = configureStore({
  reducer: {
    nav: navSliceReducer,
    construction: constructionReducer,
    screen: screenSizeReducer,
  },
});
