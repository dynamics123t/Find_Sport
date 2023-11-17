import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
import toast from "react-hot-toast";
import Search from "../Search/Search";
import { getRequest } from "@/services/base/getRequest";
interface IProps {
  id?: string;
  username?: string;
  avatar?: string;
  email?: string;
  onView: () => void;
}
const Header = () => {
  const [isNameUser, setNameUser] = useState<IProps>();
  useEffect(() => {
    getnameuser();
  }, []);
  const getnameuser = async () => {
    try {
      const data = (await getRequest("/user/me")) as any;

      setNameUser(data.data);
    } catch (error) {
      // toast.error("Server error!");
    }
  };
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
        <div className="mr-auto w-[46%]"></div>
        <Link href="/sports/bongda" className="cursor-pointer">
          BÓNG ĐÁ
        </Link>
        <Link href="/sports/caulong" className="cursor-pointer">
          CẦU LÔNG
        </Link>
        <Link href="/sports/tennis" className="cursor-pointer">
          TENNIS
        </Link>
        <Link href="/sports/bongro" className="cursor-pointer">
          BÓNG RỔ
        </Link>
      </div>
      <div className=" flex left-0 w-[30%] justify-between items-center text-base font-bold px-8 gap-8">
        <Link href="/contact" className="cursor-pointer">
          ĐĂNG KÝ ĐỐI TÁC
        </Link>

        <DropDown
          key={isNameUser?.id}
          avatar={isNameUser?.avatar}
          username={isNameUser?.username}
          email={isNameUser?.email}
          onView={getnameuser}
        />
      </div>
    </header>
  );
};

export default Header;
