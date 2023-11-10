import Card from "@/components/Card/Card";
import React, { useEffect, useState } from "react";
import Heading from "@/components/Heading/Heading";
import PaginationCustom from "@/components/Pagination/Pagination";
import CheckboxField from "@/components/CheckboxField/CheckboxField";
import { getRequest } from "@/services/base/getRequest";
import toast from "react-hot-toast";
interface AcceptUsersProps {
  searchParams: {
    page: number;
  };
}
interface IProps {
  id?: string;
  name?: string;
  address?: string;
  price?: string;
  image?: string;
  onAccepted: () => void;
}
const index = () => {
  const [ListCard, setListCard] = useState<IProps[]>([]);
  useEffect(() => {
    getSport();
  }, []);
  const getSport = async () => {
    try {
      const data = (await getRequest("/sport/get_all")) as any;
      console.log(data.data);

      setListCard(data.data);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-col pt-8 pl-8">
        <Heading title="Bóng Đá" pageNames={["Trang chủ", "Sân bóng đá"]} />
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
            Loại sân
          </h3>
          <CheckboxField label="Sân 7"></CheckboxField>
          <CheckboxField label="Sân 5"></CheckboxField>
          <CheckboxField label="Sân futsal"></CheckboxField>

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
          <p className="text-[#2F285A] font-semibold text-3xl">SÂN BÓNG ĐÁ</p>
          <p className="text-[#2F285A] font-normal mt-[-30px] text-lg">
            Danh sách sân bóng đá mini cỏ nhân tạo khắp Đà Nẵng
          </p>
          {ListCard.map((items) => (
            <Card
              key={items.id}
              name={items.name}
              address={items.address}
              image={items.image}
              price={items.price}
              onAccepted={getSport}
            ></Card>
          ))}
          <div className="flex justify-center items-center">
            {/* <PaginationCustom
            handleChange={() => {}}
            page={page}
            total_record={total}
            record_per_page={10}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
