/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPacient } from "../../../redux/sliders/pacient/getPacient";
import { IPacient } from "../../../shared/_architecture/domain/pacient.interfaces";
import { getMedicalRecords } from "../../../redux/sliders/medicalRecords/getMedicalRecords";
import { IMedicalRecord } from "../../../shared/_architecture/domain/medicalRecord.interfaces";
import moment from "moment";
import { getDoctor } from "../../../redux/sliders/doctor/getDoctor";

const PacientPage = () => {
  const dispatch = useDispatch<any>();
  const user = useSelector((state: any) => state.user);
  const pacientData = useSelector((state: any) => state.pacient);
  const pacient: IPacient = pacientData.data;
  
  const medicalRecord: IMedicalRecord[] = useSelector(
    (state: any) => state.medicalRecord.data
  );
  useEffect(() => {
    dispatch(getPacient({ id: user.id }));
  }, [user]);

  useEffect(() => {
    if (pacient && pacient.userId === user.id)
      dispatch(getMedicalRecords({ id: pacient.id }));
  }, [pacientData]);

  useEffect(() => {
    //TODO: el  get dortor debe de poder recibir un array de ids, y responder todos
    if (medicalRecord && medicalRecord.length>0)
      dispatch(getDoctor({ id: medicalRecord[0].doctorId }));
  }, [medicalRecord]);

  return (
    <>
      {pacientData.loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center" />
      ) : (
        <div
          className="bg-white py-2"
          style={{
            minHeight: "calc(100vh - 115px)",
          }}
        >
          <div className="text-2xl border-b-2 p-4 bg-slate-200">{`Paciente: ${pacient.lastName}, ${pacient.name}`}</div>
          <div className="w-full flex justify-between py-4 px-10">
            <p className="w-[50%] text-left">
              <b>Nombre completo: </b>
              {`${pacient.lastName}, ${pacient.name}`}
            </p>
            <p className="w-[50%] text-left">
              <b>DNI: </b>
              {pacient.dni}
            </p>
          </div>
          <div className="w-full flex justify-between py-4 px-10">
            <p className="w-[50%] text-left">
              <b>Fecha nacimiento: </b>
              {moment(pacient.birthDate).format("DD/MM/YYYY")}
            </p>
            <p className="w-[50%] text-left">
              <b>Genero: </b>
              {pacient.gender}
            </p>
          </div>
          <div className="w-full flex justify-between py-4 px-10">
            <p className="w-[50%] text-left">
              <b>Direccion: </b>
              {pacient.address}
            </p>
            <p className="w-[50%] text-left">
              <b>Telefono: </b>
              {pacient.phone}
            </p>
          </div>
          <div className="w-full flex justify-between py-4 px-10">
            <p className="w-[50%] text-left">
              <b>Ocupacion: </b>
              {pacient.occupation}
            </p>
            <p className="w-[50%] text-left">
              <b>Obra social: </b>
              {pacient.medicalService}
            </p>
          </div>
          <div className="w-full flex justify-between py-4 px-10">
            <p className="w-full text-left">
              <b>Alergias: </b>
              {pacient.allergys}
            </p>
          </div>
          <div className="w-full flex justify-between py-4 px-10">
            <p className="w-full text-left">
              <b>Observaciones: </b>
              {pacient.observations}
            </p>
          </div>
          <div className="text-2xl border-2 p-4 bg-slate-200">
            Historial clinico
          </div>
          {medicalRecord &&
            medicalRecord.map((record) => (
              <div key={record.id} className="w-full border-2 p-4">
                <div className="w-full flex justify-between py-4 px-10">
                  <p className="w-[50%] text-left">
                    <b>Medico: </b>
                    {record.doctorId}
                  </p>
                  <p className="w-[50%] text-left">
                    <b>Fecha visita: </b>
                    {moment(record.visitDate).format("DD/MM/YYYY HH:mm")}
                  </p>
                </div>        
                <div className="w-full flex justify-between py-4 px-10">
                  <p className="w-full text-left">
                    <b>Sintomas: </b>
                    {record.symptoms}
                  </p>
                </div>
                <div className="w-full flex justify-between py-4 px-10">
                  <p className="w-full text-left">
                    <b>Diagnostico: </b>
                    {record.medicalDiagnosis}
                  </p>
                </div>
                <div className="w-full flex justify-between py-4 px-10">
                  <p className="w-full text-left">
                    <b>Prescripcion: </b>
                    {record.prescription}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default PacientPage;
