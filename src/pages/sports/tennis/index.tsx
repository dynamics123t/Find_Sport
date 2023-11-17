import Card from "@/components/Card/Card";
import React, { useEffect, useState } from "react";
import Heading from "@/components/Heading/Heading";
import PaginationCustom from "@/components/Pagination/Pagination";
import CheckboxField from "@/components/CheckboxField/CheckboxField";
import { getRequest } from "@/services/base/getRequest";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import Search from "@/components/Search/Search";
import { useRouter } from "next/router";
interface IProps {
  id?: string;
  name?: string;
  address?: string;
  price?: string;
  img?: string;
  onAccepted: () => void;
}
const index = () => {
  const searchParams = useSearchParams();
  const [totalSport, setTotalSport] = useState<number>();
  const page = Number(searchParams.get("page")) || 1;
  const q = useSearchParams().get("search") || "";
  const [ListCard, setListCard] = useState<IProps[]>([]);

  useEffect(() => {
    getSport();
  }, [page, q]);

  const getSport = async () => {
    try {
      const data: any = await getRequest(
        `/sport/get_all?name=${q}&skip=${(page - 1) * 4}&limit=${4}`
      );

      setListCard(data.data.result);
      setTotalSport(data.data.count);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-col pt-8 pl-8">
        <Heading title="Tennis" pageNames={["Trang chủ", "Sân tennis"]} />
      </div>

      <div className="flex justify-center">
        <div className="w-1/5 mt-10">
          <h3 className="text-[25px] mb-4 font-semibold text-gray-900">
            Đánh giá
          </h3>
          <CheckboxField label="5 sao"></CheckboxField>
          <CheckboxField label="4 sao"></CheckboxField>
          <CheckboxField label="3 sao"></CheckboxField>
          <CheckboxField label="2 sao"></CheckboxField>
          <CheckboxField label="1 sao"></CheckboxField>

          <h3 className="text-[25px] mt-10 mb-4 font-semibold text-gray-900">
            Vị trí
          </h3>
          <CheckboxField label="Trong nhà"></CheckboxField>
          <CheckboxField label="Ngoài trời"></CheckboxField>

          <h3 className="text-[25px] mt-10 mb-4 font-semibold text-gray-900">
            Mặt sân
          </h3>
          <CheckboxField label="Sân cứng (Acrylic)"></CheckboxField>
          <CheckboxField label="Silicon PU"></CheckboxField>
          <CheckboxField label="Sân đất điện"></CheckboxField>

          <h3 className="text-[25px] mt-10 mb-4 font-semibold text-gray-900">
            Dịch vụ
          </h3>
          <CheckboxField label="Có chỗ để xe"></CheckboxField>
          <CheckboxField label="Căn tin/ Cafe"></CheckboxField>
          <CheckboxField label="Cửa hàng đồ thể thao"></CheckboxField>
          <CheckboxField label="Tổ chức đá giải"></CheckboxField>
          <CheckboxField label="Đào tào/ Huấn luyện"></CheckboxField>
        </div>
        <div className="w-2/3flex-col grid gap-8 justify-center items-center py-8">
          <p className="text-[#2F285A] font-semibold text-3xl">SÂN TENNIS</p>
          <p className="text-[#2F285A] font-normal mt-[-30px] text-lg">
            Danh sách sân tennis khắp Đà Nẵng
          </p>
          {ListCard?.map((items) => (
            <Card
              key={items.id}
              id={items.id}
              name={items.name}
              address={items.address}
              img={items.img}
              price={items.price}
              onAccepted={getSport}
            ></Card>
          ))}
          <div className="flex mt-10 justify-center items-center">
            <PaginationCustom
              handleChange={() => {}}
              page={page}
              total_record={totalSport || 0}
              record_per_page={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
