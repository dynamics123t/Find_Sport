import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { SCHEMA_COMMENT, SCHEMA_UPDATE_SPORT } from "@/utils/constants/schema";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { putRequest } from "@/services/base/putRequest";
interface ZProps {
  id?: string;
  id_sport?: string;
  user?: {
    avatar?: string;
    id?: string;
    username?: string;
  };
  content?: string;
  image?: string;
  time_create?: string;
  onComment: () => void;
}
const UpdateSport = ({ id, onComment }: ZProps) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: SCHEMA_COMMENT,

    onSubmit: async ({ comment }) => {
      try {
        await putRequest("/comment/update", {
          id: id,
          content: comment,
        });
        toast.success("Bình luận thành công!!!");
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
    <div>
      {" "}
      <div className="w-full h-full">
        <h1 className="text-4xl font-medium">Sửa bình luận</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="description">
              <p className="font-medium text-slate-700 pb-2">Bình luận</p>
              <input
                name="comment"
                type="text"
                value={formik.values.comment}
                onChange={formik.handleChange}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Bình luận"
              />
            </label>
            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <span>Sửa bình luận</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSport;
