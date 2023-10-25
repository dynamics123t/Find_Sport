import React from "react";
import Image from "next/image";
import Link from "next/link";
const forgotpassword = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-lg h-full mx-auto my-10 bg-white p-8 rounded-xl mt-28 shadow-[1px_1px_8px_rgba(0,_0,_0,_0.2)] shadow-slate-300 ">
        <h1 className="text-4xl font-medium">Quên mật khẩu</h1>
        <p className="text-slate-500">Điền vào biểu mẫu để đặt lại mật khẩu</p>

        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Địa chỉ email</p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Nhập email"
              />
            </label>
            <label htmlFor="text">
              <p className="font-medium text-slate-700 pb-2">Tên người dùng</p>
              <input
                id="text"
                name="username"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Nhập tên người dùng"
              />
            </label>

            <button className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <Image
                className="cursor-pointer"
                src="/images/key.png"
                alt=""
                width={24}
                height={24}
              />
              <span>Gửi mã</span>
            </button>
            <p className="text-center">
              Chưa đăng ký?{" "}
              <Link
                href="/auth/signup"
                className="text-green-600 font-medium inline-flex space-x-1 items-center"
              >
                <span>Đăng ký ngay bây giờ</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default forgotpassword;
