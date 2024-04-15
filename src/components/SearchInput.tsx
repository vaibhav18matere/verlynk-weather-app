import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <section
      className="flex row-auto items-center justify-center shadow-lg mt-6 p-6
    rounded-[7px] border
    "
    >
      <input
        className="text-xl font-light w-full placeholder:lowercase focus:outline-none tracking-wide"
        type="text"
        placeholder="Search place..."
      />
      <IoSearch
        size={34}
        className="cursor-pointer transition ease-out hover:scale-110 mr-4"
      />
    </section>
  );
};

export default SearchInput;
