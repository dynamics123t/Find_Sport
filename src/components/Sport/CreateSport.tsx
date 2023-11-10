import React from "react";
import { useFormik } from "formik";
import { SCHEMA_CREATE_SPORT } from "@/utils/constants/schema";
import { postRequest } from "@/services/base/postRequest";
import { toast } from "react-hot-toast";
const CreateSport = () => {
  const formik = useFormik({
    initialValues: {
      namesport: "",
      address: "",
      price: "",
      description: "",
      phone: "",
      file_img: "",
    },

    validationSchema: SCHEMA_CREATE_SPORT,

    onSubmit: async ({
      namesport,
      file_img,
      address,
      price,
      description,
      phone,
    }) => {
      try {
        await postRequest("/sport/create", {
          name: namesport,
          img: file_img,
          address: address,
          price: price,
          description: description,
          phone: phone,
        });
        toast.success("Tạo sân thành công");
        console.log("123121232");
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
    <div>
      {" "}
      <div className="w-full h-full">
        <h1 className="text-4xl font-medium">Thêm mới sân thể thao</h1>

        <form onSubmit={formik.handleSubmit} className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="name">
              <p className="font-medium text-slate-700 pb-2">Tên sân</p>
              <input
                id="name"
                name="namesport"
                type="text"
                value={formik.values.namesport}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Tên sân"
                required
              />
            </label>
            <label htmlFor="address">
              <p className="font-medium text-slate-700 pb-2">Địa chỉ</p>
              <input
                id="address"
                name="address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Địa chỉ"
                required
              />
            </label>
            <label htmlFor="price">
              <p className="font-medium text-slate-700 pb-2">Giá tham khảo</p>
              <input
                id="price"
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Giá tham khảo"
                required
              />
            </label>
            <label htmlFor="description">
              <p className="font-medium text-slate-700 pb-2">Chi tiết</p>
              <input
                id="description"
                name="description"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Chi tiết"
                required
              />
            </label>
            <label htmlFor="phone">
              <p className="font-medium text-slate-700 pb-2">Số điện thoại</p>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Số điện thoại chủ sân"
                required
              />
            </label>
            <label htmlFor="file_img">
              <p className="font-medium text-slate-700 pb-2">Hình ảnh</p>
              <input
                id="file_img"
                name="file_img"
                type="file"
                value={formik.values.file_img}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Hình ảnh"
              />
              <p className="mt-1 text-sm text-gray-500" id="file_input_help">
                SVG, PNG, JPG or GIF.
              </p>
            </label>

            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              Thêm mới sân
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSport;
