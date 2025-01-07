/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { getMedicalRecords } from "./getMedicalRecords";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const medicalRecordSlice = createSlice({
  name: "get/medicalRecordsSlider",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getMedicalRecords.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getMedicalRecords.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = action.payload.error;
    });
    builder.addCase(getMedicalRecords.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const medicalRecordReducer = medicalRecordSlice.reducer;
