import React from "react";
import { IoLocationOutline, IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <section className="flex flex-row items-center justify-center mt-4 shadow-xl">
      <input
        className="text-xl font-light w-full p-2  placeholder:lowercase focus:outline-none tracking-wide"
        type="text"
        placeholder="Search place to check weather..."
      />
      <IoSearch
        size={34}
        className="cursor-pointer transition ease-out hover:scale-110 mr-4"
      />
      {/* <IoLocationOutline size={34} /> */}
    </section>
  );
};

export default SearchInput;
