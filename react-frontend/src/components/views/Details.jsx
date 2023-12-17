import departed from "../../assets/departed.jpg";

const Details = () => {

return (
  <section className="bg-white dark:bg-gray-900 m-6 p-4">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
      <div className="flex justify-center xl:w-1/2">
        <img
          className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
          src={departed}
          // alt={type}
        />
      </div>

      <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
          {"Type"}
        </h2>

        <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
          Start/End year: {2015} - {2020}
        </p>

        <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
        Type: {"Type"}
        </p>

        <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
        Rating: {1}
        </p>
        <span className="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
          {"description"}
        </span>

        <button>See similar Movies</button>

        <button>Bookmark</button>
      <button>Rate</button>
      </div>
    </div>
  </section>
);
};
export default Details;

