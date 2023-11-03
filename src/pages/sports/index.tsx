import Footer from "@/components/Footer/footer";
import Header from "@/components/Headder/header";
import Card from "@/components/Card/Card";
import Search from "@/components/Search/Search";
import React, { useState } from "react";
import Heading from "@/components/Heading/Heading";
import PaginationCustom from "@/components/Pagination/Pagination";

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
        <Heading title="Bóng Đá" pageNames={["Trang chủ", "Sân bóng đá"]} />
      </div>
      <div className="w-[1000px] pl-8 pt-6">
        <Search></Search>
      </div>
      <div className="flex-col grid gap-8 justify-center items-center py-8">
        <p className="text-[#2F285A] font-semibold text-3xl">SÂN BÓNG ĐÁ</p>
        <p className="text-[#2F285A] font-normal mt-[-30px] text-lg">
          Danh sách sân bóng đá mini cỏ nhân tạo khắp Đà Nẵng
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
      <div className="bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default index;
