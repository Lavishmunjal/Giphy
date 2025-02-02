import { createContext, useContext, useState } from "react";
import {GiphyFetch} from "@giphy/js-fetch-api"

const gifContext = createContext();
const Context = ({children})=>{
    const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favorites, setFavorites] = useState([]);


    const gf  = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
    return <gifContext.Provider value={{gf, gifs,setGifs, filter, setFilter, favorites}}>
        {children}
    </gifContext.Provider>

}

export const Gifstate = ()=>{
    return useContext(gifContext)
}
export default Context;