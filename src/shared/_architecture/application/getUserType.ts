import { ResponseGetUserType } from "../domain/userType.interfaces";
import { apiGetUserType } from "../infrastructure/userType.api";

export const getUserType = async (): Promise<ResponseGetUserType> => {
  const response = await apiGetUserType();
  //-----------------------------------------------------------------------------------------------
  // Se agrega alguna logica de negocio sobre la respuesta para enviarle a la capa de presentación
  //-----------------------------------------------------------------------------------------------
  return response;
};