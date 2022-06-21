import { useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";


export function useSearch (){
    const {search} = useLocation()
    return useMemo(()=> new URLSearchParams (search,[search]))
}
export default useSearch

//get
//delete
//set