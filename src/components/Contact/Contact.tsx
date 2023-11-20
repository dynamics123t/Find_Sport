import React from "react";
interface IProps {
  label?: string;
  plahoder?: string;
}
export default function index({ label, plahoder }: IProps) {
  return (
    <div>
      <label
        htmlFor=""
        className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={plahoder}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
