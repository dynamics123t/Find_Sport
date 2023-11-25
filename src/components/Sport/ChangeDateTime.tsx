import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { format, parse } from "date-fns";
import viLocale from "date-fns/locale/vi";
import { putRequest } from "@/services/base/putRequest";
import { useSearchParams } from "next/navigation";
import ButtonPicker from "../Button/ButtonPicker";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { getRequest } from "@/services/base/getRequest";
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
}
const StatusBooking = ({ id, id_sport }: CProps) => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const router = useRouter();
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
  console.log(id_sport);
  console.log(id);

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
  const route = useRouter();
  useEffect(() => {
    getBooking();
  }, [selected]);

  const searchParams = useSearchParams();
  const [isBooking, setBooking] = useState<CProps[]>([]);
  const [isTotalbooking, setTotalbooking] = useState<number>();
  const page = Number(searchParams.get("page")) || 1;
  const getBooking = async () => {
    try {
      const data: any = await getRequest(
        `/booking/sport?sport_id=${id_sport}&date_booking=${format(
          selected as Date,
          "yyyy-MM-dd"
        )}&skip=${(page - 1) * 10}&limit=${20}`
      );
      console.log(data.data);

      setBooking(data.data);
      setTotalbooking(data.data);
    } catch (error) {
      // toast.error("Server error!");
    }
  };
  const handeleBooking = async () => {
    if (!id || !id_sport) {
      console.error("Giá trị id hoặc id_sport không được định nghĩa.");
      return;
    }
    try {
      const data: any = await putRequest(`/booking/${id}`, {
        id_sport: id_sport,
        time_booking: selectedButtons,
        date_booking: format(selected as Date, "yyyy-MM-dd"),
      });
      router.reload();
      console.log(data.data);
      toast.success("Sửa lịch thành công!!");
    } catch (error: any) {
      console.log(error);
      toast.error(
        `Sửa lịch không thành công : ${error.response?.data?.detail?.message}`
      );
    }
  };

  return (
    <div>
      <div className="w-full h-full">
        <h1 className="text-4xl font-medium mb-4">Cập nhật lịch đặt sân</h1>

        <div className="p-6 flex justify-between ">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Chọn ngày
            </label>
            <DayPicker
              className=""
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

          <div>
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
  );
};

export default StatusBooking;
