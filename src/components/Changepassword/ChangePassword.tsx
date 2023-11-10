import React from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { SCHEMA_CHANGE_PASSWORD } from "@/utils/constants/schema";
import { postRequest } from "@/services/base/postRequest";
const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      new_password_confirm: "",
    },
    validationSchema: SCHEMA_CHANGE_PASSWORD,
    onSubmit: async (values) => {
      const { old_password, new_password, new_password_confirm } = values;
      try {
        await postRequest("/auth/reset_password", {
          old_password,
          new_password,
          new_password_confirm,
        });
        toast.success("Đổi mật khẩu thành công!!");
        formik.resetForm();
      } catch (error: any) {
        toast.error(
          `Đổi mật khẩu không thành công : ${error.response?.data?.detail?.message}`
        );
      }
    },
  });
  return (
    <div>
      <div className="w-full h-full">
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-lg h-full mx-auto my-10 bg-white p-8 rounded-xl shadow-[1px_1px_8px_rgba(0,_0,_0,_0.2)] shadow-slate-300 "
        >
          <h1 className="text-4xl font-medium">Đổi mật khẩu</h1>
          <p className="text-slate-500">Điền vào biểu mẫu để đổi mật khẩu</p>

          <div className="my-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Mật khẩu cũ</p>
                <input
                  name="old_password"
                  type="password"
                  value={formik.values.old_password}
                  onChange={formik.handleChange}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Mật khẩu cũ"
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Mật khẩu mới</p>
                <input
                  name="new_password"
                  type="password"
                  value={formik.values.new_password}
                  onChange={formik.handleChange}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Mật khẩu mới"
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">
                  Xác nhận mật khẩu
                </p>
                <input
                  name="new_password_confirm"
                  type="password"
                  value={formik.values.new_password_confirm}
                  onChange={formik.handleChange}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Xác nhận mật khẩu"
                />
              </label>

              <button
                type="submit"
                className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                <span>Đổi mật khẩu</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
