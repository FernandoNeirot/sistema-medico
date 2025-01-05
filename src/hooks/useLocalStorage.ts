import { useEffect, useState } from "react";
import { LOCAL_STORAGE } from "../shared/utils/localStorage";

interface ILocalStorage {
  key: string;
}

const useLocalStorage = ({ key }: ILocalStorage) => {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    const handleStorageChange = () => {
      const response = LOCAL_STORAGE.get(key);
      setValue(response);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return {
    value,
  };
};

export default useLocalStorage;
