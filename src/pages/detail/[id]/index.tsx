import Heading from "@/components/Heading/Heading";
import PopupMessage from "@/components/Popup/PopupMessage";
import { getRequest } from "@/services/base/getRequest";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DropdownComment from "@/components/Comment/DropdownComment";
import { SCHEMA_COMMENT, SCHEMA_RECOMMENT } from "@/utils/constants/schema";
import { useFormik } from "formik";
import { postRequest } from "@/services/base/postRequest";
import moment from "moment";
import DropdownRecomment from "@/components/ReComment/DropdownRecomment";
interface IProps {
  id?: string;
  name?: string;
  address?: string;
  phone?: string;
  description?: string;
  price?: string;
  img?: string;
  onAccepted: () => void;
}
interface UProps {
  id?: string;
  username?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  birthday?: string;
  address?: string;
  onView: () => void;
}

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

interface ReCmtProps {
  id?: string;
  user?: {
    avatar?: string;
    id?: string;
    username?: string;
  };
  id_cmt?: string;
  content?: string;
  image?: string;
  time_create?: string;
  onRecomment: () => void;
}

const index = () => {
  const router = useRouter();
  const [isPopup, setPopup] = useState(false);
  const [isChangeText, setChangeText] = useState(false);
  const [ListCard, setListCard] = useState<IProps>();
  const [isNameUser, setNameUser] = useState<UProps>();
  const [isComment, setComment] = useState<ZProps[]>([]);
  const [isReComment, setReComment] = useState<ReCmtProps[]>([]);
  const [Load, setLoad] = useState<boolean>(false);
  const [LoadLoadCreateComment, setLoadCreateComment] =
    useState<boolean>(false);
  const [FormRecomment, setFormRecomment] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(
    null
  );
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getSport(id);
    }
    getnameuser();
  }, [router.query.id]);
  const getSport = async (id: any) => {
    try {
      const data: any = await getRequest(`/sport/${id}`);
      console.log(data.data);

      setListCard(data.data);
    } catch (error) {
      console.log(error);
      toast.error("Server error!");
    }
  };
  const getnameuser = async () => {
    try {
      const data = (await getRequest("/user/me")) as any;
      setNameUser(data.data);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getComment(id);
    }
  }, [Load, LoadLoadCreateComment, router.query.id]);
  const getComment = async (id: any) => {
    try {
      const data: any = await getRequest(`/comment/${id}?skip=0&limit=10`);
      console.log(data.data);
      setComment(data.data);
    } catch (error) {
      console.log(error);
      toast.error("Server error!");
    }
  };
  useEffect(() => {
    if (isComment.length > 0) {
      const idComment = isComment[0].id;
      getRecomment(idComment);
    }
  }, [isComment]);
  const getRecomment = async (id: any) => {
    try {
      const data: any = await getRequest(`/recomment/${id}?skip=0&limit=10`);
      console.log(data.data);
      setReComment(data.data[0]);
    } catch (error) {
      console.log(error);
      toast.error("Server error!");
    }
  };
  const load = () => {
    setLoad(!Load);
  };
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: SCHEMA_COMMENT,

    onSubmit: async ({ comment }) => {
      try {
        await postRequest("/comment/create", {
          id_sport: router.query.id,
          content: comment,
          id_user: isNameUser?.id,
        });
        setLoadCreateComment(!LoadLoadCreateComment);
        formik.resetForm();
        toast.success("Bình luận thành công!!!");
      } catch (error: any) {
        if (error.response?.data?.statusCode === 404) {
          toast.error("This is an error!");
        } else {
          toast.error("serverError");
        }
      }
    },
  });
  const Reformik = useFormik({
    initialValues: {
      recomment: "",
    },
    validationSchema: SCHEMA_RECOMMENT,

    onSubmit: async ({ recomment }) => {
      try {
        const idCmt = isComment.length > 0 ? isComment[0].id : null;
        if (idCmt) {
          await postRequest("/recomment/create", {
            id_cmt: idCmt,
            content: recomment,
            id_user: isNameUser?.id,
          });
          setLoadCreateComment(!LoadLoadCreateComment);
          formik.resetForm();
          setFormRecomment(!FormRecomment);
          toast.success("Trả lời bình luận thành công!!!");
        } else {
          toast.error("No comment id available");
        }
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
      <PopupMessage
        maxWidth="max-w-[800px]"
        isOpen={isPopup}
        onCLickOutSide={() => setPopup(false)}
      >
        <div>
          <img src={ListCard?.img} className="w-[800px] h-[520px]" alt="" />
        </div>
      </PopupMessage>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col p-8">
          <div className="pb-8">
            <Heading
              title={ListCard?.name || "Default Title"}
              pageNames={[
                "Trang chủ",
                "Sân bóng đá",
                ListCard?.name || "Default Title",
              ]}
            />
            <img
              onClick={() => setPopup(true)}
              src={ListCard?.img ?? ""}
              key={ListCard?.img}
              className="w-[800px] h-[520px]"
              alt=""
            />
          </div>

          <div className="w-[800px] flex flex-col border-2 rounded-lg">
            <div className="w-[798px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <p className="font-semibold text-[16px]">MÔ TẢ SÂN</p>
            </div>
            <div className="p-6">
              <p className="font-bold text-[24px] mb-3">
                Bạn muốn thuê sân {ListCard?.name}
              </p>
              <p>{ListCard?.description}</p>
              <iframe
                className="mt-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15338.283354504956!2d108.21011974998179!3d16.035840954218735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c0801817c3%3A0x1702bb03f6985b2f!2zU8OibiBiw7NuZyDEkcOhIENodXnDqm4gVmnhu4d0!5e0!3m2!1svi!2s!4v1697477330405!5m2!1svi!2s"
                width="750"
                height="550"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col mt-10">
          <div className="w-[350px] h-[235px] flex flex-col border-2 rounded-lg mb-5">
            <div className="w-[348px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <Image src="/images/pin.png" alt="" width={24} height={24} />
              <p className="font-semibold text-[16px]">ĐỊA CHỈ</p>
            </div>
            <div className="flex flex-col p-4">
              <p>{ListCard?.address}</p>
              <Link
                href="https://www.google.com/maps/d/u/0/viewer?mid=1joN4LtBZ6uaUSlv0fTpGFr8bTOuBgm4&femb=1&ll=16.07053076103764%2C108.20902574218752&z=12"
                target="_blank"
                className="flex justify-center items-center bg-white hover:border-green-600 hover:text-green-600 text-black font-normal py-2 px-4 border border-black rounded my-[5px]"
              >
                XEM TRÊN BẢN ĐỒ
              </Link>
              <button
                onClick={() => setChangeText(!isChangeText)}
                className="bg-white hover:border-green-600 hover:text-green-600 text-black font-normal py-2 px-4 border border-black rounded"
              >
                {isChangeText ? ListCard?.phone : "XEM SỐ CHỦ SÂN"}
              </button>
            </div>
          </div>

          <div className="w-[350px] h-[135px] flex flex-col border-2 rounded-lg mb-5">
            <div className="w-[348px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <Image src="/images/pin.png" alt="" width={24} height={24} />
              <p className="font-semibold text-[16px]">ĐẶT SÂN</p>
            </div>
            <div className="flex flex-col p-4">
              <Link
                href={`/pay/${ListCard?.id}`}
                className="flex justify-center items-center bg-white hover:border-green-600 hover:text-green-600 text-black font-normal py-2 px-4 border border-black rounded my-[5px]"
              >
                ĐẶT SÂN NGAY
              </Link>
            </div>
          </div>

          <div className="w-[350px] flex flex-col border-2 rounded-lg">
            <div className="w-[348px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <p className="font-semibold text-[16px]">SÂN GẦN ĐÂY</p>
            </div>
            <div className="flex flex-col p-4">
              <div className="border-2 p-4">
                <Image
                  src="/images/sanphui2.png"
                  alt=""
                  width={300}
                  height={200}
                />
                <p>Sân bóng Tân Mai - Hoàng Mai</p>
                <p>
                  Địa chỉ: 409 Trưng Nữ Vương, Hòa Thuận Nam, Hải Châu, Đà Nẵng
                </p>
                <span className="flex">
                  <p className="font-semibold">Giá:</p>
                  <p className="ml-1 text-red-600 ">
                    200.000₫ - 350.000₫ / Trận
                  </p>
                </span>
              </div>
              <div className="border-2 p-4 my-[15px]">
                <Image
                  src="/images/sanphui3.png"
                  alt=""
                  width={300}
                  height={200}
                />
                <p>Sân bóng Tân Mai - Hoàng Mai</p>
                <p>
                  Địa chỉ: 409 Trưng Nữ Vương, Hòa Thuận Nam, Hải Châu, Đà Nẵng
                </p>
                <span className="flex">
                  <p className="font-semibold">Giá:</p>
                  <p className="ml-1 text-red-600 ">
                    200.000₫ - 350.000₫ / Trận
                  </p>
                </span>
              </div>
              <div className="border-2 p-4">
                <Image
                  src="/images/sanphui4.png"
                  alt=""
                  width={300}
                  height={200}
                />
                <p>Sân bóng Tân Mai - Hoàng Mai</p>
                <p>
                  Địa chỉ: 409 Trưng Nữ Vương, Hòa Thuận Nam, Hải Châu, Đà Nẵng
                </p>
                <span className="flex">
                  <p className="font-semibold">Giá:</p>
                  <p className="ml-1 text-red-600 ">
                    200.000₫ - 350.000₫ / Trận
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <p className="font-bold">Bình luận</p>
        <div className="w-[80%]">
          <form className="mb-6" onSubmit={formik.handleSubmit}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Nhập bình luận
              </label>
              <textarea
                name="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                rows={4}
                placeholder="Viết bình luận"
                className="block w-full mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#53d882] hover:bg-[#8debad] text-white font-bold py-2 px-4 rounded"
            >
              Gửi bình luận
            </button>
          </form>
          {isComment.map((item, index) => (
            <div key={index} className="flex">
              <img
                className="w-10 h-10 rounded-full"
                src={item?.user?.avatar}
                alt="Rounded avatar"
              />
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <div className="ml-2 bg-[#53d882] px-2 py-1 rounded-2xl">
                    <span className="font-semibold">
                      {item?.user?.username}
                    </span>
                    <div>{item?.content}</div>
                  </div>
                  <div className="p-1 ml-3 cursor-pointer hover:bg-slate-200 rounded-full">
                    <DropdownComment
                      id={item?.id}
                      onLoad={load}
                    ></DropdownComment>
                  </div>
                </div>
                <div>
                  <div className="flex ml-6">
                    <div className="mr-3 font-medium cursor-pointer hover:underline">
                      Thích
                    </div>
                    <div
                      onClick={() => {
                        setFormRecomment(!FormRecomment);
                        setSelectedCommentId(item.id || null);
                      }}
                      className="mr-3 font-medium cursor-pointer hover:underline"
                    >
                      Phản hồi
                    </div>

                    <div className="font-light">
                      {moment(item?.time_create).fromNow()}
                    </div>
                  </div>
                </div>
                {isReComment
                  .filter((recommentItem) => recommentItem?.id_cmt === item?.id)
                  .map((item, index) => (
                    <div key={index} className="flex">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={item?.user?.avatar}
                        alt=""
                      />
                      <div className="flex flex-col">
                        <div className="flex justify-center items-center">
                          <div className="ml-2 bg-[#53d882] px-2 py-1 rounded-2xl">
                            <span className="font-semibold">
                              {item?.user?.username}
                            </span>
                            <div>{item?.content}</div>
                          </div>
                          <div className="p-1 ml-3 cursor-pointer hover:bg-slate-200 rounded-full">
                            <DropdownRecomment
                              id={item?.id}
                              onLoad={load}
                            ></DropdownRecomment>
                          </div>
                        </div>
                        <div>
                          <div className="flex ml-6">
                            <div className="mr-3 font-medium cursor-pointer hover:underline">
                              Thích
                            </div>
                            <div className="font-light">
                              {moment(item?.time_create).fromNow()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {FormRecomment && selectedCommentId === item?.id && (
                  <form className="mb-6" onSubmit={Reformik.handleSubmit}>
                    <label htmlFor="recomment" className="sr-only">
                      Nhập bình luận
                    </label>
                    <textarea
                      name="recomment"
                      value={Reformik.values.recomment}
                      onChange={Reformik.handleChange}
                      rows={2}
                      placeholder="Viết bình luận"
                      className="block w-full mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#53d882] hover:bg-[#8debad] text-white font-bold py-2 px-4 rounded"
                    >
                      Gửi bình luận
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
