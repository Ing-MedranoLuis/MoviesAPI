import { all } from "../axios/AxiosGetAll";
import type { MoviesInterface } from "../interfaces/MoviesInterface";
import type { MoviesMapper } from "../interfaces/MoviesMapper"



export const MovieResponse =async (query:string):Promise<MoviesMapper[]> => {
 
    const movieResponse = await all<MoviesInterface>({
        params: {
        query:query
    }});
 
    return movieResponse.data.results.map((values) => ({
        
        original_title: values.original_title,
    overview: values.overview,
        release_date: values.release_date,
        poster_path: values.poster_path,
       popularity:values.popularity,


    }))
}
