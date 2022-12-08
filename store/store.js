import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../State/navSlice";
import constructionReducer from "../State/constructionSlice";
import animationReducer from "../State/hideAnimationSlice";

export const store = configureStore({
  reducer: {
    nav: navSliceReducer,
    construction: constructionReducer,
    animation: animationReducer,
  },
});
