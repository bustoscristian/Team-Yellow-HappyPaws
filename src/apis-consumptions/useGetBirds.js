import { useEffect, useState } from "react";
import { getBirds } from "../api";

export const useGetBirds = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [birdData, setBirdData] = useState([]);

  const functionGetBirds = async () => {
    try {
      setLoading(true);
      const response = await getBirds();
      setBirdData(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    functionGetBirds();
  }, []);

  return {
    birdData,
    error,
    loading
  };
};
