import Footer from "@/components/Footer/footer";
import Header from "@/components/Headder/header";
import Contact from "@/components/Contact/Contact";
import React from "react";
import Heading from "@/components/Heading/Heading";

export const index = () => {
  return (
    <div className="w-full h-full">
      <Header></Header>
      <div>
        <div className="flex flex-col pt-8 pl-8">
          <Heading
            title="Liên hệ đối tác"
            pageNames={["Trang chủ", "Liên hệ đối tác"]}
          />
        </div>
        <div className="flex">
          <div className="w-1/2 flex flex-col ml-[30px]">
            <p className="text-[28px] py-[20px] inline-block font-normal">
              Liên hệ
            </p>
            <Contact label="* Họ và tên" plahoder="Họ và tên" />
            <Contact label="* Số điện thoại" plahoder="Số điện thoại" />
            <Contact label="Email" plahoder="Email" />
            <Contact label="Địa Chỉ" plahoder="Địa chỉ" />
            <div>
              <label
                htmlFor=""
                className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
              >
                Nội dung
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Viết nội dung"
                className="block w-full mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
              <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center">
                Gửi liên hệ
              </button>
            </div>
          </div>
          <div className="w-1/2 m-8 border-2">
            <iframe
              className="p-8"
              src="https://www.google.com/maps/d/u/0/embed?mid=1joN4LtBZ6uaUSlv0fTpGFr8bTOuBgm4&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
            <div className="p-8">
              <p className="text-[24px] font-semibold">Nguyễn Duy Tân</p>
              <span className="flex">
                <p className="font-semibold">Địa chỉ :</p>
                566 Núi Thành, Hoà Cường Nam, Hải Châu, Đà Nẵng
              </span>
              <span className="flex">
                <p className="font-semibold">Điện thoại :</p>0966751xxx
              </span>
              <span className="flex">
                <p className="font-semibold">Email :</p>tandeptrai2001@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default index;
