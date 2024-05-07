import { BG_LINK } from "../utils/constants";
import Searchbar from "./Searchbar";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";
import Loader from "./Loader";
const SearchPage = () => {
  const data = useSelector((store) => store.movies.searchMovie);

  console.log(data);
  if (!data) return <Loader />;
  return (
    <div>
      <div className=" fixed -z-30 ">
        <img
          className="h-screen md:h-auto object-cover bg-gradient-to-b from-black"
          src={BG_LINK}
          alt="Background"
        />
      </div>
      <Searchbar />
      {data && (
        <Movielist key={data[0]?.id} title={data[0]?.title} movies={data} />
      )}
    </div>
  );
};

export default SearchPage;
