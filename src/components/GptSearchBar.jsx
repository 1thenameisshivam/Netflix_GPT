import { useRef } from "react";
import language from "../utils/language";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS, OPEN_AI_KEY } from "../utils/constants";
import { setMovieName, setMovieSearch } from "../utils/gptSlice";
// import Loader from "./Loader";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store?.config?.lang);
  const searchval = useRef(null);
  const dispatch = useDispatch();

  const tmdbmoviesearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleclick = async () => {
    let query = "";
    try {
      query =
        "assume you are a movie recommendation system. Suggest me a movie for the query: " +
        searchval?.current?.value +
        ". Only give me 5 movie names, comma-separated.";

      const genAI = new GoogleGenerativeAI(OPEN_AI_KEY);

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(query);
      const response = result.response;
      const gptresult = response.text();

      const content = gptresult.split(",");
      dispatch(setMovieName(content));

      const searchdata = content.map((movie) => tmdbmoviesearch(movie));

      const searchresult = await Promise.all(searchdata);
      dispatch(setMovieSearch(searchresult));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex p-2 md:p-0 justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchval}
          className="col-span-9 m-4 p-2 rounded"
          type="text"
          placeholder={language[langkey].placeholder}
        />
        <button
          onClick={handleclick}
          className="col-span-3 m-4 p-2 rounded text-white bg-red-700"
        >
          {language[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
