import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { SCHEMA_FORGET_PASSWORD } from "@/utils/constants/schema";
import { putRequest } from "@/services/base/putRequest";
const forgotpassword = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SCHEMA_FORGET_PASSWORD,

    onSubmit: async ({ email }) => {
      try {
        await putRequest(`/auth/forget_password?email=${email}`);
        toast.success("Kiểm tra email và nhập mật khẩu mới!!!");
        router.push("/auth/verifycode");
      } catch (error: any) {
        if (error.response?.data?.statusCode === 404) {
          toast.error("This is an error!");
        } else {
          toast.error("serverError");
        }
      }
    },
  });
  return (
    <div className="w-full h-full">
      <div className="max-w-lg h-full mx-auto my-10 bg-white p-8 rounded-xl mt-28 shadow-[1px_1px_8px_rgba(0,_0,_0,_0.2)] shadow-slate-300 ">
        <h1 className="text-4xl font-medium">Quên mật khẩu</h1>
        <p className="text-slate-500">Điền vào biểu mẫu để đặt lại mật khẩu</p>

        <form onSubmit={formik.handleSubmit} className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Địa chỉ email</p>
              <input
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                placeholder="Nhập email"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
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
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default forgotpassword;
