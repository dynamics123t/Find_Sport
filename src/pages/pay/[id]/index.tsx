import Heading from "@/components/Heading/Heading";
import PopupMessage from "@/components/Popup/PopupMessage";
import { getRequest } from "@/services/base/getRequest";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import viLocale from "date-fns/locale/vi";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ButtonPicker from "@/components/Button/ButtonPicker";
import PaginationCustom from "@/components/Pagination/Pagination";
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
const pay = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const handleButtonClick = (label: string) => {
    const isSelected = selectedButtons.includes(label);
    if (isSelected) {
      setSelectedButtons((prevSelected) =>
        prevSelected.filter((selectedLabel) => selectedLabel !== label)
      );
    } else {
      setSelectedButtons((prevSelected) => [...prevSelected, label]);
    }
    // setSelectedButton(label);
  };
  const buttonList = [
    "5:00 - 6:00",
    "6:00 - 7:00",
    "7:00 - 8:00",
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00",
  ];
  const [selected, setSelected] = useState<Date>();
  let footer = <p>Vui lòng chọn ngày</p>;
  if (selected) {
    footer = <p>Bạn chọn {format(selected, "PP", { locale: viLocale })}.</p>;
  }
  const isPastDate = (date: any) => {
    const today = new Date();
    return date < today && !isSameDay(date, today);
  };
  const isSameDay = (date1: any, date2: any) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };
  const [isPopup, setPopup] = useState(false);
  const [isChangeText, setChangeText] = useState(false);
  const router = useRouter();
  // const { id } = router.query;
  const [ListCard, setListCard] = useState<IProps>();
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getSport(id);
    }
  }, [router.query.id]);
  const getSport = async (id: any) => {
    try {
      const data: any = await getRequest(`/sport/${id}`, {});
      console.log(data.data);

      setListCard(data.data);
    } catch (error) {
      console.log(error);
      toast.error("Server error!");
    }
  };
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
              src={ListCard?.img}
              className="w-[800px] h-[520px]"
              alt=""
            />
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
                {isChangeText ? ListCard?.phone : "XEM SỐ CHỦ SÂN"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-[80%] flex flex-col border-2 rounded-lg mb-8">
          <div className="w-full h-[50px] bg-[#ECECEC] justify-center items-center flex rounded-t-lg">
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
                      Người thuê
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ngày thuê
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Khung giờ thuê
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Thời gian còn lại
                    </th>
                  </tr>
                </thead>
                <tbody>
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
              <div className="flex justify-center items-center">
                <PaginationCustom
                  handleChange={() => {}}
                  page={1}
                  total_record={1 || 0}
                  record_per_page={10}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] flex flex-col border-2 rounded-lg">
          <div className="w-full h-[50px] bg-[#ECECEC] justify-center items-center flex rounded-t-lg">
            <p className="font-semibold text-[16px]">ĐẶT SÂN</p>
          </div>
          <div className="p-6 flex justify-between ">
            <div className="w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Chọn ngày
              </label>
              <DayPicker
                className="pl-16"
                mode="single"
                selected={selected}
                onSelect={setSelected}
                disabled={isPastDate}
                footer={footer}
                locale={viLocale}
              />
            </div>

            <div className="w-2/3">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Chọn giờ bắt đầu
              </label>
              <div className="grid grid-cols-3 gap-2 pt-4">
                {buttonList.map((buttonLabel, index) => (
                  <ButtonPicker
                    key={index}
                    label={buttonLabel}
                    selected={selectedButtons.includes(buttonLabel)}
                    onClick={() => handleButtonClick(buttonLabel)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="px-12">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Chọn phương thức thanh toán
            </label>
            <div className="flex items-center justify-between">
              <div className="w-[48%] pl-3 flex items-center border border-gray-200 rounded ">
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
              <div className="w-[48%] px-3 flex items-center border border-gray-200 rounded ">
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
          </div>
          <div className="p-6 flex justify-center items-center ">
            <button
              // href={"/pay"}
              //  type="button"
              className="w-[20%] justify-center items-center flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pay;
