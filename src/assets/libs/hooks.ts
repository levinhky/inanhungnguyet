import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the timeout if the value changes before the delay elapses
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
