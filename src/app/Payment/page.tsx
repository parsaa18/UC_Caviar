const Page = () => {
  return (
    <div className=" flex flex-col overflow-hidden w-full min-h-screen bg-gradient-to-b from-[#252D62] via-[#343F89] to-[#4C5CC8] ">
      <div className="relative flex justify-center items-center min-h-screen top-[-144px]">
        <img
          src="/images/payment.png"
          alt="Logo"
          className="object-cover w-[90%] max-w-[580.81px] h-auto"
        />
      </div>
      <div className="  flex flex-col  md:flex-row mt-[-270px]  md:mt-[-370px] ">
        <div
          id="payment"
          className="relative top-[-150px] md:top-0 md:left-[90px] mt-0  md:mt-[-120px] text-[14] leading-[16.8] w-[54px] h-[17px] text-ucWhite"
        >
          Payment
        </div>
        <div className=" mx-auto font-montrealBold text-white max-w-[877px] text-lg sm:text-xl md:text-2xl leading-relaxed  sm:">
          We have implemented secure payment methods for our respected and
          valued customers, ensuring that there will be no disruption in payment
          and product delivery. Our company commits to fulfilling its
          obligations calmly and on time.
        </div>
      </div>
      <div className=" ml-0 md:ml-[250px]  mx-auto font-montrealBold text-white max-w-[881px] text-lg sm:text-xl md:text-2xl leading-relaxed mt-8">
        After issuing a pro forma invoice and receiving the customer's approval,
        50% of the invoice amount is paid by the customer. The approximate time
        for issuing the site certification and health permits is 14 days. Once
        the permits are completed, the invoice is issued in the customer's name.
        After the customer reviews the invoice, the remaining amount is
        transferred to the account provided by the company, and the order will
        be shipped to the customer.
      </div>

      <div className="  flex flex-col md:flex-row  mt-[200px] md:mt-[88px]">
        <div className="relative md:top-0 top-[-150px] left-0 md:left-[90px]   mt-[-120px] text-[14] leading-[16.8] w-[54px] h-[17px] text-ucWhite">
          Legal
        </div>
        <div
          id="lega-point1"
          className=" flex flex-col gap-[16.8px] mx-auto  max-w-[877px] "
        >
          <div className=" font-montrealBold text-white text-lg sm:text-xl md:text-2xl leading-relaxed  sm:">
            {" "}
            Point 1: Delivery method CPT & Incoterms of DDP are possible under
            certain conditions.
          </div>
          <div
            id="legal-point2"
            className=" font-montrealBold text-white text-lg sm:text-xl md:text-2xl leading-relaxed  sm:"
          >
            {" "}
            Point 2: It is necessary for the buyer to check the terms and
            conditions of importing the requested goods in the destination
            country and announce the result to the seller.
          </div>
          <div
            id="legal-point3"
            className=" font-montrealBold text-white text-lg sm:text-xl md:text-2xl leading-relaxed  sm:"
          >
            {" "}
            point3: The minimum order is 5 kg. For orders less than 5 kg, the
            pricing is as follows: orders between 3 kg and 5 kg are priced at
            €150, while orders under 3 kg are priced at €250.Please note that
            prices may vary in different countries. (Please inquire) For
            purchases over 20 kilograms, the price is negotiable.
          </div>
          <div
            id="legal-point4"
            className=" font-montrealBold text-white text-lg sm:text-xl md:text-2xl leading-relaxed  sm:"
          >
            {" "}
            Point 4: Please check the product inventory, product price, customs
            cost (Incoterms 2020)and export conditions to the destination
            country when ordering.
          </div>
          <div className=" font-montrealBold text-white text-lg sm:text-xl md:text-2xl leading-relaxed  sm:">
            {" "}
            Point 5: Prices are calculated based on glass packaging. For metal
            can packaging, the price is different. (To be inquired)
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-16">
        <img
          src="/images/Legall.png"
          alt="Planet"
          className="object-contain w-[50%] h-auto"
        />
      </div>
    </div>
  );
};

export default Page;
