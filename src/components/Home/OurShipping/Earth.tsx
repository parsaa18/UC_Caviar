"use client";
import { motion } from "framer-motion";

const EarthComponent = () => {
  return (
    <div className="absolute bottom-0  w-full ">
      <div className="overflow-hidden h-[160px] w-full">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 460, repeat: Infinity }}
          src="/images/EarthPicture.png"
          alt="earth"
          className="m-auto w-full"
        />
      </div>
      <div>
        <img
          className="absolute top-0 "
          src="/images/airplane-ourshipping-landing.svg"
          alt="uc caviar airplane"
        />
      </div>
    </div>
  );
};

export default EarthComponent;
