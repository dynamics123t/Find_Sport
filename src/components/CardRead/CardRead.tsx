import React from "react";
import Image from "next/image";
interface IProps {
  label?: string;
  title?: string;
  img?: string;
  href?: string;
}
const CardRead = ({ label, title, img, href }: IProps) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={img} />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {label}
          </p>
          <a
            href={href}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Đọc thêm
            <Image
              src="/images/chevron-right.png"
              alt=""
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardRead;
