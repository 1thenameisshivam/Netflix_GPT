import { BG_LINK } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptContent from "./GptContent";
const Gpt = () => {
  return (
    <div>
      <div className=" fixed -z-30 ">
        <img
          className="h-screen md:h-auto object-cover"
          src={BG_LINK}
          alt="Background"
        />
      </div>
      <GptSearchBar />
      <div>
        <GptContent />
      </div>
    </div>
  );
};

export default Gpt;
