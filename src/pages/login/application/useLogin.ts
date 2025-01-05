import { useState } from "react";
import { apiLoginFirebase } from "../infrastructure/user.api";
import { LOCAL_STORAGE } from "../../../shared/utils/localStorage";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false)

  const login = async (user: string, pass: string) => {
    setIsError(false);
    setLoading(true);
    try {
      const response = await apiLoginFirebase({ user, pass });
      
      if (!response || response?.error?.isError ) setIsError(true);
      else {
        LOCAL_STORAGE.set(LOCAL_STORAGE.constants.JWT, JSON.stringify(response.data) || "");
        setIsAuth(true);
      }
    } catch {
      setIsError(true);
      setIsAuth(false);
    }
    setLoading(false);
  };

  return {
    loading,
    isError,
    isAuth,
    login,
  };
};

export default useLogin;
