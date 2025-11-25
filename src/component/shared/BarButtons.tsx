
import type { MoviesMapper } from "../../interfaces/MoviesMapper";

interface Prop { 
    sendQuery:(query:string)=>void
}
export let inernalCahe: Record<string, MoviesMapper[]>={};
export const BarButtons = ({ sendQuery }: Prop) => {
    

    const querys = ['Amor', 'Accion','romance','comedia','Terror']
    


  return (
      <div className="barDivButton">
          <ul>
              {querys.map((value, index) => (
                  <li className="liBar" onClick={()=>sendQuery(value)} value={value} key={index}>{ value.toLocaleUpperCase()}</li>


              )) }
             
          </ul>
    </div>
  )
}
