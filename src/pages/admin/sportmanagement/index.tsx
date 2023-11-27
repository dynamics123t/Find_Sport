import Dashboard from "@/components/DashboardAdmin/Dashboard";
import SportManagement from "@/components/DashboardAdmin/SportManagement";
import toast from "react-hot-toast";
import { getRequest } from "@/services/base/getRequest";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ThreadSport from "@/components/DashboardAdmin/Thread/ThreadSport";
import PaginationCustom from "@/components/Pagination/Pagination";
import moment from "moment";
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
  const searchParams = useSearchParams();
  const [ListSport, setListSport] = useState<IProps[]>([]);
  const [totalSport, setTotalSport] = useState<number>();
  const page = Number(searchParams.get("page")) || 1;
  const q = useSearchParams().get("search") || "";
  useEffect(() => {
    getlistsport();
  }, [Load, page]);
  const load = () => {
    setLoad(!Load);
  };
  const getlistsport = async () => {
    try {
      const data: any = await getRequest(
        `/sport/get_all?name=${q}&skip=${(page - 1) * 10}&limit=${10}`
      );

      setListSport(data.data.result);
      setTotalSport(data.data.count);
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
            created_at={moment(sport?.created_at).fromNow()}
            onView={getlistsport}
            onLoad={load}
          />
        ))
      ) : (
        <p>No sports available</p>
      )}
      <div className="flex justify-center items-center">
        <PaginationCustom
          handleChange={() => {}}
          page={page}
          total_record={totalSport || 0}
          record_per_page={10}
        />
      </div>
    </div>
  );
};

export default sportmanagement;
