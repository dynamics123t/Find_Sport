import { getRequest } from "@/services/base/getRequest";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
interface SProps {
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
const Invoice = () => {
  const [isNameUser, setNameUser] = useState<IProps>();
  useEffect(() => {
    getnameuser();
  }, []);
  const getnameuser = async () => {
    try {
      const data = (await getRequest("/user/me")) as any;
      setNameUser(data.data);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  const router = useRouter();
  const [ListCard, setListCard] = useState<SProps>();
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
  const handleLinkClick = () => {
    toast.success("Xác nhận hóa đơn thành công!");
    setTimeout(() => {
      router.push("/sports/bongda");
    }, 2000);
  };

  const searchParams = useSearchParams();
  const [isBooking, setBooking] = useState<CProps>();
  const [isTotalbooking, setTotalbooking] = useState<number>();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    getBooking();
  }, [page]);
  const currentDate = new Date();
  const currentTime = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();
  const getBooking = async () => {
    try {
      const data: any = await getRequest(
        `/booking?booking_id=${isBooking?.id}`
      );
      // console.log(data.data);

      setBooking(data.data);
      setTotalbooking(data.data);
    } catch (error) {
      toast.error("Server error!");
    }
  };
  return (
    <div>
      <h1 className="font-bold text-2xl my-4 text-center text-blue-600">
        Đặt sân trực tuyến
      </h1>
      <div className="flex justify-between mb-6">
        <h1 className="text-lg font-bold">Hóa đơn</h1>
        <div className="text-gray-700">
          <div>Ngày đặt: {formattedDate}</div>
          <div>Giờ dặt: {formattedTime}</div>
          <div>Tên sân: {ListCard?.name}</div>
          <div>Số chủ sân: {ListCard?.phone}</div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-1">Người dặt:</h2>

        <div className="text-gray-700 mb-2">{isNameUser?.username}</div>
        <div className="text-gray-700 mb-2">{isNameUser?.address}</div>
        <div className="text-gray-700 mb-2">{isNameUser?.phone}</div>
        <div className="text-gray-700">{isNameUser?.email}</div>
      </div>
      <table className="w-full mb-2">
        <thead>
          <tr>
            <th className="text-left text-lg font-bold">Chi tiết đơn hàng</th>
            <th className="text-right text-lg font-bold">Giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left text-gray-700">{ListCard?.name}</td>
            <td className="text-right text-gray-700">{ListCard?.price}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="text-left text-lg font-bold">Tổng</td>
            <td className="text-right text-lg font-bold">
              {ListCard?.price}₫{" "}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="text-right font-bold text-gray-700">
        <Link
          href={`https://vietqr.co/api/generate/vcb/1038826674/NGUYENDUYTAN/${ListCard?.price}/THANHTOANDATSAN`}
          target="_blank"
        >
          Vui lòng click vào QR để thanh toán chuyển khoản
          <Image
            className="ml-auto"
            src="/images/QR_thanhtoan.png"
            alt=""
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-gray-700">
            Cảm ơn bạn đã tin tưởng đặt sân chúng tôi
          </div>
          <div className="text-gray-700 text-sm">
            Vui lòng liên hệ chủ sân để xác nhận thanh toán
          </div>
          <div className="text-red-700 text-sm">
            Lưu ý : Kiểm tra thông tin kỹ trước khi xác nhận
          </div>
        </div>

        <div className="ml-auto">
          <Link
            href="/sports/bongda"
            onClick={handleLinkClick}
            className="w-[20%] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 "
          >
            Xác nhận
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
