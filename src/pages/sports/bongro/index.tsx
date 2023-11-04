import Footer from "@/components/Footer/footer";
import Header from "@/components/Headder/header";
import Card from "@/components/Card/Card";
import Search from "@/components/Search/Search";
import React, { useState } from "react";
import Heading from "@/components/Heading/Heading";
import PaginationCustom from "@/components/Pagination/Pagination";
import CheckboxField from "@/components/CheckboxField/CheckboxField";

interface AcceptUsersProps {
  searchParams: {
    page: number;
  };
}
const index = () => {
  return (
    <div className="w-full h-full">
      <Header></Header>
      <div className="flex flex-col pt-8 pl-8">
        <Heading title="Bóng Rổ" pageNames={["Trang chủ", "Sân bóng rổ"]} />
      </div>
      <div className="w-[1000px] pl-8 pt-6">
        <Search></Search>
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
          <CheckboxField label="Sân 3x3 (Half court)"></CheckboxField>
          <CheckboxField label="Sân 5x5 (Full size)"></CheckboxField>

          <h3 className="text-[25px] mt-10 mb-4 font-semibold text-gray-900">
            Vị trí
          </h3>
          <CheckboxField label="Trong nhà"></CheckboxField>
          <CheckboxField label="Ngoài trời"></CheckboxField>

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
          <p className="text-[#2F285A] font-semibold text-3xl">SÂN BÓNG RỔ</p>
          <p className="text-[#2F285A] font-normal mt-[-30px] text-lg">
            Danh sách sân bóng rổ khắp Đà Nẵng
          </p>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
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

      <div className="bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default index;