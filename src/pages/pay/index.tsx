import Heading from "@/components/Heading/Heading";
import PopupMessage from "@/components/Popup/PopupMessage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const pay = () => {
  const [isPopup, setPopup] = useState(false);
  const [isChangeText, setChangeText] = useState(false);
  return (
    <div className="w-full h-full">
      <PopupMessage
        maxWidth="max-w-[800px]"
        isOpen={isPopup}
        onCLickOutSide={() => setPopup(false)}
      >
        <div>
          <img
            src="/images/sanphui1.png"
            className="w-[800px] h-[520px]"
            alt=""
          />
        </div>
      </PopupMessage>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col p-8">
          <div className="pb-8">
            <Heading
              title="Thanh Toán"
              pageNames={[
                "Trang chủ",
                "Sân bóng đá",
                "Sân chuyên việt",
                "Thanh toán",
              ]}
            />
            <img
              onClick={() => setPopup(true)}
              src="/images/sanphui1.png"
              className="w-[800px] h-[520px]"
              alt=""
            />
          </div>

          <div className="w-[800px] flex flex-col border-2 rounded-lg mb-8">
            <div className="w-[798px] h-[50px] bg-[#ECECEC] justify-center items-center flex rounded-t-lg">
              <p className="font-semibold text-[16px]">SÂN ĐÃ THUÊ</p>
            </div>
            <div className="p-6">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Tên sân
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Ngày thuê
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Giờ bắt đầu
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Giờ kết thúc
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-[800px] flex flex-col border-2 rounded-lg">
            <div className="w-[798px] h-[50px] bg-[#ECECEC] justify-center items-center flex rounded-t-lg">
              <p className="font-semibold text-[16px]">ĐẶT SÂN</p>
            </div>
            <div className="p-6 flex justify-between ">
              <div className="w-1/3 px-3">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Chọn ngày
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select date"
                />
              </div>

              <div className="w-1/3 px-3">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Chọn giờ bắt đầu
                </label>
                <input
                  type="time"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select date"
                />
              </div>
              <div className="w-1/3  px-3">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Chọn giờ kết thúc
                </label>
                <input
                  type="time"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="p-6 flex justify-between items-center ">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Chọn phương thức thanh toán :
              </label>
              <div className="w-1/3 px-3 flex items-center border border-gray-200 rounded ">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">
                  Thanh toán bằng tiền mặt
                </label>
              </div>
              <div className="w-1/3 px-3 flex items-center border border-gray-200 rounded ">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">
                  Thanh toán bằng chuyển khoản
                </label>
              </div>
            </div>
            <div className="p-6 flex justify-between ">
              <button
                type="button"
                className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 "
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
        <div className="h-full flex mb-auto mt-36">
          <div className="w-[350px] h-[235px] flex flex-col border-2 rounded-lg mb-5">
            <div className="w-[348px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <Image src="/images/pin.png" alt="" width={24} height={24} />
              <p className="font-semibold text-[16px]">ĐỊA CHỈ</p>
            </div>
            <div className="flex flex-col p-4">
              <p>Số 98 Tiểu La, Hòa Thuận Đông, Hải Châu, Đà Nẵng, Việt Nam</p>
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
                {isChangeText ? "12344567" : "XEM SỐ CHỦ SÂN"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pay;
