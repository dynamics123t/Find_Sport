import { ReactNode } from "react";

interface Props {
  content: ReactNode;
  disable?: boolean;
  active?: boolean;
  onClick: () => void;
}

export default function PaginationBlock({
  content,
  disable,
  active,
  onClick,
}: Props) {
  return (
    <button
      className={`outline-none border w-9 aspect-square text-center select-none flex justify-center items-center text-sm ${
        disable ? "opacity-40 pointer-events-none" : ""
      } ${
        active
          ? "text-blue-light border-blue-light bg-[#eefafe]"
          : "border-smoke text-txt-blur bg-white"
      }`}
      onClick={(e) => {
        !disable && onClick();
      }}
    >
      {content}
    </button>
  );
}
