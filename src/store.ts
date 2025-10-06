import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { DraftPatient, Patient } from "./types";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: string) => void;
  getPatientById: (id: string) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeId: "",
        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
        },
        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
        },
        getPatientById: (id) => {
          set(() => ({
            activeId: id,
          }));
        },
        updatePatient: (data) => {
          set((state) => ({
            patients: [
              ...state.patients.filter(
                (patient) => patient.id !== state.activeId
              ),
              {
                id: state.activeId,
                ...data,
              },
            ],
            activeId: "",
          }));
        },
      }),
      {
        name: "patient-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
