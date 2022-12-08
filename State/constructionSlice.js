import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayConstruction: true,
};

const constructionSlice = createSlice({
  name: "construction",
  initialState,
  reducers: {},
});

export default constructionSlice.reducer;
