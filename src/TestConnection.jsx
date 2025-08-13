import { useEffect, useState } from "react";

export default function TestConnection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/ping')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>Test conexión con Laravel</h1>
      {data ? <pre>{JSON.stringify(data)}</pre> : <p>Cargando...</p>}
    </div>
  );
}
