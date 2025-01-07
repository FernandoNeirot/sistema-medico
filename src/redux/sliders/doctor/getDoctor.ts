/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoctorById } from "../../../shared/_architecture/application/getDoctorById";

interface IProps {
  id: string;
}

export const getDoctor = createAsyncThunk('get/doctorSlider', async ({id}:IProps):Promise<any> => {
  const response = await getDoctorById({id});
  return response;
})