import { useEffect, useState } from "react";
import { getDogs } from "../api";

export const useGetDogs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dogData, setDogData] = useState([]);

  const functionGetDogs = async () => {
    try {
      setLoading(true);
      const response = await getDogs();
      setDogData(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    functionGetDogs();
  }, []);

  return {
    dogData,
    error,
    loading
  };
};
