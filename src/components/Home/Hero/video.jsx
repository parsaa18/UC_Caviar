"use client";

import { useState } from "react";
import VolumeHighIcon from "@/components/icons/Sound";
import Magnetic from "@/components/common/motion/Magnet";
import { AnimatePresence, motion } from "framer-motion";

const HeroVideo = () => {
  const [muted, setMuted] = useState(true);

  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 bg-ucBlack/40 right-0 -z-10 overflow-hidden md:rounded-[32px]">
        {/* <img
    src="/images/Home_Hero_test.jpg"
    alt="Hero"
    className="rounded-[40px] w-full h-full object-cover "
  /> */}
        <video
          autoPlay
          muted={muted}
          loop
          suppressHydrationWarning
          className=" h-full w-full object-cover"
        >
          <source src="/videos/hero-caviar.mp4" />
        </video>
      </div>
      <Magnetic>
        <div
          onClick={() => {
            setMuted(!muted);
          }}
          className="p-3 absolute cursor-pointer bottom-6 left-6 bg-ucWhite rounded-full"
        >
          <VolumeHighIcon />
          <AnimatePresence>
            {muted && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "32px" }}
                exit={{ width: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.7px] w-[32px] rotate-[-45deg] bg-ucBlack "
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      </Magnetic>
    </>
  );
};

export default HeroVideo;
