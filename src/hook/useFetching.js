import { useState } from "react";

export const useFetching = (callback) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    } 
  }
  
  return { fetchData, error, isLoading }
}