import Link from "next/link";
import React from "react";
interface IProps {
  id?: string;
  name?: string;
  address?: string;
  phone?: string;
  description?: string;
  price?: string;
  img?: string;
  onAccepted: () => void;
}

const Card = ({ id, name, address, price, img }: IProps) => {
  return (
    <div className="w-[1000px] h-[250px] rounded-md flex bg-white shadow-[1px_1px_8px_rgba(0,_0,_0,_0.2)] border-[3px] border-solid border-white">
      <div className="w-1/3 flex justify-center items-center ">
        <img src={img} alt="" className="w-[300px] h-[200px] rounded-md" />
      </div>
      <div className="w-2/3 flex flex-col justify-center items-start">
        <p className="text-[24px] font-semibold mb-3">{name}</p>
        <span className="flex mb-3">
          <p className="font-semibold">Địa chỉ:</p>
          <p className="ml-2">{address}</p>
        </span>
        <span className="flex mb-3">
          <p className="font-semibold">Điểm nhấn:</p>
          <p className="ml-2">Sân mới đầu tư | Rẻ, đẹp & Hiện đại</p>
        </span>
        <span className="flex mb-3">
          <p className="font-semibold">Giá tham khảo:</p>
          <p className="ml-2">{price} / Trận</p>
        </span>
        <div className="w-[180px] h-[30px] flex items-center justify-between px-2 bg-[#80DD82] rounded-md">
          <Link href={`/detail/${id}`} className="cursor-pointer">
            Xem Chi Tiết
          </Link>
          <span> | </span>
          <Link href={`/pay/${id}`} className="cursor-pointer">
            Đặt Sân
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
