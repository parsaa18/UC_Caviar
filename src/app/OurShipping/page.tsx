const Page = () => {
  return (
    <div className="  w-full min-h-screen bg-gradient-to-b from-[#252D62] via-[#343F89] to-[#4C5CC8]">
      <div className=" relative flex justify-center items-center min-h-screen top-[-144px]">
        <img
          src={"/images/Our Shipping.png"}
          alt="Logo"
          className="object-cover w-[580.81px] h-[91.18px] max-w-full"
        />
      </div>
      <div className="flex justify-center text-center mx-auto font-montrealBold text-white w-[877px] h-[117px] text-[24px] leading-[28.8px] mt-[-323px]">
        Seafood products, especially caviar, require meticulous care during
        storage and transportation due to their sensitivity to factors such as
        temperature and time. For this reason, we rely exclusively on air
        freight to ensure fast and secure delivery to our valued customers.
      </div>
      <div className="flex justify-center text-center mx-auto font-montrealBold text-white w-[881px] h-[116px] text-[24px] leading-[28.8px] mt-[40px] ">
        We adhere to the CPT (Carriage Paid To) shipping method in line with the
        2020 Incoterms, ensuring that our products are delivered under ideal
        conditions while maintaining their quality and freshness. Our focus is
        on preserving excellence of our caviar throughout the entire shipping
        process.
      </div>

      <div className="flex justify-center items-center w-full mt-[76px]">
        <div className="relative flex justify-center items-center w-[70%]">
          <img
            src={"/images/planet.png"}
            alt="Planet"
            className="object-contain w-full h-auto"
          />
          <img
            src={"/images/plane.png"}
            alt="Plane"
            className="object-contain w-[35%] h-auto absolute top-[-11px] left-[-20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
