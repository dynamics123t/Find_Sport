import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const Search = () => {
  const [Find, setFind] = useState("");
  const router = useRouter();
  function handleChange(event: any) {
    setFind(event.target.value);
  }
  return (
    <div className="">
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
          value={Find}
          onChange={handleChange}
          className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 "
          placeholder="Nhập tên sân"
        />
        <button
          type="submit"
          onClick={() =>
            router.replace({
              query: { ...router.query, search: Find },
              pathname: router.pathname,
            })
          }
          className="text-white absolute right-2.5 bottom-2.5 bg-[#56E07B] hover:bg-[#33FF33] font-medium rounded-lg text-sm px-4 py-2"
        >
          Tìm
        </button>
      </div>
    </div>
  );
};

export default Search;
