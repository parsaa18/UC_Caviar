"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import apiFetcher from "@/core/services/api/fetcher.api";

interface ProductDetails {
  picture: [];
}

const Slider = () => {
  const product = useParams();

  const [details, setDetails] = useState<ProductDetails | null>(null);
  const [index, setIndex] = useState(0);
  const [progressSteps, setProgressSteps] = useState<number[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [resetting, setResetting] = useState(false);

  const GetData = async () => {
    if (!product.id) return;
    try {
      const data: ProductDetails = await apiFetcher(`/products/${product.id}`);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (product.id) {
      GetData();
    }
  }, [product.id]);

  useEffect(() => {
    if (details?.picture) {
      setProgressSteps(new Array(details.picture.length).fill(0));
      setColors(new Array(details.picture.length).fill("bg-[#252D62]"));
    }
  }, [details]);

  useEffect(() => {
    if (!details || !details.picture.length) return;

    const updateProgress = () => {
      if (resetting) return;

      setProgressSteps((prevSteps) => {
        const newSteps = [...prevSteps];
        if (newSteps[index] < 1) {
          newSteps[index] = Math.min(newSteps[index] + 0.33, 1);
        }
        return newSteps;
      });

      if (progressSteps[index] >= 1) {
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[index] = "bg-[#F2F2F2]";
          return newColors;
        });

        setIndex((prevIndex) => {
          if (index === details.picture.length - 1) {
            setResetting(true);
            setProgressSteps(new Array(details.picture.length).fill(0));
            setColors(new Array(details.picture.length).fill("bg-[#252D62]"));

            setTimeout(() => {
              setResetting(false);
            }, 500);
          }
          return (prevIndex + 1) % details.picture.length;
        });
      }
    };

    const interval = setInterval(updateProgress, 900);
    return () => clearInterval(interval);
  }, [index, progressSteps, resetting, details]);

  if (!details || !details.picture.length) return null;

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
            <img
              src={details.picture[index]}
              alt="Product Image"
              width={250}
              height={250}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative w-full mt-[40px] flex justify-center gap-[5px]">
        {details.picture.map((_, stepIndex) => (
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
};

export default Slider;
