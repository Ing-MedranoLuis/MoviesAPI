import React, { useState } from "react";

import type { MoviesMapper } from "./interfaces/MoviesMapper";
import { MovieResponse } from "./response/MovieResponse";
import { SearchBar } from "./component/shared/SearchBar";
import { RenderMovies } from "./component/shared/RenderMovies";
import { BarButtons, inernalCahe } from "./component/shared/BarButtons";


let count = 1;
export const MoviesApp = () => {
  const [movies, setMovies] = useState<MoviesMapper[]>([])
  const [query, setQuery] = useState<string>('');



  const sendQuery = async (query:string) =>
  {
   
   
    if (!inernalCahe[query]) {
       const movie = await MovieResponse(query);
      inernalCahe[query] = movie;
      return setMovies(movie)
    } else {
      return setMovies(inernalCahe[query])
    }
    
   
        
             
      }
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
      setQuery(e.target.value);
   
    }

  return (
    <div className="container">
      <header></header>
   <div className="ccontainer">
        <SearchBar query={query} inputChange={inputChange} sendQuery={sendQuery} />
        <BarButtons sendQuery={sendQuery} />
        <div className="sub-container">
          <RenderMovies count={count} movies={movies}/>
        </div>
        </div>
      <footer >

      </footer>
     </div>
  )
}


