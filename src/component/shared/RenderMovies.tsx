import type { MoviesMapper } from "../../interfaces/MoviesMapper"

interface Props{
    count: number,
    movies: MoviesMapper[],
}

export const RenderMovies = ({count,movies }:Props) => {
  return (
      <>
      
      
       {
              movies.map(e => (
            e.poster_path&&(
            <div key={count++} className="moveiesCard">
                <div>
                    <img className="imgCard" src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt="" />
                </div>
                <div className="divBoddy">
                   <p >{e.original_title}</ p> 
                    <p >Released: {e.release_date.toString()}</ p> 
                  
                    </div>
              
            
                      </div>
            )
            ))
        
      }
      
      
      
      </>
  )
}
