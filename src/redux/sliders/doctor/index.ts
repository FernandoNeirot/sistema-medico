/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { getDoctor } from "./getDoctor";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const doctorSlice = createSlice({
  name: "get/doctorSlider",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getDoctor.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getDoctor.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = action.payload.error;
    });
    builder.addCase(getDoctor.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const doctorReducer = doctorSlice.reducer;
