import React from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { SCHEMA_LOGIN } from "@/utils/constants/schema";
import { postRequest } from "@/services/base/postRequest";
import { setCookie } from "@/utils/clientCookie";
import { useRouter } from "next/router";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/settings/constants";
const index = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SCHEMA_LOGIN,

    onSubmit: async ({ email, password }) => {
      try {
        const data: any = await postRequest("/auth/login", {
          email,
          password,
        });
        toast.success("Đăng nhập thành công");
        router.push("/sports");
        setCookie(REFRESH_TOKEN, data.data.refresh_token, {
          expires: 7,
        });
        setCookie(ACCESS_TOKEN, data.data.access_token);
      } catch (error: any) {
        if (error.response?.data?.statusCode === 404) {
          toast.error("This is an error!");
        } else {
          toast.error("serverError");
        }
      }
    },
  });
  // console.log(formik.errors);
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
          Đặt Sân Trực Tuyến
        </h1>
        <h3 className="text-base text-[#060606] font-medium">
          Tìm kiếm sân chơi thể thao và nhà thi đấu khắp Đà Nẵng
        </h3>

        <div className="w-full flex flex-col max-w-[550px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Đăng nhập</h3>
            <p className="text-base mb-2">
              Chào mừng bạn đã trở lại! Vui lòng nhập thông tin.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              placeholder="Tên đăng nhập"
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
          </div>
          <div className="w-full flex items-center justify-end">
            <Link
              href="/auth/forgotpassword"
              className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              type="submit"
              className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
            >
              Đăng nhập
            </button>

            <Link
              href="/auth/signup"
              className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center"
            >
              Đăng ký
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Bạn có chưa tài khoản?{" "}
            <Link
              href="/auth/signup"
              className="font-semibold underline underline-offset-2 cursor-pointer"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default index;
