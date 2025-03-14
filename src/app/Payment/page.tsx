"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [active, setActive] = useState<string | null>();
  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.hash.substring(1);
    setActive(id);
    setTimeout(() => {
      setActive(null);
      console.log("yes");
    }, 6000);
  }, []);

  return (
    <div className=" flex flex-col overflow-hidden w-full pt-[144px] bg-gradient-to-b from-[#252D62] via-[#343F89] to-[#4C5CC8] text-ucWhite">
      <div className=" flex justify-center items-center pb-16">
        <img
          src="/images/payment.png"
          alt="Logo"
          className="object-cover w-[90%] max-w-[560.81px] h-auto"
        />
      </div>
      <section className="lg:px-64 md:px-10 px-8 flex flex-col gap-24">
        <div className="flex items-start pt-20 gap-8 md:gap-[106px] md:flex-row flex-col">
          <h3 className="min-w-32">Payment</h3>
          <div className="flex flex-col gap-10 text-2xl font-bold">
            <p>
              We have implemented secure payment methods for our respected and
              valued customers, ensuring that there will be no disruption in
              payment and product delivery. Our company commits to fulfilling
              its obligations calmly and on time.
            </p>
            <p>
              After issuing a pro forma invoice and receiving the customer's
              approval, 50% of the invoice amount is paid by the customer. The
              approximate time for issuing the site certification and health
              permits is 14 days. Once the permits are completed, the invoice is
              issued in the customer's name. After the customer reviews the
              invoice, the remaining amount is transferred to the account
              provided by the company, and the order will be shipped to the
              customer.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-0">
          <div
            id="legal-point1"
            className="flex items-start pt-20 gap-8 md:gap-[106px] md:flex-row flex-col"
          >
            <h3 className="min-w-32">Delivery Method</h3>
            <div
              className={`flex flex-col transition-all duration-500 gap-10 text-2xl ${
                active === "legal-point1"
                  ? "font-extrabold  text-3xl drop-shadow-md"
                  : active === null
                  ? "opacity-100"
                  : "opacity-60"
              } font-bold`}
            >
              <p>
                Delivery method CPT & Incoterms of DDP are possible under
                certain conditions.
              </p>
            </div>
          </div>
          <div
            id="legal-point2"
            className="flex items-start pt-20 gap-8 md:gap-[106px] md:flex-row flex-col"
          >
            <h3 className="min-w-32">MINIMUM ORDER</h3>
            <div
              className={`flex flex-col transition-all duration-500 gap-10 text-2xl ${
                active === "legal-point2"
                  ? "font-extrabold  text-3xl drop-shadow-md"
                  : active === null
                  ? "opacity-100"
                  : "opacity-60"
              } font-bold`}
            >
              <p>
                It is necessary for the buyer to check the terms and conditions
                of importing the requested goods in the destination country and
                announce the result to the seller.
              </p>
            </div>
          </div>
          <div
            id="legal-point3"
            className="flex items-start pt-20 gap-8 md:gap-[106px] md:flex-row flex-col"
          >
            <h3 className="min-w-32">NECESSARY FOR THE BUYER</h3>
            <div
              className={`flex flex-col transition-all duration-500 gap-10 text-2xl ${
                active === "legal-point3"
                  ? "font-extrabold  text-3xl drop-shadow-md"
                  : active === null
                  ? "opacity-100"
                  : "opacity-60"
              } font-bold`}
            >
              <p>
                The minimum order is 5 kg. For orders less than 5 kg, the
                pricing is as follows: orders between 3 kg and 5 kg are priced
                at €150, while orders under 3 kg are priced at €250.Please note
                that prices may vary in different countries. (Please inquire)
                For purchases over 20 kilograms, the price is negotiable.
              </p>
            </div>
          </div>
          <div
            id="legal-point4"
            className="flex items-start pt-20 gap-8 md:gap-[106px] md:flex-row flex-col"
          >
            <h3 className="min-w-32">RULES DESTINATION</h3>
            <div
              className={`flex flex-col transition-all duration-500 gap-10 text-2xl ${
                active === "legal-point4"
                  ? "font-extrabold  text-3xl drop-shadow-md"
                  : active === null
                  ? "opacity-100"
                  : "opacity-60"
              } font-bold`}
            >
              <p>
                Please check the product inventory, product price, customs cost
                (Incoterms 2020)and export conditions to the destination country
                when ordering.
              </p>
            </div>
          </div>
          <div
            id="legal-point5"
            className="flex items-start pt-20 gap-8 md:gap-[106px] md:flex-row flex-col"
          >
            <h3 className="min-w-32">FREE PACKING</h3>
            <div
              className={`flex flex-col transition-all duration-500 gap-10 text-2xl ${
                active === "legal-point5"
                  ? "font-extrabold  text-3xl drop-shadow-md"
                  : active === null
                  ? "opacity-100"
                  : "opacity-60"
              } font-bold`}
            >
              <p>
                Prices are calculated based on glass packaging. For metal can
                packaging, the price is different. (To be inquired)
              </p>
            </div>
          </div>
        </div>
      </section>
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
