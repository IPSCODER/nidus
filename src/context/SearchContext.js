import axios from "axios";
import { createContext, useState, useEffect, useContext} from "react";
import { url } from "../utils/api";

 const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    let x = setTimeout(() =>{
        ( async () => {
            setLoading(true);
            try{
                const response = await axios.get(`${url}/planets/${searchQuery}`)
                setError(null)
                setResults(response.data?.results ? response.data.results : response.data);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }

        })()
    },400)
    
  },[searchQuery])


  return (
    <SearchContext.Provider value={{searchQuery,setSearchQuery,results,loading,error}} >
      {children}
    </SearchContext.Provider>
  );
};


export const useSearch = () => useContext(SearchContext);