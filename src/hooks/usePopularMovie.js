import { TMDB_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'


export const usePopularMovie=()=>{
    const dispatch =useDispatch()

    useEffect(()=>{
      tmdb_popular();
    },[])
  
    const tmdb_popular= async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular',TMDB_OPTIONS);
      const jsondata=await data.json();
      dispatch(addPopularMovies(jsondata.results));
    }
}