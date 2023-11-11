import React, { useState } from "react";
import PopupMessage from "../Popup/PopupMessage";
import toast from "react-hot-toast";
import UpdateSport from "../Sport/UpdateSport";
import { deleteRequest } from "@/services/base/deleteRequest";
interface IProps {
  id?: string;
  img?: string;
  name?: string;
  price?: string;
  phone?: string;
  address?: string;
  description?: string;
  created_at?: string;
  onView: () => void;
  onLoad: () => void;
}
const SportManagement = ({
  id,
  img,
  name,
  price,
  phone,
  address,
  description,
  created_at,
  onLoad,
}: IProps) => {
  const handleCancel = async () => {
    try {
      const data = await deleteRequest(`/sport/${id}/delete`, {
        id: id,
      });
      onLoad();
    } catch (error) {
      toast.error("Server error!");
    }
  };
  const [isPopupU, setPopupU] = useState(false);
  return (
    <div>
      <PopupMessage
        maxWidth="max-w-[700px]"
        isOpen={isPopupU}
        onCLickOutSide={() => setPopupU(false)}
      >
        <div className="w-[600px]">
          <UpdateSport id={id}></UpdateSport>
        </div>
      </PopupMessage>
      ;
      <div className="relative">
        <table className="w-[80%] text-sm text-left text-gray-500 ml-auto">
          <tbody>
            <tr className="bg-white border-b ">
              <td className="w-32 p-4">{img}</td>
              <th
                scope="row"
                className="px-6 py-4 bg-gray-100 font-medium text-gray-900 whitespace-nowrap"
              >
                {name}
              </th>
              <td className="px-6 py-4">{address}</td>
              <td className="px-6 py-4 bg-gray-100">{price}</td>
              <td className="px-6 py-4">{phone}</td>
              <td className="px-6 py-4 bg-gray-100">{description}</td>
              <td className="px-6 py-4">{created_at}</td>
              <td className="px-6 py-4 bg-gray-100">
                <a
                  onClick={() => setPopupU(true)}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  onClick={handleCancel}
                  className="ml-2 font-medium text-red-600 hover:underline"
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
