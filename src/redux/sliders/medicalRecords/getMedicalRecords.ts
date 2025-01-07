/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMedicalRecordsById } from "../../../shared/_architecture/application/getMedicalRecordsById";

interface IProps {
  id: string;
}

export const getMedicalRecords = createAsyncThunk('get/medicalRecordSlider', async ({id}:IProps):Promise<any> => {
  const response = await getMedicalRecordsById({id});
  return response;
})