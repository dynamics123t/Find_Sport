import React, { useState } from "react";
import Image from "next/image";
import PopupMessage from "../Popup/PopupMessage";
import CreateSport from "../Sport/CreateSport";
import UpdateSport from "../Sport/UpdateSport";
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
}
const SportManagement = ({
  img,
  name,
  price,
  phone,
  address,
  description,
  created_at,
}: IProps) => {
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
        <table className="w-[80%] text-sm text-left text-gray-500  ml-auto mt-6">
          <tbody>
            <tr className="bg-white border-b ">
              <td className="w-32 p-4">{img}</td>
              <th
                scope="row"
                className="px-6 py-4 bg-gray-100 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
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
