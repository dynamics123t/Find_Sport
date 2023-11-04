import React from "react";
import Image from "next/image";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div>
      <aside className="bg-gradient-to-br from-green-800 to-green-500 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="relative border-b border-white/20">
          <a className="flex items-center gap-4 py-6 px-8" href="#/">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Admin Dashboard
            </h6>
          </a>
          <button
            className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            type="button"
          ></button>
        </div>
        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">
            <li>
              <Link
                aria-current="page"
                className="active"
                href="/admin/dashboard"
              >
                <button
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  <Image
                    src="/images/users-solid.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Quản lí người dùng
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link className="" href="/admin/sportmanagement">
                <button
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  <Image
                    src="/images/table-solid.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Quản lí sân thể thao
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <a className="" href="#">
                <button
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  <Image
                    src="/images/table-solid.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Quản lí bình luận
                  </p>
                </button>
              </a>
            </li>
          </ul>
          <ul className="mb-4 flex flex-col gap-1">
            <li>
              <a className="" href="#">
                <button
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  <Image
                    src="/images/right-from-bracket-solid.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Đăng xuất
                  </p>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
