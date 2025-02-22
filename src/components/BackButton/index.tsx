"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

function BackButton1() {
  const router = useRouter();
  return (
    <>
      <button className="hidden md:flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition ">
        <Image
          src="/images/arrow-right.png"
          alt="Arrow"
          width={26}
          height={26}
          onClick={() => router.back()}
        />
        <span className="text-[16px]">Back</span>
      </button>
    </>
  );
}

export { BackButton1 };

function BackButton2() {
  const router = useRouter();
  return (
    <>
      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition md:hidden ">
        <Image
          src="/images/arrow-right.png"
          alt="Arrow"
          width={26}
          height={26}
          onClick={() => router.back()}
        />
        <span className="text-[16px]">Back</span>
      </button>
    </>
  );
}
export { BackButton2 };
