import useClickOutSide from "@/utils/hook/useClickOutSide";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const DropDown = () => {
  const [isDropDown, setDropDown] = useState(false);
  const route = useRouter();
  const dropDownRef = useRef<HTMLDivElement>(null);
  useClickOutSide(
    () => {
      isDropDown && setDropDown(false);
    },
    dropDownRef,
    [isDropDown]
  );
  console.log(isDropDown);
  return (
    <div className="relative" ref={dropDownRef}>
      <button
        onClick={() => setDropDown(!isDropDown)}
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600  md:mr-0 focus:ring-4 focus:ring-gray-100 "
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 mr-2 rounded-full"
          src="/images/avatar.jpg"
          alt="user photo"
        />
        Nguyễn Duy Tân
        <Image
          className="cursor-pointer"
          src="/images/chevron-24.png"
          alt=""
          width={24}
          height={24}
        />
      </button>

      {isDropDown && (
        <div
          id="dropdownAvatarName"
          className="z-10 top-10 left-0 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium ">Nguyễn Duy Tân</div>
            <div className="truncate">tan@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            <li>
              <Link
                href="/user/profile"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Thông tin cá nhân
              </Link>
            </li>
            <li>
              <a
                href="/user/history"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Lịch sử đặt sân
              </a>
            </li>
            <li>
              <a
                href="/user/changepassword"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Đổi mật khẩu
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 "
            >
              Đăng xuất
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
