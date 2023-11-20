import React, { useState } from "react";
interface IProps {
  label?: string;
  buttonId?: string;
  selected: boolean;
  onClick: () => void;
}
const ButtonPicker = ({ label, selected, onClick }: IProps) => {
  return (
    <button
      type="button"
      className={`w-[150px] text-black border ${
        selected ? "bg-gray-900 text-white" : "border-gray-800"
      }  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default ButtonPicker;
