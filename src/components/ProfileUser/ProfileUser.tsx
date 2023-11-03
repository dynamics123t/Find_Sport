import React from "react";
import DetailUser from "./DetailUser";
import Image from "next/image";

const ProfileUser = () => {
  return (
    <div>
      <div className="w-[95%] mx-auto mt-10 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src="/images/avatar.jpg"
            alt="Woman looking front"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">Nguyễn Duy TÂN</h2>
          <p className="text-gray-500">Vua phá lưới</p>
        </div>
        <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <Image src="/images/star-solid.svg" alt="" width={24} height={24} />
            <div>2k</div>
          </li>
          <li className="flex flex-col items-center justify-between">
            <Image
              src="/images/users-solid.svg"
              alt=""
              width={24}
              height={24}
            />
            <div>15</div>
          </li>
          <li className="flex flex-col items-center justify-between">
            <Image
              src="/images/heart-solid.svg"
              alt=""
              width={24}
              height={24}
            />
            <div>10k</div>
          </li>
          <li className="flex flex-col items-center justify-around">
            <Image
              src="/images/comment-solid.svg"
              alt=""
              width={24}
              height={24}
            />
            <div>15</div>
          </li>
        </ul>
        <div className="p-4 border-t mx-8 mt-2">
          <DetailUser />
          <button className="w-1/6 block mx-auto mt-5 rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            Sửa thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
