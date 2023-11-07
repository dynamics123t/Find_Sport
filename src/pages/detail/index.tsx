import Footer from "@/components/Footer/footer";
import Header from "@/components/Headder/header";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col p-8">
          <div className="pb-8">
            <Heading
              title="Sân chuyên việt"
              pageNames={["Trang chủ", "Sân bóng đá", "Sân chuyên việt"]}
            />
            <img
              src="/images/sanphui1.png"
              className="w-[800px] h-[520px]"
              alt=""
            />
          </div>

          <div className="w-[800px] flex flex-col border-2 rounded-lg">
            <div className="w-[798px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <p className="font-semibold text-[16px]">MÔ TẢ SÂN</p>
            </div>
            <div className="p-6">
              <p className="font-bold text-[24px] mb-3">
                Bạn muốn thuê sân bóng đá Chuyên Việt
              </p>
              <p>
                Sân bóng Chuyên Việt là sân bóng lâu đời, mới được chủ đầu tư
                chỉnh trang, nâng cấp và đang là một trong những sân bóng đẹp
                nhất Đà Nẵng. Với vị trí vô cùng thuận lợi, nằm ngay mặt đường
                chính, đối diện trường học có cây xanh mát, sân bóng chuyên việt
                đã trở thành địa điểm giao lưu hàng đầu.
              </p>
              <iframe
                className="mt-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15338.283354504956!2d108.21011974998179!3d16.035840954218735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c0801817c3%3A0x1702bb03f6985b2f!2zU8OibiBiw7NuZyDEkcOhIENodXnDqm4gVmnhu4d0!5e0!3m2!1svi!2s!4v1697477330405!5m2!1svi!2s"
                width="750"
                height="550"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col mt-10">
          <div className="w-[350px] h-[235px] flex flex-col border-2 rounded-lg mb-5">
            <div className="w-[348px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <Image src="/images/pin.png" alt="" width={24} height={24} />
              <p className="font-semibold text-[16px]">ĐỊA CHỈ</p>
            </div>
            <div className="flex flex-col p-4">
              <p>Số 98 Tiểu La, Hòa Thuận Đông, Hải Châu, Đà Nẵng, Việt Nam</p>
              <button className="bg-white hover:border-green-600 hover:text-green-600 text-black font-normal py-2 px-4 border border-black rounded my-[5px]">
                XEM TRÊN BẢN ĐỒ
              </button>
              <button className="bg-white hover:border-green-600 hover:text-green-600 text-black font-normal py-2 px-4 border border-black rounded">
                XEM SỐ CHỦ SÂN
              </button>
            </div>
          </div>

          <div className="w-[350px] h-[135px] flex flex-col border-2 rounded-lg mb-5">
            <div className="w-[348px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <Image src="/images/pin.png" alt="" width={24} height={24} />
              <p className="font-semibold text-[16px]">ĐẶT SÂN</p>
            </div>
            <div className="flex flex-col p-4">
              <button className="bg-white hover:border-green-600 hover:text-green-600 text-black font-normal py-2 px-4 border border-black rounded my-[5px]">
                ĐẶT SÂN NGAY
              </button>
            </div>
          </div>

          <div className="w-[350px] flex flex-col border-2 rounded-lg">
            <div className="w-[348px] h-[50px] bg-[#ECECEC] flex justify-center items-center rounded-t-lg">
              <p className="font-semibold text-[16px]">SÂN GẦN ĐÂY</p>
            </div>
            <div className="flex flex-col p-4">
              <div className="border-2 p-4">
                <Image
                  src="/images/sanphui2.png"
                  alt=""
                  width={300}
                  height={200}
                />
                <p>Sân bóng Tân Mai - Hoàng Mai</p>
                <p>
                  Địa chỉ: 409 Trưng Nữ Vương, Hòa Thuận Nam, Hải Châu, Đà Nẵng
                </p>
                <span className="flex">
                  <p className="font-semibold">Giá:</p>
                  <p className="ml-1 text-red-600 ">
                    200.000₫ - 350.000₫ / Trận
                  </p>
                </span>
              </div>
              <div className="border-2 p-4 my-[15px]">
                <Image
                  src="/images/sanphui3.png"
                  alt=""
                  width={300}
                  height={200}
                />
                <p>Sân bóng Tân Mai - Hoàng Mai</p>
                <p>
                  Địa chỉ: 409 Trưng Nữ Vương, Hòa Thuận Nam, Hải Châu, Đà Nẵng
                </p>
                <span className="flex">
                  <p className="font-semibold">Giá:</p>
                  <p className="ml-1 text-red-600 ">
                    200.000₫ - 350.000₫ / Trận
                  </p>
                </span>
              </div>
              <div className="border-2 p-4">
                <Image
                  src="/images/sanphui4.png"
                  alt=""
                  width={300}
                  height={200}
                />
                <p>Sân bóng Tân Mai - Hoàng Mai</p>
                <p>
                  Địa chỉ: 409 Trưng Nữ Vương, Hòa Thuận Nam, Hải Châu, Đà Nẵng
                </p>
                <span className="flex">
                  <p className="font-semibold">Giá:</p>
                  <p className="ml-1 text-red-600 ">
                    200.000₫ - 350.000₫ / Trận
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <p className="">Bình luận</p>
        <div className="w-[80%]">
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Nhập bình luận..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#53d882] hover:bg-[#8debad] text-white font-bold py-2 px-4 rounded"
            >
              Gửi bình luận
            </button>
          </form>
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full"
              src="/images/sanphui1.png"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <div className="ml-2 bg-[#53d882] px-2 py-1 rounded-2xl">
                  <span className="font-semibold">Nguyen Duy Tan</span>
                  <div>Sân uy tín, đẹp, giá cả rẻ như cho</div>
                </div>
                <div className="p-1 ml-3 cursor-pointer hover:bg-slate-200 rounded-full">
                  <Image
                    className="cursor-pointer"
                    src="/images/dot.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              <div>
                <div className="flex ml-6">
                  <div className="mr-3 font-medium cursor-pointer hover:underline">
                    Like
                  </div>
                  <div className="mr-3 font-medium cursor-pointer hover:underline">
                    Phản hồi
                  </div>
                  <div className="font-light">30 phút trước</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
