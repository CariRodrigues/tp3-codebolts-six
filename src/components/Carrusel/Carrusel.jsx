import React, { useState, useEffect } from "react";
import "@/components/Carrusel/Carrusel.css";
import Title from "@/components/Title/Title";

export default function Carrusel({
  folder,
  dataPath,
  title,
  conocidos,
  meGustaria,
  verbos, // { pasado, presente, futuro }
}) {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!dataPath) return;
    fetch(dataPath)
      .then((res) => res.json())
      .then((jsonData) => setItems(jsonData))
      .catch((err) => console.error("Error cargando JSON:", err));
  }, [dataPath]);

  if (!items.length) return <p>Cargando...</p>;

  const siguiente = () => setIndex((prev) => (prev + 1) % items.length);
  const anterior = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  const itemActual = items[index];

  // Determinar categoría según arrays
  let categoria;
  if (conocidos.includes(itemActual.id)) categoria = verbos.pasado;
  else if (meGustaria.includes(itemActual.id)) categoria = verbos.futuro;
  else categoria = verbos.presente;

  return (
    <div className="container-carrusel">
      <div style={{ textAlign: "center" }}>
        <Title title={title} />
      </div>

      <div className="carrusel">
        <button className="btn prev" onClick={anterior}>
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <div className="carrusel-imagenes">
          <img
            src={`/assets/${folder}/${itemActual.img}`}
            alt={itemActual.titulo || "Imagen"}
          />
          <div className="caption">
            {itemActual.titulo && <h3>{itemActual.titulo}</h3>}
            {itemActual.subtitulo && <p>{itemActual.subtitulo}</p>}
            <p style={{ fontStyle: "italic", color: "#e5ff4fff" }}>{categoria}</p>
          </div>
        </div>

        <button className="btn next" onClick={siguiente}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

