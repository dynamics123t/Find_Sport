"use client";

import Image from "next/image";

import { RootState } from "@/redux/store";

import Link from "next/link";
import { useAppSelector } from "@/redux/hook";

interface IProps {
  title: string;
  pageNames: string[];
  subLink?: string[];
}

export default function Heading({ title, pageNames, subLink }: IProps) {
  return (
    <div className="flex w-full justify-between items-center gap-1 mt-2 mb-9 flex-col laptop:flex-row ">
      <div className="w-full">
        <div className="flex items-center">
          {pageNames?.length > 0
            ? pageNames?.map((item, index) => {
                if (index === pageNames.length - 1)
                  return (
                    <span
                      className="font-normal text-[15px] laptop:text-[16px] leading-[20px] text-[#565656]"
                      key={index}
                    >
                      {item}
                    </span>
                  );
                return (
                  <div key={index} className="flex items-center">
                    <Link
                      href={
                        subLink ? (index === 0 ? "/" : subLink[index]) : "/"
                      }
                      className="font-normal text-[15px] laptop:text-[16px] leading-[20px] text-[#969696]"
                    >
                      {item}
                    </Link>
                    <Image
                      src="/images/chevron-right.png"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </div>
                );
              })
            : null}
        </div>
        <h4 className="text-green-light font-semibold leading-8 text-[28px] mt-2">
          {title}
        </h4>
      </div>
    </div>
  );
}
