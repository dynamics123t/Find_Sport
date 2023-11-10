import React from "react";
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
const UserManagement = ({
  username,
  phone,
  email,
  address,
  system_role,
  created_at,
}: IProps) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-[80%] text-sm text-left text-gray-500  ml-auto mt-6">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {username}
              </th>

              <td className="px-6 py-4 bg-gray-50">{phone}</td>
              <td className="px-6 py-4">{email}</td>
              <td className="px-6 py-4 bg-gray-50">{address}</td>
              <td className="px-6 py-4">{system_role}</td>
              <td className="px-6 py-4 bg-gray-50">{created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
