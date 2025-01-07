import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../utils/configFirebase";
import { IUserType, ResponseGetUserType } from "../domain/userType.interfaces";

export const apiGetUserType = async (): Promise<ResponseGetUserType> => {
  try {
    const array: IUserType[] = [];
    const q = query(collection(db, "USER_TYPES"));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data as IUserType);
    });
    if (array.length === 0) {
      return {
        data: null,
        error: { isError: true, status: 401, message: "Error de credenciales" },
      };
    }
    return { data: array, error: null };
  } catch (e) {
    console.log("error", e);
    return {
      data: null,
      error: { isError: true, status: 404, message: "Error al recuperar datos" },
    };
  }
};
