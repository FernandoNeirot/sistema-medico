import { IError } from "./error.interface";

export interface IDoctor{
  id:string;
  dni:string;
  address:string;
  birthDate:string;
  gender:string;
  lastName:string;
  name:string;
  specialistId:string;
  phone:string;
  userId:string;
}

export interface ResponseGetDoctor {
  data: IDoctor | null;
  error: IError | null;
}