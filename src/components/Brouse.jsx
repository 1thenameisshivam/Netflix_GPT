import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer"
import { usePopularMovie } from '../hooks/usePopularMovie';
import { useTrending } from '../hooks/useTrending';
import { useUpcomming } from '../hooks/useUpcomming';
import { useSelector } from 'react-redux';
import Gpt from './Gpt';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import OfflinePage from './OfflinePage';
const Brouse = () => {
  const toggle=useSelector(store=>store.gpt.toggleGpt);
   useNowPlayingMovies();
   usePopularMovie();
   useTrending();
   useUpcomming();
   const status=useOnlineStatus();
   if(status===false){
    return <OfflinePage/>
   }
  return (
    <div className='bg-black md:bg-inherit ' >
    <Header/>
    {
      toggle?<Gpt/>:
      <>
      <MainContainer/>
      <SecondaryContainer/>
     </>
    }
    
    
    </div>
  )
}

export default Brouse