import React from "react";

export default function Banner() {
  return (
    <div className="h-auto w-full relative">
      <img src="/images/banner.jpg" alt="banner" className="w-full h-full" />
      <div className="absolute w-full h-full bg-black opacity-20 top-0 left-0">
        <span></span>
      </div>
    </div>
  );
}
