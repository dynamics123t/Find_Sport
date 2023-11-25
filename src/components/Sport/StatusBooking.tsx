import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { putRequest } from "@/services/base/putRequest";
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
const StatusBooking = ({ id }: CProps) => {
  const [selectedStatusMethod, setSelectedStatusMethod] = useState("");
  const handlePaymentMethodChange = (event: any) => {
    setSelectedStatusMethod(event.target.value);
  };
  const route = useRouter();
  console.log(selectedStatusMethod);
  console.log(id);
  const handeleBooking = async () => {
    try {
      const data: any = await putRequest(
        `/booking/${id}/status?status=${selectedStatusMethod}`
      );
      route.reload();
      toast.success("Cập nhật trạng thái thành công!");
    } catch (error: any) {
      console.log(error);
      toast.error(
        `Thanh toán không thành công : ${error.response?.data?.detail?.message}`
      );
    }
  };
  return (
    <div>
      <div className="w-full h-full">
        <h1 className="text-4xl font-medium mb-4">Cập nhật trạng thái sân</h1>
        <select
          onChange={handlePaymentMethodChange}
          value={selectedStatusMethod}
          className="bg-gray-50 mb-24 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        >
          <option value="DA_DAT">Đã đặt</option>
          <option value="HUY">Hủy</option>
          <option value="DA_NHAN_SAN">Đã nhận sân</option>
          <option value="QUA_HAN">Quá hạn</option>
        </select>
        <button
          type="submit"
          onClick={handeleBooking}
          className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-500 hover:shadow inline-flex space-x-2 items-center justify-center"
        >
          <span>Cập nhật trạng thái</span>
        </button>
      </div>
    </div>
  );
};

export default StatusBooking;
