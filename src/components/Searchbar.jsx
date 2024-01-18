import React, { useState } from 'react'
import { useRef } from 'react';
import { TMDB_OPTIONS} from '../utils/constants';
import Movielist from './Movielist';
import { useDispatch } from 'react-redux';
import { addSearchMovie } from '../utils/moviesSlice';
const Searchbar = () => {
  
    const searchval=useRef(null);
    const dispatch=useDispatch()
    const handleclick=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+searchval.current.value+'&include_adult=false&language=en-US&page=1', TMDB_OPTIONS);
        const json= await data.json();
        dispatch(addSearchMovie(json.results))
        
    }
     
  return (
        <div className=' pt-[40%] md:pt-[10%] flex p-2 md:p-0 justify-center' >
        <form className=' bg-black w-full md:w-1/2  grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()} >
            <input ref={searchval} className='col-span-9 m-4 p-2 rounded' type="text" placeholder="search your movies"></input>
            <button onClick={handleclick} className='col-span-3 m-4 p-2 rounded text-white bg-red-700' >Search</button>
        </form>
    </div>
  )
}

export default Searchbar