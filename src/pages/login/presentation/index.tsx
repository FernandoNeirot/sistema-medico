 
import { useEffect, useState } from 'react'
import InputComponent from '../../../shared/components/form/Input'
import Loading from '../../../shared/components/form/loading';
import ButtonComponent from '../../../shared/components/form/button';
import useLogin from '../application/useLogin';
import { LOCAL_STORAGE } from '../../../shared/utils/localStorage';

const LoginPage = () => {
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const { isError, loading, login, isAuth } = useLogin();
  

  const handleLogin = async () => {
    login(user, pass);
  };
  useEffect(() => {
    if (isAuth) 
      window.location.assign("/");
    
  }, [isAuth]);

  useEffect(() => {
    if(LOCAL_STORAGE.get(LOCAL_STORAGE.constants.JWT))
      window.location.assign("/");
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center h-screen mx-5" style={{
      backgroundImage: 'url("https://images3.alphacoders.com/101/1010294.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 0,
    }}>
      <div className="relative w-full max-w-[400px] min-h-[200px] border-spacing-0 border rounded-2xl shadow-2xl  border-blue-800 p-2 bg-blue-950">
        {loading && <Loading />}
        <p className=" text-center text-white p-5">Ingreso al sistema</p>
        <InputComponent
          name="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"
        />
        <InputComponent
          name="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Clave"
        />
        {isError && (
          <p className=" w-full text-center text-red-400 py-2">
            Error de credenciales
          </p>
        )}
        <div className="flex justify-center mt-5 mb-2">
          <ButtonComponent
            onClick={() => (!loading ? handleLogin() : {})}
            text="Ingresar"
            isLoading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage