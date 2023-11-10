import React from "react";
import Image from "next/image";
const Search = () => {
  return (
    <form className="">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 "
      />
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
          <Image
            className="cursor-pointer"
            src="/images/search.svg"
            alt=""
            width={24}
            height={24}
          />
        </div>
        <input
          type="search"
          id="default-search"
          className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 "
          placeholder="Nhập tên sân"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-[#56E07B] hover:bg-[#33FF33] font-medium rounded-lg text-sm px-4 py-2"
        >
          Tìm
        </button>
      </div>
    </form>
  );
};

export default Search;
