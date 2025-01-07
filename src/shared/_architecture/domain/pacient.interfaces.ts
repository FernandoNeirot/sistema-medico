import { IError } from "./error.interface";

export interface IPacient{
  id:string;
  dni:string;
  address:string;
  allergys:string;
  birthDate:string;
  gender:string;
  lastName:string;
  medicalService: string;
  name:string;
  observations:string;
  occupation:string;
  phone:string;
  userId:string;
}

export interface ResponseGetPacient {
  data: IPacient | null;
  error: IError | null;
}