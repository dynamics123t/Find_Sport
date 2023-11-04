import React from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useFormik } from "formik";
import { SCHEMA_VERIFY_CODE } from "@/utils/constants/schema";
import { putRequest } from "@/services/base/putRequest";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      verify_code: "",
      new_password: "",
      password_confirm: "",
    },
    validationSchema: SCHEMA_VERIFY_CODE,
    onSubmit: async ({
      email,
      verify_code,
      new_password,
      password_confirm,
    }) => {
      try {
        await putRequest(
          `/auth/verify_code?email=${email}&verify_code=${verify_code}&new_password=${new_password}&password_confirm=${password_confirm}`
        );
        toast.success("Đăng kí thành công");
        router.push("/auth/login");
      } catch (error: any) {
        console.log(error);

        if (error.response?.data?.message === "VERIFIED") {
          toast.error("Xác thực tài khoản không thành công");
        } else {
          toast.error("loi server");
        }
      }
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
            <input
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="text"
              value={formik.values.verify_code}
              onChange={formik.handleChange}
              name="verify_code"
              placeholder="vefiry_code"
              className="w-[47%] text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
            />
            <input
              type="password"
              value={formik.values.new_password}
              onChange={formik.handleChange}
              name="new_password"
              placeholder="Mật khẩu"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              value={formik.values.password_confirm}
              onChange={formik.handleChange}
              name="password_confirm"
              placeholder="Nhắc lại Mật khẩu"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              type="submit"
              className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
            >
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
