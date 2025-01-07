import { useNavigate } from "react-router";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { LOCAL_STORAGE } from "../../utils/localStorage";
import { useEffect, useState } from "react";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { value: jwt } = useLocalStorage({ key: LOCAL_STORAGE.constants.JWT });
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const handleChangePage = (page: string) => {
    navigate(page);
  };

  const handleLogout = () => {
    LOCAL_STORAGE.remove(LOCAL_STORAGE.constants.JWT);
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsMenuFixed(true);
      } else {
        setIsMenuFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-50">      
      {location.pathname.includes("login") ? null : (<>
      {
        isMenuFixed && (
          <div className="h-[115px]"/>
        )
      }
        
        <div
          className={`${
            isMenuFixed ? "fixed animate-slide-down" : "relative animate-slide-up"
          } top-0 w-full bg-gray-800 text-white p-${isMenuFixed?"2":"4"} flex justify-between items-center cursor-pointer`}
          style={{ zIndex: 10 }}
        >
          <div
            className="flex items-center"
            onClick={() => handleChangePage("/")}
          >
            <img
              src="https://i.ibb.co/rQKsR3Y/6890395.png"
              alt="logo"
              className={`${isMenuFixed ? "h-8 w-8" : "h-20 w-20"}`}
            />
            <div className={`ml-4 ${isMenuFixed ? "flex space-x-2" : ""}`}>
              <p className="text-md font-bold">Sistema</p>
              <p className="text-md font-bold">Medico</p>
            </div>
          </div>
          <div>
            {jwt ? (
              <>
          <button
            onClick={() => handleChangePage("calendar")}
            className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Central de Turnos
          </button>
          <button
            onClick={() => handleChangePage("doctor")}
            className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Mis Pacientes
          </button>
          <button
            onClick={() => handleChangePage("pacient")}
            className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Mi Historial Medico
          </button>
          <button
            onClick={() => handleChangePage("admin")}
            className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Administracion
          </button>
          <button
            onClick={handleLogout}
            className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
          >
            Salir
          </button>
              </>
            ) : (
              <button
          onClick={() => handleChangePage("login")}
          className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
              >
          Ingresar
              </button>
            )}
          </div>
        </div></>
      )}
    </div>
  );
};

export default HeaderComponent;
