const EarthComponent = () => {
  return (
    <div className="absolute bottom-0  w-full ">
      <div className="overflow-hidden h-[160px] w-full">
        <img
          src="/images/EarthPicture.png"
          alt="earth"
          className="m-auto w-full"
        />
      </div>
      <div>
        <img
          className="absolute top-0 md:left-auto -left-12 md:w-auto w-[200px]"
          src="/images/airplane-ourshipping-landing.svg"
          alt="uc caviar airplane"
        />
      </div>
    </div>
  );
};

export default EarthComponent;
