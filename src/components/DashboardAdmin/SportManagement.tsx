import React, { useState } from "react";
import Image from "next/image";
import PopupMessage from "../Popup/PopupMessage";
import CreateSport from "../Sport/CreateSport";
import UpdateSport from "../Sport/UpdateSport";

const SportManagement = () => {
  const [isPopup, setPopup] = useState(false);
  const [isPopupU, setPopupU] = useState(false);
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
      <PopupMessage
        maxWidth="max-w-[700px]"
        isOpen={isPopupU}
        onCLickOutSide={() => setPopupU(false)}
      >
        <div className="w-[600px]">
          <UpdateSport></UpdateSport>
        </div>
      </PopupMessage>
      ;
      <div className="relative overflow-x-auto shadow-md">
        <div>
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
        </div>

        <table className="w-[80%] text-sm text-left text-gray-500  ml-auto mt-6">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Hình ảnh sân
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Tên sân thể thao
              </th>
              <th scope="col" className="px-6 py-3">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3">
                Time Create
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="w-32 p-4">
                <img src="/images/sanphui1.png" alt="" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sân chuyên việt
              </th>

              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">11/03/2023</td>
              <td className="px-6 py-4">Đang hoạt động</td>
              <td className="px-6 py-4">
                <a
                  onClick={() => setPopupU(true)}
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ml-2 font-medium text-red-600  hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="w-32 p-4">
                <img src="/images/sanphui2.png" alt="" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sân chuyên việt
              </th>

              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">11/03/2023</td>
              <td className="px-6 py-4">Đang hoạt động</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ml-2 font-medium text-red-600  hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="w-32 p-4">
                <img src="/images/sanphui3.png" alt="" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sân chuyên việt
              </th>

              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">11/03/2023</td>
              <td className="px-6 py-4">Đang hoạt động</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ml-2 font-medium text-red-600  hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SportManagement;
