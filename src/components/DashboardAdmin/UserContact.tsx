import React from "react";
interface IProps {
  id?: string;
  userid?: string;
  content?: string;
  created_at?: string;
  onContact: () => void;
}
const UserContact = ({ id, userid, content, created_at }: IProps) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-[80%] text-sm text-left text-gray-500 ml-auto">
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {id}
              </th>
              <td className="px-6 py-4">{userid}</td>
              <td className="px-6 py-4">{content}</td>
              <td className="px-6 py-4">{created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserContact;
