import React from "react";
interface IProps {
  label?: string;
  title?: string;
}
export default function CheckboxField({ label, title }: IProps) {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 ">{title}</h3>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-normal text-gray-900 "
        >
          {label}
        </label>
      </div>
    </div>
  );
}
