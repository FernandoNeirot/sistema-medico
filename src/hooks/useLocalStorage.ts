import { useEffect, useState } from "react";
import { LOCAL_STORAGE } from "../shared/utils/localStorage";

interface ILocalStorage {
  key: string;
}

const useLocalStorage = ({ key }: ILocalStorage) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const handleStorageChange2 = () => {
      const response = LOCAL_STORAGE.get(key);
      setValue(response);
    };

    // Handle initial load
    handleStorageChange2();

    window.addEventListener("storage", handleStorageChange2);

    return () => {
      window.removeEventListener("storage", handleStorageChange2);
    };
  }, [key]);
  return {
    value,
  };
};

export default useLocalStorage;
