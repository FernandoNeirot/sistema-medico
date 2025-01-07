import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/configFirebase";
import { IPacient, ResponseGetPacient } from "../domain/pacient.interfaces";

interface IProps{
  id:string;
}

export const apiGetPacientData = async ({id}:IProps): Promise<ResponseGetPacient> => {
  try {
    const array: IPacient[] = [];
    const q = query(collection(db, "PACIENTS"),where("userId", "==", id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data as IPacient);
    });
    if (array.length === 0) {
      return {
        data: null,
        error: { isError: true, status: 404, message: "Error al traer datos del paciente" },
      };
    }
    return { data: array[0], error: null };
  } catch (e) {
    console.log("error", e);
    return {
      data: null,
      error: { isError: true, status: 404, message: "Error al traer datos del paciente" },
    };
  }
};
