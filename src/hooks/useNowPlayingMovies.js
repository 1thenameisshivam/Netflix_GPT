import { TMDB_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'


export const useNowPlayingMovies=()=>{
    const dispatch =useDispatch()

    useEffect(()=>{
      tmdb_now_playing();
    },[])
  
    const tmdb_now_playing= async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',TMDB_OPTIONS);
      const jsondata=await data.json();
      dispatch(addNowPlayingMovies(jsondata.results));
    }
}