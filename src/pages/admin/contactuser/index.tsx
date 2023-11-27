import Dashboard from "@/components/DashboardAdmin/Dashboard";
import { getRequest } from "@/services/base/getRequest";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import moment from "moment";
interface IProps {
  id?: string;
  user_id?: string;
  content?: string;
  created_at?: string;
  onContact: () => void;
}
const contactuser = () => {
  const [ListContact, setListContact] = useState<IProps[]>([]);
  useEffect(() => {
    getlistcontact();
  }, []);
  const getlistcontact = async () => {
    try {
      const data = (await getRequest("/contact/get")) as any;
      setListContact(data);
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
                Id liên hệ
              </th>
              <th scope="col" className="px-6 py-3">
                Id người dùng
              </th>
              <th scope="col" className="px-6 py-3">
                Nội dung
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian tạo
              </th>
            </tr>
          </thead>
          <tbody>
            {ListContact.map((rowData, index) => (
              <tr key={rowData.id} className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{rowData.id}</td>
                <td className="px-6 py-4">{rowData.user_id}</td>
                <td className="px-6 py-4">{rowData.content}</td>
                <td className="px-6 py-4">
                  {moment(rowData?.created_at).format("MMMM Do YYYY, h:mm:ss")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default contactuser;
