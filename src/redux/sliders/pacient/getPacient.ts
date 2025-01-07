/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPacientById } from "../../../shared/_architecture/application/getPacientById";

interface IProps {
  id: string;
}

export const getPacient = createAsyncThunk('get/pacientSlider', async ({id}:IProps):Promise<any> => {
  const response = await getPacientById({id});
  return response;
})