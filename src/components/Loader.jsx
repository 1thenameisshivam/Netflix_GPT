import loader from "../assets/loader.gif";
const Loader = () => {
  return (
    <div className="flex justify-center items-center bg-black w-screen h-screen">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
