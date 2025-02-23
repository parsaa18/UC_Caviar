"use client";
import { BackButton1, BackButton2 } from "@/components/BackButton";
import apiFetcher from "@/core/services/api/fetcher.api";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Feature {
  title: string;
  paragraph: string;
}
interface BlogDetails {
  title: string;
  date: string[];
  intro: string;
  description: Feature[];
  picture: string;
}
function page() {
  const blog = useParams();
  const router = useRouter();
  const [details, setDetails] = useState<BlogDetails | null>(null);

  const GetData = async () => {
    try {
      const data: BlogDetails = await apiFetcher(`/blogs/${blog.slug}`);

      setDetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className=" flex flex-wrap items-center justify-center md:ml-0 ml-[-150px] gap-[100px] mt-[123px] md:mt-[123px] ">
        <BackButton2 />

        <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] opacity-50 text-center">
          Blog
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center px-6 md:px-12 py-4 gap-[20px] md:gap-x-[103px]">
        <BackButton1 />

        <div className="flex flex-col md:flex-row items-center  justify-center md:justify-center gap-2 md:gap-[103px]">
          <h1 className="text-[30px] md:text-[36px]  text-[#0D0A0B] text-center md:text-center">
            {details?.title}
          </h1>

          <div className="flex items-center space-x-2">
            <Image
              src="/images/calendar-03.png"
              alt="calendar"
              width={25}
              height={25}
            />
            <span className="text-[14px] md:text-[16px] text-gray-500">
              {details?.date}
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex mx-auto mt-[56px] text-[20px] leading-[24px] text-[#0D0A0B] 
  w-auto md:w-[924px] max-w-full h-auto px-4 md:px-0 text-center md:text-left"
      >
        {details?.intro}
      </div>

      <div className="w-full md:w-[1238px] h-auto rounded-[32px]  mt-[56px] mx-auto">
        <img
          src={details?.picture}
          alt="main-blog"
          width={1238}
          height={621}
          className="rounded-[32px]"
        />
      </div>

      <div className="w-full md:w-[437px] h-auto text-[24px] md:text-[36px] md:mt-[56px]  md:ml-[258px] ml-[100px] mt-[56px] leading-[43.2px]  text-[#0D0A0B]">
        How to take care of caviar?
      </div>
      <div className="w-full md:w-[924px] h-auto text-[16px] md:text-[20px] leading-[24px] mt-[24px] ml-[20px] md:ml-[258px] text-[#0D0A0B]">
        {details?.description?.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <div className=" md:mx-0 mx-auto text-[20px] leading-[24px] text-ucBlack font-montrealBold mt-[20px]">
              {feature.title}
            </div>
            <div className=" md:mx-0 mx-auto text-[20px] leading-[24px] text-ucBlack ">
              {feature.paragraph}
            </div>
          </div>
        ))}
      </div>

      <div className="  flex  justify-center w-[120px] h-[22.63px] mt-[56px] mx-auto gap-[2px] ">
        <Image
          src={"/images/arrow-right.png"}
          alt="Arrow"
          width={30}
          height={24}
          className="mt-[-4px]"
          onClick={() => router.back()}
        />
        <div className="   w-[100px] h-full text-[16px] leading-[16.8px] text-[#000000] opacity-50">
          Other Blogs
        </div>
      </div>
    </>
  );
}

export default page;
