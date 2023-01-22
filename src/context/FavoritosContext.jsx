import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

export default function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);
 
  const addFavoritos = (id,imagen,desc) => {
    /* cargar en favoritos solo una vez aunque la seleccione muchas veces*/
    let ind = favoritos.findIndex((ele) => ele.id == id);
    if (ind==-1)
    {
      setFavoritos([...favoritos, {id,imagen,desc}]);
    }

  };

 
 
  return (
     <FavoritosContext.Provider value={{ favoritos, addFavoritos}}>
      {children}
      </FavoritosContext.Provider>
  );
}

// mini hook
export const useFavoritosContext = () => useContext(FavoritosContext);
