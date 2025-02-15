"use client";

import ArrowUpRight03Icon from "@/components/icons/ArrowUpRight03";
import { useRouter } from "next/navigation";

const notfound = () => {
  const router = useRouter();

  return (
    <section
      className={`notfound flex items-center justify-center text-4xl font-bold font-montrealBold px-6`}
    >
      <div className="flex items-end justify-center gap-10">
        <div
          onClick={() => {
            router.back();
          }}
          className="flex items-center cursor-pointer  gap-2 text-xl font-medium to-ucBlack "
        >
          <ArrowUpRight03Icon
            className="rotate-[-135deg]"
            color="#0D0A0B"
            width={16}
            height={16}
          />
          return
        </div>
        <h2 className="text-nowrap">Page Not Found</h2>
        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default notfound;
