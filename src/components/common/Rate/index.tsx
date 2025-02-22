"use client";
import Rating from "@mui/material/Rating";
import { useState } from "react";

interface RatingProps {
  initialRating?: number;
}

const Rate: React.FC<RatingProps> = ({ initialRating }) => {
  return <Rating name="rating" value={initialRating} max={5} readOnly />;
};

export default Rate;
