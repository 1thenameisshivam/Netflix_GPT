import { useSelector } from 'react-redux'
import {trailer} from "../hooks/useMovieTrailer"
const MovieBackground = ({id}) => {
  const maintrailer=useSelector(store=>store.movies?.trailer)
  trailer(id)
  
  return (
    <div className='overflow-hidden'>
    <iframe 
    className='w-screen aspect-video pt-32 scale-150 h-96 md:h-auto md:pt-0  md:scale-150 '
     src={"https://www.youtube.com/embed/"+maintrailer?.key+"?&autoplay=1&mute=1&controls=0&loop=1"}
     title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default MovieBackground