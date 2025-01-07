/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { getUserTypeSlider } from "./getUserType";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const userTypeSliderSlice = createSlice({
  name: "get/userTypeSlider",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getUserTypeSlider.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getUserTypeSlider.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = action.payload.error;
    });
    builder.addCase(getUserTypeSlider.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const userTypeReducer = userTypeSliderSlice.reducer;
