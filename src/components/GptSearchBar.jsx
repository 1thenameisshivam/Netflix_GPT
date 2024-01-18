import React, { useRef } from 'react'
import language from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { TMDB_OPTIONS } from '../utils/constants'
import { setMovieName,setMovieSearch } from '../utils/gptSlice'
const GptSearchBar = () => {
  const langkey=useSelector(store=>store?.config?.lang);
  const searchval=useRef(null);
  const dispatch=useDispatch();
  const tmdbmoviesearch=async(movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', TMDB_OPTIONS);
      const json= await data.json();
      return json.results;
  }


  const handleclick=async()=>{

       const query="assume you are a movie reccomendation system suggest me movie for the query:"+ searchval.current.value + ". only give me 5 movie name, cumma saperated, like the example result given ahade. example result:gadar,aquaman,ironman,leo,animal. only name"

      const gptresult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
      
      const content=gptresult.choices[0].message.content.split(",")
      dispatch(setMovieName(content))

      const searchdata=content.map((movie)=>tmdbmoviesearch(movie));
      
      const searchresult = await Promise.all(searchdata)
      dispatch(setMovieSearch(searchresult))
  }

  return (
    <div className=' pt-[40%] md:pt-[10%] flex p-2 md:p-0 justify-center' >
        <form className=' bg-black w-full md:w-1/2  grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()} >
            <input ref={searchval} className='col-span-9 m-4 p-2 rounded' type="text" placeholder={language[langkey].placeholder}></input>
            <button onClick={handleclick} className='col-span-3 m-4 p-2 rounded text-white bg-red-700' >{language[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar