import { useState, useEffect } from "react";

function useLoading(initialState = true, delay = 1000) {
  const [isLoading, setIsLoading] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, [delay]);

  return isLoading;
}

export default useLoading;
