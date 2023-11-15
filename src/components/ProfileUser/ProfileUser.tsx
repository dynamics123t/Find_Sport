import React, { useEffect, useState } from "react";
import DetailUser from "./DetailUser";
import toast from "react-hot-toast";
import Image from "next/image";
import PopupMessage from "../Popup/PopupMessage";
import { useRouter } from "next/router";
import PopupUser from "./PopupUser";
import { getRequest } from "@/services/base/getRequest";
import { useFormik } from "formik";
import { SCHEMA_UPDATE_AVATAR } from "@/utils/constants/schema";
import { postRequest } from "@/services/base/postRequest";
import { updatePartialUser } from "@/redux/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
interface IProps {
  id?: string;
  username?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  birthday?: string;
  address?: string;
  onView: () => void;
}
const ProfileUser = () => {
  const [avatar, setVartar] = useState<File | null>(null);
  const [isAvatar, setAvatar] = useState(false);
  const [isPopup, setPopup] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isNameUser, setNameUser] = useState<IProps>();
  useEffect(() => {
    getnameuser();
  }, []);

  const handleSubmit = async () => {
    if (!avatar) return;
    try {
      const form = new FormData();
      form.append("avatar", avatar);

      const data: any = await postRequest("/user/upload_avatar", form, {
        "Content-Type": "multipart/form-data",
      });

      dispatch(
        updatePartialUser({
          actived: true,
          avatar: data.avatar,
        })
      );
      // router.replace("/");
    } catch (error) {
      console.error("Error uploading avatar:", error);
      toast.error("Error uploading avatar");
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
  return (
    <>
      <PopupMessage
        maxWidth="max-w-[700px]"
        isOpen={isPopup}
        onCLickOutSide={() => setPopup(false)}
      >
        <div className="w-[600px]">
          <PopupUser></PopupUser>
        </div>
      </PopupMessage>
      <PopupMessage
        maxWidth="max-w-[400px]"
        isOpen={isAvatar}
        onCLickOutSide={() => setAvatar(false)}
      >
        <div className="w-[300px]">
          <form>
            <label>
              <p className="font-medium text-slate-400 pb-2">
                Upload ảnh đại diện
              </p>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setVartar(e.target.files ? e.target.files[0] : null)
                }
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
            </label>
            <button
              type="submit"
              // disabled={!avatar}
              onClick={handleSubmit}
              className="w-full py-3 mt-6 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <span>Upload ảnh</span>
            </button>
          </form>
        </div>
      </PopupMessage>
      <div>
        <div className="w-[95%] mx-auto mt-10 bg-white shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <img
              className="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
          <div
            onClick={() => setAvatar(true)}
            className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
          >
            <img
              className="object-cover object-center h-32 hover:opacity-90"
              src={isNameUser?.avatar}
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">{isNameUser?.username}</h2>
            <p className="text-gray-500">{isNameUser?.email}</p>
          </div>
          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-center justify-around">
              <Image
                src="/images/star-solid.svg"
                alt=""
                width={24}
                height={24}
              />
              <div>2k</div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <Image
                src="/images/users-solid.svg"
                alt=""
                width={24}
                height={24}
              />
              <div>15</div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <Image
                src="/images/heart-solid.svg"
                alt=""
                width={24}
                height={24}
              />
              <div>10k</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <Image
                src="/images/comment-solid.svg"
                alt=""
                width={24}
                height={24}
              />
              <div>15</div>
            </li>
          </ul>
          <div className="p-4 border-t mx-8 mt-2">
            <DetailUser
              key={isNameUser?.id}
              username={isNameUser?.username}
              email={isNameUser?.email}
              phone={isNameUser?.phone}
              birthday={isNameUser?.birthday}
              address={isNameUser?.address}
              onView={getnameuser}
            />
            <button
              onClick={() => setPopup(true)}
              className="w-1/6 block mx-auto mt-5 rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
            >
              Sửa thông tin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
