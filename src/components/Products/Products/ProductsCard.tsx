import ArrowUpRight03Icon from "@/components/icons/ArrowUpRight03";
import { Rate } from "antd";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  title: string;
  packType: string;
  rate: number;
  weight: number;
  id: number;
  picture: string;
}
const ProductsCard: FC<IProps> = ({
  packType,
  picture,
  rate,
  title,
  weight,
  id,
}) => {
  return (
    <Link
      href={"/products/caviar/" + id}
      className="rounded-3xl bg-ucGray flex flex-col items-start  p-8 justify-between w-full h-full"
    >
      <div className="flex  flex-col gap-4 w-full">
        <div className="w-full flex items-center justify-between gap-8 text-ucBlack">
          <h3 className="text-2xl font-bold font-montrealBold">{title}</h3>
          <div className="flex-1 flex items-center justify-end">
            Detail <ArrowUpRight03Icon color="#0d0a0b" />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-2/3">
          <div className="flex flex-col gap-2 w-full">
            <div className="w-full flex justify-between gap-8 items-center">
              <h6 className="text-ucBlack/50 w-full text-nowrap">
                Packaging Type :
              </h6>
              <div className="flex items-center justify-start w-full">
                <p>{packType}</p>
              </div>
            </div>
            <div className="w-full flex justify-between gap-8 items-center">
              <h6 className="text-ucBlack/50 w-full text-nowrap">Weight :</h6>
              <div className="flex items-center justify-start w-full">
                <p>{weight}g</p>
              </div>
            </div>
          </div>
          <div className="min-h-6 ">
            <Rate count={5} value={rate} />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center px-[64px] sm:px-[120px] md:px-[20px] xl:px-[26%]">
        <img src={picture} alt={title} className="object-cover w-full h-full" />
      </div>
    </Link>
  );
};

export default ProductsCard;
