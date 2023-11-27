import { getRequest } from "@/services/base/getRequest";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import PaginationCustom from "@/components/Pagination/Pagination";
import PopupMessage from "@/components/Popup/PopupMessage";
import Invoice from "@/components/Invoice/Invoice";
import ChangeDateTime from "@/components/Sport/ChangeDateTime";
import moment from "moment";
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
const history = () => {
  const [isId, setId] = useState<string | undefined>(undefined);

  const [isIdSport, setIdSport] = useState<string>();
  const searchParams = useSearchParams();
  const [isBooking, setBooking] = useState<CProps[]>([]);
  const [isBookingid, setBookingid] = useState<CProps>();
  const [isTotalbooking, setTotalbooking] = useState<number>();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    getBooking();
  }, [page]);

  const getBooking = async () => {
    try {
      const data: any = await getRequest(
        `/booking/user?skip=${(page - 1) * 10}&limit=${10}`
      );
      setBooking(data.data);
      setTotalbooking(data.data);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  const getBookingid = async (id: string) => {
    try {
      const data: any = await getRequest(`/booking?booking_id=${id}`);
      console.log(data.data);

      setBookingid(data.data);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  const [isPopup, setPopup] = useState(false);
  const [isPopupDT, setPopupDT] = useState(false);
  return (
    <div>
      <PopupMessage
        maxWidth="max-w-[700px]"
        isOpen={isPopup}
        onCLickOutSide={() => setPopup(false)}
      >
        <Invoice></Invoice>
      </PopupMessage>
      <PopupMessage
        maxWidth="max-w-[1000px]"
        isOpen={isPopupDT}
        onCLickOutSide={() => setPopupDT(false)}
      >
        <ChangeDateTime id={isId} id_sport={isIdSport}></ChangeDateTime>
      </PopupMessage>
      <div className="relative overflow-x-auto">
        <table className="w-full ml-auto text-sm text-left text-gray-500 mt-8">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                id_user
              </th>
              <th scope="col" className="px-6 py-3">
                id_sport
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
                Trạng thái sân
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian đặt
              </th>
              <th scope="col" className="px-6 py-3">
                Xem hóa đơn
              </th>
            </tr>
          </thead>
          <tbody>
            {isBooking.map((rowData, index) => (
              <tr key={rowData.id} className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{rowData.id_user}</td>
                <td className="px-6 py-4">{rowData.id_sport}</td>
                <td className="px-6 py-4">{rowData.date_booking}</td>
                <td className="px-6 py-4">{rowData.time_booking}</td>
                <td className="px-6 py-4">{rowData.mode_of_payment}</td>
                <td className="px-6 py-4">{rowData.status}</td>
                <td className="px-6 py-4">
                  {moment(rowData?.time_create).calendar()}
                </td>
                <td className="px-6 py-4 flex justify-between items-center">
                  <a
                    onClick={() => {
                      setPopup(true);
                      rowData.id && getBookingid(rowData.id);
                    }}
                    className="font-medium text-blue-600 hover:cursor-pointer"
                  >
                    <Image
                      src="/images/hoadon.png"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    onClick={() => {
                      setPopupDT(true);
                      rowData.id && getBookingid(rowData.id);
                      setId(rowData.id || undefined);
                      setIdSport(rowData.id_sport);
                    }}
                    className="font-medium text-blue-600 hover:cursor-pointer"
                  >
                    Đổi lịch
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center">
          <PaginationCustom
            handleChange={() => {}}
            page={page}
            total_record={isTotalbooking || 0}
            record_per_page={10}
          />
        </div>
      </div>
    </div>
  );
};

export default history;
