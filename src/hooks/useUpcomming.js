import { TMDB_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcommingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'


export const useUpcomming=()=>{
    const dispatch =useDispatch()

    useEffect(()=>{
      tmdb_trending();
    },[])
  
    const tmdb_trending= async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming',TMDB_OPTIONS);
      const jsondata=await data.json();
      dispatch(addUpcommingMovies(jsondata.results));
    }
}