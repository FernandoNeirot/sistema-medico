import { ResponseGetPacient } from "../domain/pacient.interfaces";
import { apiGetPacientData } from "../infrastructure/pacient.api";

interface IProps {
  id: string;
}

export const getPacientById = async ({id}:IProps): Promise<ResponseGetPacient> => {
  const response = await apiGetPacientData({id});
  //-----------------------------------------------------------------------------------------------
  // Se agrega alguna logica de negocio sobre la respuesta para enviarle a la capa de presentación
  //-----------------------------------------------------------------------------------------------
  return response;
};