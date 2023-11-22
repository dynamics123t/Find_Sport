import Dashboard from "@/components/DashboardAdmin/Dashboard";
import { getRequest } from "@/services/base/getRequest";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
interface IProps {
  id?: string;
  username?: string;
  phone?: string;
  email?: string;
  address?: string;
  system_role?: string;
  created_at?: string;
  onAccepted: () => void;
}
const dashboard = () => {
  const [ListUser, setListUser] = useState<IProps[]>([]);
  useEffect(() => {
    getlistuser();
  }, []);
  const getlistuser = async () => {
    try {
      const data = (await getRequest("/user/list")) as any;

      setListUser(data.data.list_users);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  return (
    <div>
      <Dashboard />
      <div className="relative overflow-x-auto">
        <table className="w-[80%] ml-auto text-sm text-left text-gray-500 mt-8">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Stt
              </th>
              <th scope="col" className="px-6 py-3">
                Tên
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
                Quyền
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian tạo
              </th>
            </tr>
          </thead>
          <tbody>
            {ListUser.map((rowData, index) => (
              <tr key={rowData.id} className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{rowData.username}</td>
                <td className="px-6 py-4">{rowData.phone}</td>
                <td className="px-6 py-4">{rowData.email}</td>
                <td className="px-6 py-4">{rowData.address}</td>
                <td className="px-6 py-4">{rowData.system_role}</td>
                <td className="px-6 py-4">{rowData.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default dashboard;
