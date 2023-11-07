import React from "react";
import Image from "next/image";
const UserContact = () => {
  return (
    <div>
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
        <table className="w-[80%] text-sm text-left text-gray-500  ml-auto mt-6">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Họ va tên
              </th>
              <th scope="col" className="px-6 py-3">
                Số điện thoại
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3">
                Nội dung liên hệ
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian gửi đến
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nguyễn Duy Tân
              </th>
              <td className="px-6 py-4">098765123</td>
              <td className="px-6 py-4">tannguyen512001@gmail.com</td>
              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">Tôi muốn đăng kí cho thuê sân</td>
              <td className="px-6 py-4">11/03/2023</td>
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
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nguyễn Duy Tân
              </th>
              <td className="px-6 py-4">098765123</td>
              <td className="px-6 py-4">tannguyen512001@gmail.com</td>
              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">Tôi muốn đăng kí cho thuê sân</td>
              <td className="px-6 py-4">11/03/2023</td>
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
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nguyễn Duy Tân
              </th>
              <td className="px-6 py-4">098765123</td>
              <td className="px-6 py-4">tannguyen512001@gmail.com</td>
              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">Tôi muốn đăng kí cho thuê sân</td>
              <td className="px-6 py-4">11/03/2023</td>
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

export default UserContact;
