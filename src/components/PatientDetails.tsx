import { type Patient } from "../types/index";
import PatientDetaildItem from "./PatientDetaildItem";
import { usePatientStore } from "../store";
import { toast } from "react-toastify";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const { id, name, caretaker, email, date, symptoms } = patient;
  const { deletePatient, getPatientById } = usePatientStore();
  const handleClickDelete = () => {
    deletePatient(id);
    toast("Patient deleted!", { type: "error" });
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetaildItem label="ID" data={id} />
      <PatientDetaildItem label="Name" data={name} />
      <PatientDetaildItem label="Caretaker" data={caretaker} />
      <PatientDetaildItem label="Email" data={email} />
      <PatientDetaildItem label="Date" data={date.toString()} />
      <PatientDetaildItem label="Symptoms" data={symptoms} />
      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg transition-colors"
          onClick={() => getPatientById(id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg transition-colors"
          onClick={() => handleClickDelete()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
