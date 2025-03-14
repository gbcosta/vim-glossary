import { IoSearch } from "react-icons/io5";

export const Searchbar = () => {
  return (
    <div
      className="bg-zinc-50 border-black border-2 p-2 rounded-lg
            w-full max-w-lg flex-row flex items-center gap-2 shadow-zinc-300 shadow-lg"
    >
      <IoSearch className="text-xl" />
      <input className="outline-none w-full text-xl "></input>
    </div>
  );
};
