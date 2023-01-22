import "../assets/css/galeria.css";
import { useEffect, useState } from "react";
import { useFavoritosContext } from "../context/FavoritosContext";
import { escapeLeadingUnderscores } from "typescript";

export default function Home() {

const [home, setHome] = useState([]);
const { addFavoritos } = useFavoritosContext();
const { favoritos } = useFavoritosContext();
 

const getData = async () => {
  const res = await fetch("fotos.json");
  const data = await res.json();
  setHome(data.photos);
};

 

useEffect(() => {  getData();}, []);

const seleccionado = (e,item) =>{
     let colorAct = e.target.style.backgroundColor;
     let ind = favoritos.findIndex((ele) => ele.id == item.id);
     if (ind==-1)
     {
       e.target.style.backgroundColor  = 'red';
       addFavoritos( item.id, item.src.tiny, item.alt);
     }
     else
     {
          if (colorAct === 'white')
          { 
            e.target.style.backgroundColor  = 'red';
            addFavoritos( item.id, item.src.tiny, item.alt);
          }
          else 
          {
            e.target.style.backgroundColor = 'white';
              
          }
      }
      colorAct = e.target.style.backgroundColor;
 
 
}



return (
  <div className="galeria  grid-columns-5 p-3 ">
          {home.map((item) => {
               let ind = favoritos.findIndex((ele) => ele.id == item.id);
               if (ind==-1)
               {
                return (
                      <div key={item.id} className="grid-container" >
                              <button className="blanco" onClick={(e) => { seleccionado(e,item)  }}>Like</button>
                              <img   key={item.id}   src={item.src.tiny}  alt={item.alt}  /> 
                      </div>

                      );
                    }
                else
                {
                  return (
                    <div key={item.id} className="grid-container" >
                            <button className="rojo" onClick={(e) => { seleccionado(e,item)  }}>Like</button>
                            <img   key={item.id}   src={item.src.tiny}  alt={item.alt}  /> 
                    </div>

                    );
                }
              })}
  </div>

);}
 