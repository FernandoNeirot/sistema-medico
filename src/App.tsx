/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/presentation";
import LoginPage from "./pages/login/presentation";
import HeaderComponent from "./shared/components/header";
import DoctorPage from "./pages/doctor/presentation";
import PacientPage from "./pages/pacient/presentation";
import CalendarPage from "./pages/calendar/presentation";
import AdministrationPage from "./pages/admin/presentation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTypeSlider } from "./redux/sliders/userType/getUserType";
import PrivateRoute from "./shared/components/PrivateRoute";
function App() {
  const dispatch = useDispatch<any>();
  const userType = useSelector((state: any) => state.userType);

  useEffect(() => {
    if (userType.data.length === 0) dispatch(getUserTypeSlider());
  }, []);

  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="doctor"
            element={
              <PrivateRoute>
                <DoctorPage />
              </PrivateRoute>
            }
          />
          <Route
            path="admin"
            element={
              <PrivateRoute>
                <AdministrationPage />
              </PrivateRoute>
            }
          />
          <Route
            path="pacient"
            element={
              <PrivateRoute>
                <PacientPage />
              </PrivateRoute>
            }
          />
          <Route
            path="calendar"
            element={
              <PrivateRoute>
                <CalendarPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
