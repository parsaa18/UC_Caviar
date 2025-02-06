import React from "react";
import OurShippingSVG from "./OurShippingSVG";
import EarthComponent from "./Earth";
const OurShipping = () => {
  return (
    <section className="relative w-full rounded-[40px] flex flex-col gap-10 items-center py-14 pb-48 text-2xl font-bold font-montrealBold text-ucWhite from-ucNavyBlue1 to-ucNavyBlue2 bg-gradient-to-b">
      <OurShippingSVG />
      <div className="max-w-[867px] flex flex-col gap-10">
        <p>
          Seafood products, especially caviar, require meticulous care during
          storage and transportation due to their sensitivity to factors such as
          temperature and time. For this reason, we rely exclusively on air
          freight to ensure fast and secure delivery to our valued customers.
        </p>
        <p>
          We adhere to the CPT (Carriage Paid To) shipping method in line with
          the 2020 Incoterms, ensuring that our products are delivered under
          ideal conditions while maintaining their quality and freshness. Our
          focus is on preserving excellence of our caviar throughout the entire
          shipping process.
        </p>
      </div>
      <EarthComponent />
    </section>
  );
};

export default OurShipping;
