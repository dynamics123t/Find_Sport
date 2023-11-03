"use client";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { updateSearchParams } from "@/utils/helpers/updateQueryParams";
import PaginationBlock from "./PaginationBlock";

interface IProps {
  page: number;
  total_record: number;
  record_per_page: number;
  handleChange: (value: number) => void;
}

export default function PaginationCustom({
  handleChange,
  page,
  total_record,
  record_per_page,
}: IProps) {
  const router = useRouter();

  const data = {
    maxNum: 2,
    prevDots: false,
    nextDots: false,
  };

  const list = useMemo(() => {
    const max = Math.ceil(total_record / record_per_page);
    const array = [];
    for (let i = 1; i <= max; i++) {
      array.push(i);
    }

    return array;
  }, [total_record, record_per_page]);

  const handleClick = (index: number) => {
    handleChange(index);
    router.replace(updateSearchParams("page", "" + index));
  };

  return (
    <div className="flex gap-x-[1px] flex-wrap">
      <PaginationBlock
        content={
          <Image src="/images/chevron-left.png" alt="" width={14} height={14} />
        }
        onClick={() => handleClick(page - 1)}
        disable={page === 1}
      />
      {list.map((index) => {
        if (index === 1 || index === list.length)
          return (
            <PaginationBlock
              key={index}
              content={index}
              onClick={() => handleClick(index)}
              active={page === index}
            />
          );
        if (index < page - data.maxNum) {
          if (data.prevDots) return null;
          data.prevDots = true;
          return (
            <PaginationBlock key={"prev"} content={"..."} onClick={() => {}} />
          );
        }
        if (index > page + data.maxNum) {
          if (data.nextDots) return null;
          data.nextDots = true;
          return (
            <PaginationBlock key={"next"} content={"..."} onClick={() => {}} />
          );
        }
        return (
          <PaginationBlock
            key={index}
            content={index}
            onClick={() => handleClick(index)}
            active={page === index}
          />
        );
      })}
      <PaginationBlock
        content={
          <Image
            src="/images/chevron-right.png"
            alt=""
            width={14}
            height={14}
          />
        }
        onClick={() => handleClick(page + 1)}
        disable={page === list.length}
      />
    </div>
  );
}
