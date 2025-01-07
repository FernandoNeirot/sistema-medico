import { IError } from "./error.interface";

export interface IUserType{
  id:string;
  description:string;
}

export interface ResponseGetUserType {
  data: IUserType[] | null;
  error: IError | null;
}