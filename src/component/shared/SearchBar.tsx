import type React from "react";

interface Props{
    query: string;
    inputChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
    sendQuery:(query:string)=>void
}
export const SearchBar = ({query,inputChange,sendQuery }:Props) => {
  const enterPressed = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    e.key==='Enter'&&  sendQuery(query)

 }
  return (
      <>
      
          <div >
        <div className="divSearchBar">
          <div>
               <input type="text"
                 name="query"
                 value={query}
              onChange={inputChange}
              placeholder="Search Movies"
              />
            <a  onKeyDown={(e)=>enterPressed(e)} onClick={() => sendQuery(query)}><i className="bi bi-search"></i></a>
            </div>
         </div>
        </div>
      
      
      
      
      
      
      
      
      
      
      </>
  )
}
