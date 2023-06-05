import { useEffect, useState } from "react";


export function useFetch<T>(url:string){
    const [data, setData] = useState<T>();

    const [isLoading, setLoading] = useState(true);
    
    const [error, setError] = useState(false);


    useEffect(() => {
        if(!url) return 
        
            async function fetchData() {
                try{
                    const response = await fetch(url);

                    const data = await response.json();

                    setData(data);
                }catch(error){
                    console.log(error);
                    
                    setError(true);
                }finally{
                    setLoading(false);
                }
            }
        fetchData()
    }, [url])

    return { isLoading, data, error }
}