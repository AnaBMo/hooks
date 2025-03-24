import { useEffect, useState } from "react";

function UseFetchCharacter({ url }) {

  const [character, setCharacter] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');

  const fetchApi = async (fetchUrl) => {
    if (!fetchUrl) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error("Error al obtener al personaje");
      }
      const result = await response.json();
      setCharacter(result);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // useEffect: se lanza automáticamente al renderizar el componente para escuchar cambios 
  // (no estamos llamando a la función, se ejecuta según el array de dependencia)
  // últimos minutos de clase S19-U1
  useEffect(() => {
    fetchApi(url);
  }, [url]); // array de dependencia: hace que la función se ejecute cuando lo que hay dentro tiene un cambio

  return { character, loading, error };

};

export default UseFetchCharacter;