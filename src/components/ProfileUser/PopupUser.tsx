import React from "react";
import Image from "next/image";
const PopupUser = () => {
  return (
    <div>
      {" "}
      <div className="w-full h-full">
        <h1 className="text-4xl font-medium">Đổi mật khẩu</h1>
        <p className="text-slate-500">Điền vào biểu mẫu để đổi mật khẩu</p>

        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="name">
              <p className="font-medium text-slate-700 pb-2">Tên</p>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Tên"
              />
            </label>
            <label htmlFor="Email">
              <p className="font-medium text-slate-700 pb-2">Email</p>
              <input
                id="email"
                name="email"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Email"
              />
            </label>
            <label htmlFor="Phone">
              <p className="font-medium text-slate-700 pb-2">Số điện thoại</p>
              <input
                id="phone"
                name="phone"
                type="number"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Số điện thoại"
              />
            </label>
            <label htmlFor="birthday">
              <p className="font-medium text-slate-700 pb-2">Ngày sinh</p>
              <input
                id="birthday"
                name="birthday"
                type="date"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Ngày sinh"
              />
            </label>
            <label htmlFor="address">
              <p className="font-medium text-slate-700 pb-2">Địa chỉ</p>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Địa chỉ"
              />
            </label>
            <button className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <span>Sửa thông tin</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupUser;
