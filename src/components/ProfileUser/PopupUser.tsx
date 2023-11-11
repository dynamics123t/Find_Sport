import React from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { SCHEMA_UPDATE_USER } from "@/utils/constants/schema";
import { putRequest } from "@/services/base/putRequest";
import { useRouter } from "next/router";
const PopupUser = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      address: "",
      birthday: "",
      phone: "",
    },
    validationSchema: SCHEMA_UPDATE_USER,
    onSubmit: async (values) => {
      const { username, address, birthday, phone } = values;
      try {
        await putRequest("/user/update_me", {
          username,
          address,
          birthday,
          phone,
        });

        toast.success("Đổi thông tin thành công!!");
        formik.resetForm();
        router.reload();
      } catch (error: any) {
        toast.error(
          `Đổi thông tin không thành công : ${error.response?.data?.detail?.message}`
        );
      }
    },
  });
  return (
    <div>
      <div className="w-full h-full">
        <h1 className="text-4xl font-medium">Đổi thông tin người dùng</h1>
        <p className="text-slate-500">
          Điền vào biểu mẫu để đổi thông tin người dùng
        </p>

        <form onSubmit={formik.handleSubmit} className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="name">
              <p className="font-medium text-slate-700 pb-2">Tên</p>
              <input
                name="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Tên"
              />
            </label>
            <label htmlFor="Phone">
              <p className="font-medium text-slate-700 pb-2">Số điện thoại</p>
              <input
                name="phone"
                type="number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Số điện thoại"
              />
            </label>
            <label htmlFor="birthday">
              <p className="font-medium text-slate-700 pb-2">Ngày sinh</p>
              <input
                name="birthday"
                type="date"
                value={formik.values.birthday}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Ngày sinh"
              />
            </label>
            <label htmlFor="address">
              <p className="font-medium text-slate-700 pb-2">Địa chỉ</p>
              <input
                name="address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Địa chỉ"
              />
            </label>
            <button className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <span>Đổi thông tin</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupUser;
