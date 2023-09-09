import { useState, useEffect, useRef } from 'react';

function useDebouncedState<T>(
  initialValue: T,
  delay: number
): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const [state, setState] = useState<T>(initialValue);
  const [debouncedState, setDebouncedState] = useState<T>(initialValue);

  const handle = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (handle.current) {
      clearTimeout(handle.current);
    }

    handle.current = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => {
      if (handle.current) {
        clearTimeout(handle.current);
      }
    };
  }, [state, delay]);

  return [state, setState, debouncedState];
}

export default useDebouncedState;
