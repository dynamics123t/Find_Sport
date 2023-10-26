import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="w-[1000px] h-[250px] rounded-md flex bg-white shadow-[1px_1px_8px_rgba(0,_0,_0,_0.2)] border-[3px] border-solid border-white">
      <div className="w-1/3 flex justify-center items-center ">
        <img
          src="/images/sanbong1.png"
          className="w-[300px] h-[200px] rounded-md"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-center items-start">
        <p className="text-[24px] font-semibold mb-3">Sân bóng Chuyên Việt</p>
        <span className="flex mb-3">
          <p className="font-semibold">Địa chỉ:</p>
          <p className="ml-2">
            Số 98 Tiểu La, Hòa Thuận Đông, Hải Châu, Đà Nẵng, Việt Nam{" "}
          </p>
        </span>
        <span className="flex mb-3">
          <p className="font-semibold">Điểm nhấn:</p>
          <p className="ml-2">Sân mới đầu tư | Rẻ, đẹp & Hiện đại</p>
        </span>
        <span className="flex mb-3">
          <p className="font-semibold">Giá tham khảo:</p>
          <p className="ml-2">200.000 VNĐ - 350.000 VNĐ / Trận</p>
        </span>
        <div className="w-[180px] h-[30px] flex items-center justify-between px-2 bg-[#80DD82] rounded-md">
          <Link href="/detail" className="cursor-pointer">
            Xem Chi Tiết
          </Link>
          <span> | </span>
          <Link href="/auth/signup" className="cursor-pointer">
            Đặt Sân
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
