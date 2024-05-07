import { useSelector } from "react-redux";
import MovieBackground from "./MovieBackground";
import MovieTitle from "./MovieTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="w-screen h-screen ">
      <MovieBackground id={id} />
      <MovieTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
