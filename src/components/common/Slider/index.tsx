"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/pack-img-2.png", // جایگزین کن با مسیر درست عکس کنسرو
  "/images/pack-img-2.png",
  "/images/pack-img-2.png",
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [progressSteps, setProgressSteps] = useState([0, 0, 0]);
  const [colors, setColors] = useState([
    "bg-[#252D62]",
    "bg-[#252D62]",
    "bg-[#252D62]",
  ]); // رنگ اولیه آبی
  const [resetting, setResetting] = useState(false); // برای مشخص کردن اینکه باید پراگرس بارها ریست شوند

  useEffect(() => {
    // افزایش تدریجی مقدار پراگرس بار
    const updateProgress = () => {
      if (resetting) return; // وقتی که در حال ریست هستیم، هیچ کاری انجام نده

      setProgressSteps((prevSteps) => {
        const newSteps = [...prevSteps];
        if (newSteps[index] < 1) {
          newSteps[index] = Math.min(newSteps[index] + 0.33, 1); // افزایش تدریجی
        }
        return newSteps;
      });

      // وقتی پراگرس بار یک بخش کامل شد، به تصویر بعدی برو
      if (progressSteps[index] >= 1) {
        // تغییر رنگ به طوسی پس از پر شدن پراگرس بار
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[index] = "bg-[#F2F2F2]"; // رنگ پراگرس بار را به طوسی تغییر می‌دهیم
          return newColors;
        });

        // پس از تکمیل هر پراگرس بار، به تصویر بعدی برو
        setIndex((prevIndex) => {
          // وقتی به آخرین تصویر رسیدیم، روند را ریست می‌کنیم
          if (index === images.length - 1) {
            setResetting(true); // حالت ریست فعال می‌شود
            setProgressSteps([0, 0, 0]); // پراگرس بارها را به صفر برمی‌گردانیم
            setColors(["bg-[#252D62]", "bg-[#252D62]", "bg-[#252D62]"]); // رنگ‌ها را به آبی برمی‌گردانیم

            // بعد از مدت کوتاهی پراگرس بارها را دوباره پر می‌کنیم
            setTimeout(() => {
              setResetting(false); // حالت ریست غیرفعال می‌شود
            }, 500); // مدت زمان کوتاه برای ریست
          }
          return (prevIndex + 1) % images.length; // رفتن به تصویر بعدی
        });
      }
    };

    const interval = setInterval(updateProgress, 600); // هر ثانیه یکبار پراگرس بارها آپدیت می‌شود

    return () => clearInterval(interval); // پاک کردن interval هنگام ترک کامپوننت
  }, [index, progressSteps, resetting]);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      <div className="relative w-full h-64 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex justify-center items-center"
          >
            <Image
              src={images[index]}
              alt="Canned Product"
              width={300}
              height={300}
              className=""
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* پراگرس بارها */}
      <div className="relative w-full mt-4 flex justify-center gap-[5px]">
        {images.map((_, stepIndex) => (
          <div
            key={stepIndex}
            className="w-[92px] h-[9px] bg-[#F2F2F2] rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progressSteps[stepIndex] * 100}%` }}
              transition={{ duration: resetting ? 0 : 1, ease: "linear" }}
              className={`h-full ${colors[stepIndex]} rounded-[10px] outline outline-[5px] outline-white`}
            ></motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
