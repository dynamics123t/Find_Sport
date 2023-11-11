import Dashboard from "@/components/DashboardAdmin/Dashboard";
import SportManagement from "@/components/DashboardAdmin/SportManagement";
import toast from "react-hot-toast";
import { getRequest } from "@/services/base/getRequest";
import React, { useEffect, useState } from "react";
import ThreadSport from "@/components/DashboardAdmin/Thread/ThreadSport";
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
const sportmanagement = () => {
  const [Load, setLoad] = useState<boolean>(false);
  const [ListSport, setListSport] = useState<IProps[]>([]);
  useEffect(() => {
    getlistsport();
  }, [Load]);
  const load = () => {
    setLoad(!Load);
  };
  const getlistsport = async () => {
    try {
      const data = (await getRequest("/sport/get_all")) as any;

      setListSport(data.data);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  return (
    <div>
      <Dashboard />
      <ThreadSport />
      {ListSport.length > 0 ? (
        ListSport.map((sport) => (
          <SportManagement
            id={sport.id}
            key={sport.id}
            img={sport.img}
            name={sport.name}
            price={sport.price}
            phone={sport.phone}
            address={sport.address}
            description={sport.description}
            created_at={sport.created_at}
            onView={getlistsport}
            onLoad={load}
          />
        ))
      ) : (
        <p>No sports available</p>
      )}
    </div>
  );
};

export default sportmanagement;
