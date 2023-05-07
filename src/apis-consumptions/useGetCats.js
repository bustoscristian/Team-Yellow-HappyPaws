import { useEffect, useState } from "react";
import { getCats } from "../api";

export const useGetCats = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [catData, setCatData] = useState([]);

  const functionGetCats = async () => {
    try {
      setLoading(true);
      const response = await getCats();
      setCatData(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    functionGetCats();
  }, []);

  return {
    catData,
    error,
    loading
  };
};
