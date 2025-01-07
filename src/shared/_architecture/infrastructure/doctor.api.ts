import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/configFirebase";
import { IDoctor, ResponseGetDoctor } from "../domain/doctor.interfaces";

interface IProps{
  id:string;
}

export const apiGetDoctor = async ({id}:IProps): Promise<ResponseGetDoctor> => {
  try {
    const array: IDoctor[] = [];
    const q = query(collection(db, "DOCTORS"),where("id", "==", id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data as IDoctor);
    });
    if (array.length === 0) {
      return {
        data: null,
        error: { isError: true, status: 404, message: "Error al traer datos del doctor" },
      };
    }
    return { data: array[0], error: null };
  } catch (e) {
    console.log("error", e);
    return {
      data: null,
      error: { isError: true, status: 404, message: "Error al traer datos del doctor" },
    };
  }
};
