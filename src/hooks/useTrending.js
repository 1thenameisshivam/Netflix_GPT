import { TMDB_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'


export const useTrending=()=>{
    const dispatch =useDispatch()

    useEffect(()=>{
      tmdb_trending();
    },[])
  
    const tmdb_trending= async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated',TMDB_OPTIONS);
      const jsondata=await data.json();
      dispatch(addTrendingMovies(jsondata.results));
    }
}