import React from "react";
import Image from "next/image";
const ChangePassword = () => {
  return (
    <div>
      {" "}
      <div className="w-full h-full">
        <div className="max-w-lg h-full mx-auto my-10 bg-white p-8 rounded-xl shadow-[1px_1px_8px_rgba(0,_0,_0,_0.2)] shadow-slate-300 ">
          <h1 className="text-4xl font-medium">Đổi mật khẩu</h1>
          <p className="text-slate-500">Điền vào biểu mẫu để đổi mật khẩu</p>

          <form action="" className="my-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Mật khẩu cũ</p>
                <input
                  id="password"
                  name="password_old"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Mật khẩu cũ"
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Mật khẩu mới</p>
                <input
                  id="password"
                  name="password_new"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Mật khẩu mới"
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">
                  Xác nhận mật khẩu
                </p>
                <input
                  id="password"
                  name="password_confirm"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Xác nhận mật khẩu"
                />
              </label>

              <button className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <span>Đổi mật khẩu</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
