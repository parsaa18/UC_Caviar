const page = () => {
  return (
    <div className="  w-full min-h-screen bg-gradient-to-b from-[#252D62] via-[#343F89] to-[#4C5CC8]">
      <div className=" relative flex justify-center items-center min-h-screen top-[-144px]">
        <img
          src={"/images/payment.png"}
          alt="Logo"
          className="object-cover w-[695.1px] h-[85.63px] max-w-full"
        />
      </div>

      <div className="flex flex-nowrap gap-[104px] justify-center  ml-[150px] font-montrealBold text-white w-[773px] h-[116px] text-[24px] leading-[28.8px] mt-[-286px]">
        <div className="w-[54px] h-[17px] text-[14px] leading-[16.8px] text-white">
          Payment
        </div>
        We have implemented secure payment methods for our respected and valued
        customers, ensuring that there will be no disruption in payment and
        product delivery. Our company commits to fulfilling its obligations
        calmly and on time.
      </div>
      <div className="flex justify-center  mx-auto font-montrealBold text-white w-[763px] h-[203px] text-[24px] leading-[28.8px] mt-[60px]">
        After issuing a pro forma invoice and receiving the customer's approval,
        50% of the invoice amount is paid by the customer. The approximate time
        for issuing the site certification and health permits is 14 days. Once
        the permits are completed, the invoice is issued in the customer's name.
        After the customer reviews the invoice, the remaining amount is
        transferred to the account provided by the company, and the order will
        be shipped to the customer.
      </div>

      <div className="flex justify-center  mx-auto font-montrealBold text-white w-[773px] h-[116px] text-[24px] leading-[28.8px] mt-[88px]">
        Unique Caspian is a brand that supplies high-quality Iranian caviar in
        bulk to restaurants, hotels, grocery stores, and wholesale buyers. The
        company, through its representatives in Europe, ensures a reliable and
        more satisfactory ordering, delivery, and customer service process.
      </div>
    </div>
  );
};

export default page;
