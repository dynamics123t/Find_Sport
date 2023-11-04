import React from "react";
import Image from "next/image";
const UpdateSport = () => {
  return (
    <div>
      {" "}
      <div className="w-full h-full">
        <h1 className="text-4xl font-medium">Sửa lại sân thể thao</h1>

        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="name">
              <p className="font-medium text-slate-700 pb-2">Tên sân</p>
              <input
                id="name"
                name="namesport"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Tên sân"
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
            <label htmlFor="price">
              <p className="font-medium text-slate-700 pb-2">Giá tham khảo</p>
              <input
                id="price"
                name="price"
                type="number"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Giá tham khảo"
              />
            </label>
            <label htmlFor="file_img">
              <p className="font-medium text-slate-700 pb-2">Hình ảnh</p>
              <input
                id="file_img"
                name="file_img"
                type="file"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Hình ảnh"
              />
              <p className="mt-1 text-sm text-gray-500" id="file_input_help">
                SVG, PNG, JPG or GIF.
              </p>
            </label>

            <button className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <span>Sửa mới sân</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSport;
