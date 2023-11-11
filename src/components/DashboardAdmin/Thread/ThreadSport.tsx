import React, { useState } from "react";
import Image from "next/image";
import PopupMessage from "@/components/Popup/PopupMessage";
import CreateSport from "@/components/Sport/CreateSport";
const ThreadSport = () => {
  const [isPopup, setPopup] = useState(false);
  return (
    <div>
      <PopupMessage
        maxWidth="max-w-[700px]"
        isOpen={isPopup}
        onCLickOutSide={() => setPopup(false)}
      >
        <div className="w-[600px]">
          <CreateSport></CreateSport>
        </div>
      </PopupMessage>
      <div className="relative overflow-x-auto shadow-md">
        <div className="pb-4 bg-white ml-80 mt-6">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src="/images/magnifying-glass-solid.svg"
                alt=""
                width={16}
                height={16}
              />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <button
          onClick={() => setPopup(true)}
          className="text-white ml-80 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Thêm sân thể thao
        </button>
        <table className="w-[80%] text-sm text-left text-gray-500 ml-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ảnh
              </th>
              <th scope="col" className="px-6 py-3">
                Tên sân
              </th>
              <th scope="col" className="px-6 py-3">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3">
                Giá
              </th>
              <th scope="col" className="px-6 py-3">
                Số chủ sân
              </th>
              <th scope="col" className="px-6 py-3">
                Chi tiết
              </th>
              <th scope="col" className="px-6 py-3">
                Time Create
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ThreadSport;
