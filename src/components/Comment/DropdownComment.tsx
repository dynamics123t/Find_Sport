import useClickOutSide from "@/utils/hook/useClickOutSide";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PopupMessage from "../Popup/PopupMessage";
import UpdateComment from "./UpdateComment";
import { toast } from "react-hot-toast";
import { deleteRequest } from "@/services/base/deleteRequest";
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
  onLoad: () => void;
}
const DropdownComment = ({ id, onLoad }: ZProps) => {
  const [isDropDown, setDropDown] = useState(false);
  const [isComment, setComment] = useState<ZProps[]>([]);

  const dropDownRef = useRef<HTMLDivElement>(null);
  useClickOutSide(
    () => {
      isDropDown && setDropDown(false);
    },
    dropDownRef,
    [isDropDown]
  );
  const handleCancel = async () => {
    try {
      const data = await deleteRequest(`/comment/${id}`, {
        id: id,
      });
      onLoad();
      toast.success("Xóa bình luận thành công");
    } catch (error) {
      toast.error("Server error!");
    }
  };
  const [isPopupU, setPopupU] = useState(false);
  return (
    <div className="relative" ref={dropDownRef}>
      <PopupMessage
        maxWidth="max-w-[700px]"
        isOpen={isPopupU}
        onCLickOutSide={() => setPopupU(false)}
      >
        <div className="w-[600px]">
          <UpdateComment id={id} onComment={() => {}} />
        </div>
      </PopupMessage>
      <button
        onClick={() => setDropDown(!isDropDown)}
        className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <Image
          className="cursor-pointer"
          src="/images/dot.png"
          alt=""
          width={24}
          height={24}
        />
      </button>

      {isDropDown && (
        <div
          id="dropdownAvatarName"
          className="z-10 top-10 left-0 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            <li>
              <div
                id={id}
                onClick={() => setPopupU(true)}
                className="block px-4 py-2 font-bold hover:bg-gray-100"
              >
                Sửa
              </div>
            </li>
            <li>
              <div
                onClick={handleCancel}
                className="block px-4 py-2 font-bold hover:bg-gray-100 text-red-600 "
              >
                Xóa
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownComment;
