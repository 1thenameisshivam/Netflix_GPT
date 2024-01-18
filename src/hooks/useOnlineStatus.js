import { useEffect, useState } from "react"

export const useOnlineStatus=()=>{
      
    const [status,setStatus]=useState(true);

      useEffect(()=>{
         
         window.addEventListener("online",()=>{setStatus(true)});

         window.addEventListener("offline",()=>{setStatus(false)});

      },[])

      return status;

}

