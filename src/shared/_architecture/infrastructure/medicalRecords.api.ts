import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/configFirebase";
import { IMedicalRecord, ResponseGetMedicalRecord } from "../domain/medicalRecord.interfaces";

interface IProps{
  id:string;
}

export const apiGetMedicalRecordsData = async ({id}:IProps): Promise<ResponseGetMedicalRecord> => {
  try {
    const array: IMedicalRecord[] = [];
    const q = query(collection(db, "MEDICAL_RECORDS"),where("pacientId", "==", id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data as IMedicalRecord);
    });
    if (array.length === 0) {
      return {
        data: null,
        error: { isError: true, status: 404, message: "Error al traer datos del Historial medico" },
      };
    }
    return { data: array, error: null };
  } catch (e) {
    console.log("error", e);
    return {
      data: null,
      error: { isError: true, status: 404, message: "Error al traer datos del Historial medico" },
    };
  }
};
