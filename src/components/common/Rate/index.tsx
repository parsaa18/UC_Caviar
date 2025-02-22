"use client";
import Rating from "@mui/material/Rating";
import { useState } from "react";

interface RatingProps {
  maxRating: number;
  initialRating?: number;
}

const Rate: React.FC<RatingProps> = ({ maxRating, initialRating = 2 }) => {
  const [value, setValue] = useState<number | null>(initialRating);

  return <Rating name="rating" value={value} max={maxRating} readOnly />;
};

export default Rate;
