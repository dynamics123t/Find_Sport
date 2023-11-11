import Dashboard from "@/components/DashboardAdmin/Dashboard";
import UserManagement from "@/components/DashboardAdmin/UserManagement";
import { getRequest } from "@/services/base/getRequest";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import ThreadUser from "@/components/DashboardAdmin/Thread/ThreadUser";
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
      <ThreadUser />
      {ListUser.length > 0 ? (
        ListUser.map((user) => (
          <UserManagement
            key={user.id}
            username={user.username}
            phone={user.phone}
            email={user.email}
            address={user.address}
            system_role={user.system_role}
            created_at={user.created_at}
            onAccepted={getlistuser}
          />
        ))
      ) : (
        <p>No users available</p>
      )}
    </div>
  );
};

export default dashboard;
