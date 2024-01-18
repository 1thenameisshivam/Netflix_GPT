import { TMDB_OPTIONS} from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailer } from '../utils/moviesSlice'
import { useEffect } from 'react'
export const trailer=(id)=>{
    const dispatch=useDispatch();
  
    useEffect(()=>{
      trailerfunc();
    },[])
    
    const trailerfunc = async ()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,TMDB_OPTIONS)
      const jsondata= await data.json();
      const tvedios=(jsondata.results).filter(v=>v.type==="Trailer")
      const tvedio=tvedios.length? tvedios[0]:jsondata.results[0];
      dispatch(addTrailer(tvedio));
      
    }
}