import { useNavigate } from "react-router";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { LOCAL_STORAGE } from "../../utils/localStorage";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const {value:jwt}= useLocalStorage({key:LOCAL_STORAGE.constants.JWT})
  const handleChangePage = (page: string) => {
    navigate(page);
  };

  const handleLogout = () => {
    LOCAL_STORAGE.remove(LOCAL_STORAGE.constants.JWT);
    window.location.reload();
  }

  return (
    <>
      {location.pathname.includes("login") ? null : (
        <div className="w-full bg-gray-800 text-white p-4">
          <button
            onClick={() => handleChangePage("")}
            className="mr-10 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Home
          </button>
          {
            jwt ?
            <>
             <button
            onClick={() => handleChangePage("calendar")}
            className="mr-10 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Turnos
          </button>
            <button
            onClick={() => handleChangePage("doctor")}
            className="mr-10 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Page Medico
          </button>
            <button
            onClick={() => handleChangePage("pacient")}
            className="mr-10 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Page Paciente
          </button>
          <button
            onClick={() => handleChangePage("admin")}
            className="mr-10 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Administracion
          </button>
            <button
            onClick={handleLogout}
            className="mr-10 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Salir
          </button>
            </>
            :
          <button
            onClick={() => handleChangePage("login")}
            className="mr-10 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Ingresar 
          </button>
          }
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
