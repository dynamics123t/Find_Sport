"use client";

import React from "react";
import { Portal } from "./Portal";

interface IProps {
  message?: string;
  isOpen: boolean;
  maxWidth?: string;
  children: React.ReactNode;
  className?: string;
  messageClassName?: string;
  onCLickOutSide?: () => void;
  customChildren?: string;
}

export default function PopupMessage({
  message,
  children,
  isOpen,
  maxWidth = "max-w-[500px]",
  className = "",
  customChildren = "",
  messageClassName = "",
  onCLickOutSide = () => {},
}: IProps) {
  return (
    <Portal>
      <div
        className={`fixed z-[1000] top-0 right-0 bottom-0 left-0 grid place-items-center transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "invisible opacity-0"
        }`}
        onClick={onCLickOutSide}
      >
        <div className="absolute w-full h-full bg-[rgba(23,_23,_23,_0.5)] z-10"></div>
        <div
          className={`absolute w-[100%] ${maxWidth} h-auto z-20 p-6 ${customChildren} grid place-items-center bg-white rounded-md shadow-[0px_8px_30px_rgba(0,_0,_0,_0.12)]`}
          onClick={(e) => e.stopPropagation()}
        >
          {message && (
            <h4
              className={`text-[24px] leading-[138%] font-semibold text-center text-txt-primary ${messageClassName}`}
            >
              {message}
            </h4>
          )}
          <div
            className={`flex gap-[40px] items-center ${
              message ? "mt-6" : ""
            } ${className}`}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
