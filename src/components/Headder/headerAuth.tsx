import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
const Header = () => {
  return (
    <header className="flex w-[full] h-[50px]">
      <div className="right-0 w-[15%] bg-[#2f285a] text-white flex justify-center items-center text-base font-bold gap-3">
        <Image
          className="cursor-pointer"
          src="/images/logo.png"
          alt=""
          width={50}
          height={50}
        />

        <Link href="/">SPORT FINDER</Link>
      </div>
      <div className="flex left-0 w-[55%] justify-end bg-[#56e07b] items-center text-[#2f285a] text-base font-bold pe-8 gap-8 rounded-br-full">
        <Link href="/sports" className="cursor-pointer">
          BÓNG ĐÁ
        </Link>
        <p className="cursor-pointer">CẦU LÔNG</p>
        <p className="cursor-pointer">TENNIS</p>
        <p className="cursor-pointer">BÓNG RỔ</p>
      </div>
      <div className=" flex left-0 w-[30%] justify-between items-center text-base font-bold px-8 gap-8">
        <Link href="/contact" className="cursor-pointer">
          ĐĂNG KÝ ĐỐI TÁC
        </Link>
        <DropDown></DropDown>
      </div>
    </header>
  );
};

export default Header;