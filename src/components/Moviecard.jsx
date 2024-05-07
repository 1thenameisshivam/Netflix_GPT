/* eslint-disable react/prop-types */

import { IMG_CDN } from "../utils/constants";
const Moviecard = ({ img }) => {
  return (
    <div className="w-36 md:w-44">
      <img src={IMG_CDN + img} />
    </div>
  );
};

export default Moviecard;
