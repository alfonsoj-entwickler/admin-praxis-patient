import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">List of patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Managent your{" "}
            <span className="text-indigo-600 font-bold">
              Patients and Dates
            </span>
          </p>
          {patients.map((patient) => (
            <PatientDetails key={`list-${patient.id}`} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are not patients
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            begin to add more patient
            <span className="text-indigo-600 font-bold"> and all ist here</span>
          </p>
        </>
      )}
    </div>
  );
}
