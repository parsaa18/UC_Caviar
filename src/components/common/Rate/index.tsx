"use client";
// pages/index.tsx
import { Rating } from "@mui/material";
import { useState } from "react";

const Rate = () => {
  const [value, setValue] = useState<number | null>(2);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  return <Rating value={value} onChange={handleChange} precision={1} />;
};

export default Rate;
