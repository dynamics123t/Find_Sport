import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { SCHEMA_SIGNUP } from "@/utils/constants/schema";
const index = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      number: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: SCHEMA_SIGNUP,
    onSubmit: async (values) => {
      console.log("dang ky thanh cong");
    },
  });

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src="/images/player.png"
          className="w-full h-full object-cover rotate-y-180"
        />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between"
      >
        <h1 className="text-xl text-[#060606] font-semibold">
          Đặt sân trực tuyến
        </h1>

        <div className="w-full flex flex-col max-w-[550px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Đăng ký tài khoản</h3>
            <p className="text-base mb-2">
              Để đăng ký tài khoản! Vui lòng nhập thông tin.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex justify-between">
              <input
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                name="username"
                placeholder="Tên đăng nhập"
                className="w-[47%] text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
              />
              <input
                type="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                name="number"
                placeholder="Số điện thoại"
                className="w-[47%] text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <input
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              placeholder="Mật khẩu"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              value={formik.values.repassword}
              onChange={formik.handleChange}
              name="repassword"
              placeholder="Nhắc lại Mật khẩu"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center">
              Đăng ký
            </button>
            <Link
              href="/auth/login"
              className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center"
            >
              Đăng nhập
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Bạn đã có tài khoản?{" "}
            <Link
              href="/auth/login"
              className="font-semibold underline underline-offset-2 cursor-pointer"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default index;
