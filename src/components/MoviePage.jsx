import { useEffect } from "react";
import { IMG_CDN, TMDB_OPTIONS } from "../utils/constants";
import { useParams } from "react-router-dom";
import { addMovieData, addMovieVedioData } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

const MoviePage = () => {
  const dispatch = useDispatch();
  const { movieid } = useParams();
  useEffect(() => {
    moviedata();
  }, []);

  async function moviedata() {
    const data1 = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieid + "?language=en-US",
      TMDB_OPTIONS
    );
    const json1 = await data1.json();
    dispatch(addMovieData(json1));
    const data2 = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      TMDB_OPTIONS
    );
    const json2 = await data2.json();
    dispatch(addMovieVedioData(json2));
  }

  const data = useSelector((store) => store.movies?.movieData);
  const vdata = useSelector((store) => store.movies?.movieVedioData);
  if (vdata === null) return;
  if (!data) return <Loader />;

  const {
    poster_path,
    title,
    overview,
    genres,
    production_companies,
    release_date,
    runtime,
    status,
  } = data;

  return (
    <div className="w-screen h-[200%] md:h-[200%] text-white p-7 bg-black">
      <div className="md:flex flex flex-col md:flex-row  m-auto md:text-left gap-3 md:gap-9 h-screen">
        <img
          className="md:h-[60%] md:pl-7 md:rounded object-cover  h-1/2 rounded"
          src={IMG_CDN + poster_path}
          alt="poster"
        />
        <div>
          <h1 className="md:text-4xl font-mono font-bold text-center md:text-left ">
            {title}
            {"(" + status + ")"}
          </h1>
          <h1 className="text-2xl pt-2">Overview</h1>
          <p className="pt-2">{overview}</p>
          <h1 className="text-2xl pt-2">genres</h1>
          <p className="pt-2  ">
            {genres.map((genera) => "  " + genera.name + ", ")}{" "}
          </p>
          <h1 className="text-2xl pt-2">production companies</h1>
          <ul>
            {production_companies.map((company, index) => (
              <li key={index} className="pt-1">
                {company.name}
              </li>
            ))}
          </ul>
          <h1 className="text-1xl pt-2">
            {" "}
            <span className="text-2xl">Release Date: </span>
            {release_date} <br></br> <span className="text-2xl">Run-Time:</span>{" "}
            {runtime} min
          </h1>
        </div>
      </div>
      <h1 className="text-3xl pb-2 md:pb-0 pt-4 md:absolute md:pl-8 md:top-[67%] ">
        Related Vedios
      </h1>
      <div className="flex gap-4 md:absolute left-3 md:top-[80%] overflow-x-auto w-[93%] bg-black">
        {vdata.results.map((vedio) => (
          <div key={vedio.id}>
            <iframe
              className="pl-4 hover:"
              src={
                "https://www.youtube.com/embed/" +
                vedio?.key +
                "?&controls=0&loop=1"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <h1 className="pl-4 p-2 text-2xl">{vedio.type}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
