import { useSelector } from "react-redux";
import Movielist from "./Movielist";
const GptContent = () => {
  const { movieName, movieSearch } = useSelector((store) => store.gpt);
  if (!movieName || !movieSearch) return null;

  return (
    <div className="bg-black bg-opacity-80 text-white p-4 m-4 ">
      {movieName.map((movieName, index) => (
        <Movielist
          key={movieName}
          title={movieName}
          movies={movieSearch[index]}
        />
      ))}
    </div>
  );
};

export default GptContent;
