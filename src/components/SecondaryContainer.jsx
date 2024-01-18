import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className='z-10 bg-black text-white absolute w-full '>
        <div className='md:-mt-44 -mt-[500px]'>
        <Movielist title={"Now playing"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Trending"} movies={movies.trending} />
        <Movielist title={"Popular"} movies={movies.popular} />
        <Movielist title={"Upcoming"} movies={movies.upcomming} />
        <Movielist title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
        
    </div>
  )
}

export default SecondaryContainer