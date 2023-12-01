import Heading from "@/components/Heading/Heading";
import PopupMessage from "@/components/Popup/PopupMessage";
import { getRequest } from "@/services/base/getRequest";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import viLocale from "date-fns/locale/vi";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ButtonPicker from "@/components/Button/ButtonPicker";
import PaginationCustom from "@/components/Pagination/Pagination";
import { postRequest } from "@/services/base/postRequest";
import Invoice from "@/components/Invoice/Invoice";
import moment from "moment";
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
interface CProps {
  id?: string;
  date_booking?: string;
  payment_status?: string;
  id_user?: string;
  id_sport?: string;
  time_booking?: string;
  mode_of_payment?: string;
  status?: string;
  time_create?: string;
  onView: () => void;
}
const pay = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const handleButtonClick = (label: string) => {
    const isSelected = selectedButtons.includes(label);
    const isAlreadyBooked = isBooking.some(
      (booking) => booking.time_booking === label
    );
    if (isSelected || isAlreadyBooked) {
      setSelectedButtons((prevSelected) =>
        prevSelected.filter((selectedLabel) => selectedLabel !== label)
      );
    } else {
      setSelectedButtons((prevSelected) => [...prevSelected, label]);
    }
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
    footer = (
      <p>Bạn chọn {format(selected, "yyyy-MM-dd", { locale: viLocale })}.</p>
    );
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
  const [isInvoice, setInvoice] = useState(false);
  const [isChangeText, setChangeText] = useState(false);
  const router = useRouter();
  const [ListCard, setListCard] = useState<IProps>();
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getSport(id);
    }
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
  const searchParams = useSearchParams();
  const [isBooking, setBooking] = useState<CProps[]>([]);
  const [isTotalbooking, setTotalbooking] = useState<number>();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    getBooking();
  }, [selected, page]);

  const getBooking = async () => {
    try {
      const data: any = await getRequest(
        `/booking/sport?sport_id=${id}&date_booking=${format(
          selected as Date,
          "yyyy-MM-dd"
        )}&skip=${(page - 1) * 10}&limit=${20}`
        //    `/booking?skip=${(page - 1) * 10}&limit=${10}`
      );
      console.log(data.data);

      setBooking(data.data);
      setTotalbooking(data.data);
    } catch (error) {
      // toast.error("Server error!");
    }
  };
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const handlePaymentMethodChange = (event: any) => {
    setSelectedPaymentMethod(event.target.value);
  };
  const { id } = router.query;
  if (!id) {
    console.error("Tham số 'id' không tồn tại trong URL.");
    return null;
  }
  console.log(id);
  const handeleBooking = async () => {
    try {
      const data: any = await postRequest("/booking/create", {
        id_sport: id,
        time_booking: selectedButtons,
        date_booking: format(selected as Date, "yyyy-MM-dd"),
        mode_of_payment: selectedPaymentMethod,
        payment_status: true,
        language: "vn",
        bank_code: "NCB",
      });
      if (selectedPaymentMethod === "BANKING") {
        router.push(data.data);
      }
      setInvoice(true);
      toast.success("Xuất hóa đơn thanh toán thành công!!");
    } catch (error: any) {
      console.log(error);
      toast.error(
        `Thanh toán không thành công : ${error.response?.data?.detail?.message}`
      );
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
      <PopupMessage
        maxWidth="max-w-[800px]"
        isOpen={isInvoice}
        onCLickOutSide={() => setInvoice(false)}
      >
        <div className="w-[700px]">
          <Invoice />
        </div>
      </PopupMessage>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col p-8">
          <div className="pb-8">
            <Heading
              title="Đặt sân"
              pageNames={[
                "Trang chủ",
                "Sân bóng đá",
                ListCard?.name || "Default Title",
                "Đặt sân",
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
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-[80%] flex flex-col border-2 rounded-lg mb-8">
          <div className="w-full h-[50px] bg-[#ECECEC] justify-center items-center flex rounded-t-lg">
            <p className="font-semibold text-[16px]">SÂN ĐÃ THUÊ</p>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    id_user
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ngày thuê
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thời gian thuê
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hình thức thanh toán
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Trạng thái
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thời gian đặt
                  </th>
                </tr>
              </thead>
              <tbody>
                {isBooking.map((rowData, index) => (
                  <tr key={rowData.id} className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{rowData.id_user}</td>
                    <td className="px-6 py-4">{rowData.date_booking}</td>
                    <td className="px-6 py-4">{rowData.time_booking}</td>
                    <td className="px-6 py-4">{rowData.mode_of_payment}</td>
                    <td className="px-6 py-4">{rowData.status}</td>

                    <td className="px-6 py-4">
                      {moment(rowData?.time_create).calendar()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                onDayClick={() => {
                  getBooking();
                }}
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
                    disabled={isBooking.some(
                      (booking) => booking.time_booking === buttonLabel
                    )}
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
                  type="radio"
                  value="CASH"
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  checked={selectedPaymentMethod === "CASH"}
                  onChange={handlePaymentMethodChange}
                />
                <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">
                  Thanh toán bằng tiền mặt
                </label>
              </div>
              <div className="w-[48%] px-3 flex items-center border border-gray-200 rounded ">
                <input
                  type="radio"
                  value="BANKING"
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  checked={selectedPaymentMethod === "BANKING"}
                  onChange={handlePaymentMethodChange}
                />
                <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">
                  Thanh toán bằng chuyển khoản
                </label>
              </div>
            </div>
          </div>
          <div className="p-6 flex justify-center items-center ">
            <button
              type="button"
              onClick={() => {
                handeleBooking();
              }}
              className="w-[20%] justify-center items-center flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Đặt sân
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pay;
