"use client";

import { X } from "lucide-react";

export default function Modal({ children, close }) {
  return (
    <div
      className="
      inset-0
      z-50
      flex
      items-center
      justify-center
      p-4
      "
    >
     <div
  onClick={(e) => e.stopPropagation()}
  className="
  relative
  w-full
  max-w-xl
  rounded-3xl
  border
  border-white/20
  bg-white/10
  backdrop-blur-2xl
  shadow-2xl
  "
>
  <button
    onClick={close}
    className="
    absolute
    right-4
    top-4
    z-20
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-black/20
    text-white
    transition
    hover:rotate-90
    hover:bg-red-500
    "
  >
    <X size={20} />
  </button>

  <div className="p-6">
    {children}
  </div>
</div>
    </div>
  );
}