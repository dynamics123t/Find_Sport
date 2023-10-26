import CardRead from "@/components/CardRead/CardRead";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Headder/header";
import React from "react";

const Index = () => {
  return (
    <div className="w-ful h-full">
      <Header></Header>
      <div className="relative w-full h-full flex flex-col">
        <div className="absolute bg-white top-[15%] left-[20%] flex flex-col rounded-xl p-8">
          <h1 className="text-5xl text-black font-extrabold my-1">
            FIND YOUR STADIUM
          </h1>
          <p className="text-xl mb-4 text-black font-normal">
            Tìm kiếm sân chơi thể thao và nhà thi đấu khắp Đà Nẵng
          </p>
          <select
            defaultValue={"DEFAULT"}
            id="sports"
            className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="DEFAULT" disabled>
              Chọn môn thể thao
            </option>
            <option value="BD">Bóng Đá</option>
            <option value="CL">Cầu Lông</option>
            <option value="TN">Tennis</option>
            <option value="BR">Bóng rổ</option>
          </select>
          <select
            defaultValue={"DEFAULT"}
            id="district"
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="DEFAULT" disabled>
              Chọn khu vực
            </option>
            <option value="CamLe">Quận Cẩm Lệ</option>
            <option value="HaiChau">Quận Hải Châu</option>
            <option value="LienChieu">Quận Liên Chiểu</option>
            <option value="NguHanhSon">Quận Ngũ Hành Sơn</option>
            <option value="SonTra">Quận Sơn Trà</option>
            <option value="ThanhKhe">Quận Thanh Khê</option>
            <option value="HoaVang">Huyện Hòa Vang</option>
          </select>
          <button
            type="button"
            className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-[20px] rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Tìm kiếm sân chơi
          </button>
        </div>
        <img
          src="/images/bg-sport.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="text-center my-8">
          <p className="text-[40px] font-semibold">Tin Thể Thao</p>
          <p>
            Cập nhật thông tin mới nhất về các sân thể thao và những sự kiện nổi
            bật
          </p>
        </div>
      </div>
      <div className="flex justify-around my-16">
        <CardRead />
        <CardRead />
        <CardRead />
      </div>
      <div className="bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Index;
