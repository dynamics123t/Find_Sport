import React, { useState } from "react";
import { useFormik } from "formik";
import { SCHEMA_CREATE_SPORT } from "@/utils/constants/schema";
import { postRequest } from "@/services/base/postRequest";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
const CreateSport = () => {
  const [file, setImage] = useState<File | null>(null);
  const router = useRouter();
  const [dataImage, setDataImage] = useState<string>("");

  const handleSubmit = async () => {
    if (!file) return;
    try {
      const form = new FormData();
      form.append("file", file);
      const res: any = await postRequest("/upload", form, {
        "Content-Type": "multipart/form-data",
      });

      setDataImage(res);
    } catch (error) {
      setDataImage("");
      console.error("Error uploading :", error);
      toast.error("Error uploading");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      price: "",
      description: "",
      phone: "",
      img: dataImage,
    },

    validationSchema: SCHEMA_CREATE_SPORT,

    onSubmit: async (values) => {
      const { name, address, price, description, phone } = values;

      try {
        const data = await postRequest("/sport/create", {
          name: name,
          address: address,
          price: price,
          description: description,
          phone: phone,
          img: dataImage,
        });

        setDataImage("");
        toast.success("Tạo sân thành công");
        formik.resetForm();
        router.reload();
      } catch (error: any) {
        toast.error(
          `Thêm không thành công : ${error.response?.data?.detail?.message}`
        );
      }
    },
  });
  return (
    <div>
      {" "}
      <div className="w-full h-full">
        <h1 className="text-4xl font-medium">Thêm mới sân thể thao</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">
              <p className="font-medium text-slate-700 pb-2">Tên sân</p>
              <input
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Tên sân"
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
            <label htmlFor="price">
              <p className="font-medium text-slate-700 pb-2">Giá tham khảo</p>
              <input
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Giá tham khảo"
              />
            </label>
            <label htmlFor="description">
              <p className="font-medium text-slate-700 pb-2">Chi tiết</p>
              <input
                name="description"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Chi tiết"
              />
            </label>
            <label htmlFor="phone">
              <p className="font-medium text-slate-700 pb-2">Số điện thoại</p>
              <input
                name="phone"
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Số điện thoại chủ sân"
              />
            </label>
            <label htmlFor="img">
              <p className="font-medium text-slate-700 pb-2">Hình ảnh</p>
              <input
                name="img"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImage(e.target.files ? e.target.files[0] : null)
                }
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Hình ảnh"
              />
              <p className="mt-1 text-sm text-gray-500">
                SVG, PNG, JPG or GIF.
              </p>
            </label>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <span>Thêm sân</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSport;
