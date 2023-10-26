import React from "react";
import Image from "next/image";
import Link from "next/link";
interface IProps {
  title: string;
  pageNames: string[];
  children?: React.ReactNode;
}

export default function Heading({ title, pageNames, children }: IProps) {
  return (
    <div className="flex w-full justify-between items-center gap-1 mt-2 mb-9 flex-col laptop:flex-row ">
      <div className="w-full">
        <div className="flex items-center">
          {pageNames?.length > 0
            ? pageNames?.map((name, index) => {
                if (index === pageNames.length - 1)
                  return (
                    <span
                      className="font-normal text-[15px] laptop:text-[16px] leading-[20px] text-[#565656]"
                      key={name + index}
                    >
                      {name}
                    </span>
                  );
                return (
                  <>
                    <Link
                      href="/"
                      className="font-normal text-[15px] laptop:text-[16px] leading-[20px] text-[#969696]"
                      key={index + name}
                    >
                      {name}
                    </Link>
                    <Image
                      src="/images/grather-than.png"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </>
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
