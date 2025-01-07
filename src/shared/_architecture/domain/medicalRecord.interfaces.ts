import { IError } from "./error.interface";

export interface IMedicalRecord{
  id: string;
  doctorId: string;
  medicalDiagnosis: string;
  pacientId: string;
  prescription: string;
  symptoms: string;
  visitDate: string;
}

export interface ResponseGetMedicalRecord {
  data: IMedicalRecord[] | null;
  error: IError | null;
}