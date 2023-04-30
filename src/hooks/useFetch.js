import { useEffect, useState } from "react";

export function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    lesson: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    // Cuando se vuelva a lanzar el useEffect ponemos el isLoading en true
    // ya que se quedara en falso cuando se lance por primera vez
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      lesson: data.lesson,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  // Creamos esto así para que sea más legible
  return {
    data: state.data,
    lesson: state.lesson,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
