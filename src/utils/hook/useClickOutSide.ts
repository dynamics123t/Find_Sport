import { RefObject, useEffect } from "react";

const useClickOutSide = (
  handle: () => void,
  ref: RefObject<HTMLElement>,
  dependence: any[]
) => {
  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      !ref.current?.contains(e.target as Node) && handle();
    };
    window.addEventListener("click", handleClickOutSide);

    return () => {
      window.removeEventListener("click", handleClickOutSide);
    };
  }, [dependence]);
};

export default useClickOutSide;
