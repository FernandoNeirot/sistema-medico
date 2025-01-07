/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserType } from "../../../shared/_architecture/application/getUserType";

export const getUserTypeSlider = createAsyncThunk('get/userTypeSlider', async ():Promise<any> => {
  const response = await getUserType();
  return response;
})