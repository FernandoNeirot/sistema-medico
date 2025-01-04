import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/presentation";
import LoginPage from "./pages/login/presentation";
import HeaderComponent from "./shared/components/header";
function App() {
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
