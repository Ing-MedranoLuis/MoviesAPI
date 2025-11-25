import axios from 'axios'


 export  const all=await axios.create( {
        baseURL: 'https://api.themoviedb.org/3/search/movie',
        params:{
            
          api_key:'149c551582bd7c55b066cc4f16ea9473',
         
        }
   })
   
