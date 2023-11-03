import React from "react";

const UserManagement = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md ">
        <table className="w-[80%] text-sm text-left text-gray-500 dark:text-gray-400 ml-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tên
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Số điện thoại
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày sinh
              </th>
              <th scope="col" className="px-6 py-3">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Time Create
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
              <td className="px-6 py-4">tannguyen512001@gmail.com</td>
              <td className="px-6 py-4">098765123</td>
              <td className="px-6 py-4">05/01/2001</td>
              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">Admin</td>
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
              <td className="px-6 py-4">tannguyen512001@gmail.com</td>
              <td className="px-6 py-4">098765123</td>
              <td className="px-6 py-4">05/01/2001</td>
              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">Admin</td>
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
              <td className="px-6 py-4">tannguyen512001@gmail.com</td>
              <td className="px-6 py-4">098765123</td>
              <td className="px-6 py-4">05/01/2001</td>
              <td className="px-6 py-4">200 to huu</td>
              <td className="px-6 py-4">Admin</td>
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

export default UserManagement;
