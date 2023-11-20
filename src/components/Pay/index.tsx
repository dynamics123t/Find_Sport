import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { postRequest } from "@/services/base/postRequest";
import { SCHEMA_CONTACT } from "@/utils/constants/schema";
import Contact from "@/components/Contact/Contact";
export const index = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: SCHEMA_CONTACT,

    onSubmit: async ({ content }) => {
      try {
        await postRequest("contact/create", {
          content: content,
        });
        toast.success("Bạn đã gửi liên hệ thành công!!!");
        router.reload();
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
      <div className="flex">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col ml-[30px]"
        >
          <p className="text-[20px] py-[20px] inline-block font-normal">
            Điền thông tin chi tiết của bạn để hoàn tất việc đặt sân
          </p>
          <div>
            <Contact label="Tên" plahoder="Nhập tên" />
          </div>
          <div>
            <Contact label="Email" plahoder="Nhập Email" />
          </div>
          <div>
            <Contact label="Số điện thoại" plahoder="Nhập số điện thoại" />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
            >
              Nội dung
            </label>
            <textarea
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              rows={4}
              placeholder="Viết nội dung"
              className="block w-full mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Chọn phương thức thanh toán :
            </label>
            <div className="flex items-center justify-between">
              <div className="w-[48%] pl-3 flex items-center border border-gray-200 rounded ">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">
                  Thanh toán bằng tiền mặt
                </label>
              </div>
              <div className="w-[48%] px-3 flex items-center border border-gray-200 rounded ">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">
                  Thanh toán bằng chuyển khoản
                </label>
              </div>
            </div>
          </div>
          <div>
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center">
              Thanh toán
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default index;
