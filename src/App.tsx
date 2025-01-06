import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/presentation";
import LoginPage from "./pages/login/presentation";
import HeaderComponent from "./shared/components/header";
import DoctorPage from "./pages/doctor/presentation";
import PacientPage from "./pages/pacient/presentation";
import CalendarPage from "./pages/calendar/presentation";
import AdministrationPage from "./pages/admin/presentation";
function App() {
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          {/* Estas pagina deben ser protegidas */}
          <Route path="doctor" element={<DoctorPage />} />
          <Route path="admin" element={<AdministrationPage />} />
          <Route path="pacient" element={<PacientPage />} />
          <Route path="calendar" element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
