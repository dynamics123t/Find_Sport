import Dashboard from "@/components/DashboardAdmin/Dashboard";
import UserContact from "@/components/DashboardAdmin/UserContact";
import { getRequest } from "@/services/base/getRequest";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import ThreadContact from "@/components/DashboardAdmin/Thread/ThreadContact";
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
      console.log(data);
      setListContact(data);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  return (
    <div>
      <Dashboard />
      <ThreadContact />
      {ListContact && ListContact.length > 0 ? (
        ListContact.map((contact) => (
          <UserContact
            key={contact.id}
            id={contact.id}
            userid={contact.user_id}
            content={contact.content}
            created_at={contact.created_at}
            onContact={getlistcontact}
          />
        ))
      ) : (
        <p>No contact available</p>
      )}
    </div>
  );
};

export default contactuser;
