import { ResponseGetDoctor } from "../domain/doctor.interfaces";
import { apiGetDoctor } from "../infrastructure/doctor.api";

interface IProps {
  id: string;
}

export const getDoctorById = async ({id}:IProps): Promise<ResponseGetDoctor> => {
  const response = await apiGetDoctor({id});
  //-----------------------------------------------------------------------------------------------
  // Se agrega alguna logica de negocio sobre la respuesta para enviarle a la capa de presentación
  //-----------------------------------------------------------------------------------------------
  return response;
};