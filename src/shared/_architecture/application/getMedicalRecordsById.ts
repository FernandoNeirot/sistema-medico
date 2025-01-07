import { ResponseGetMedicalRecord } from "../domain/medicalRecord.interfaces";
import { apiGetMedicalRecordsData } from "../infrastructure/medicalRecords.api";

interface IProps {
  id: string;
}

export const getMedicalRecordsById = async ({id}:IProps): Promise<ResponseGetMedicalRecord> => {
  const response = await apiGetMedicalRecordsData({id});
  //-----------------------------------------------------------------------------------------------
  // Se agrega alguna logica de negocio sobre la respuesta para enviarle a la capa de presentación
  if(response?.data)
    response.data = response.data?.sort((a, b) => b.visitDate.localeCompare(a.visitDate));
  //-----------------------------------------------------------------------------------------------
  return response;
};