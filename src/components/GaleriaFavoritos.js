import { useFavoritosContext } from "../context/FavoritosContext";
export default function GaleriaFavoritos() {
  const { favoritos } = useFavoritosContext();

  return (
     <div className="galeria grid-columns-5 p-3">
      {favoritos.map((item) => (
         <img key={item.id} className="foto" src={item.imagen}  alt={item.desc}  />  
      ))}
    </div>
  );
}

 