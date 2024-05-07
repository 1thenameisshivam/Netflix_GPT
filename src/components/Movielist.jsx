/* eslint-disable react/prop-types */

import Moviecard from "./Moviecard";
import { Link } from "react-router-dom";

const Movielist = ({ title, movies }) => {
  return (
    <div className="z-20 p-2 text-white">
      <h1 className="  text-2xl md:text-3xl font-sans p-2 pb-3">{title}</h1>
      <div className="flex overflow-x-scroll  pl-2">
        <div className="flex gap-4 ">
          {movies?.map((movie) => (
            <Link key={movie.id} to={"/movie/" + movie.id}>
              <Moviecard img={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
