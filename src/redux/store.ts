import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./sliders/user";
import { userTypeReducer } from "./sliders/userType";
import { pacientReducer } from "./sliders/pacient";
import { medicalRecordReducer } from "./sliders/medicalRecords";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userType: userTypeReducer,
    pacient: pacientReducer,
    medicalRecord: medicalRecordReducer
  },
});
