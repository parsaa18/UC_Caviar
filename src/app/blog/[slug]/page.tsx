import Image from "next/image";

function page() {
  return (
    <>
      <div className="flex items-center justify-center ml-[-70px] gap-[40px] mt-[123px] md:mt-[123px] ">
        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition md:hidden">
          <Image
            src="/images/arrow-right.png"
            alt="Arrow"
            width={26}
            height={26}
          />
          <span className="text-[16px]">Back</span>
        </button>

        <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] opacity-50 text-center">
          Blog
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center px-6 md:px-12 py-4 gap-[20px] md:gap-x-[103px]">
        <button className="hidden md:flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition">
          <Image
            src="/images/arrow-right.png"
            alt="Arrow"
            width={26}
            height={26}
          />
          <span className="text-[16px]">Back</span>
        </button>

        <div className="flex flex-col md:flex-row items-center  justify-center md:justify-center gap-2 md:gap-[103px]">
          <h1 className="text-[30px] md:text-[36px]  text-[#0D0A0B] text-center md:text-center">
            How to take care of caviar?
          </h1>

          <div className="flex items-center space-x-2">
            <Image
              src="/images/calendar-03.png"
              alt="calendar"
              width={25}
              height={25}
            />
            <span className="text-[14px] md:text-[16px] text-gray-500">
              Jan 7, 2023
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex mx-auto mt-[56px] text-[20px] leading-[24px] text-[#0D0A0B] 
  w-auto md:w-[924px] max-w-full h-auto px-4 md:px-0 text-center md:text-left"
      >
        How to take care of caviar How to take care of caviar How to take care
        of caviar How to take care of caviar How to take care of caviar How to
        take care of caviar How to take care of caviar How to take care of
        caviar How to take care of caviar How to take care of caviar How to take
        care of caviar How to take care of caviar...
      </div>

      <div className="w-full md:w-[1238px] h-auto rounded-[32px] mt-[56px] mx-auto">
        <Image
          src={"/images/Blog.png"}
          alt="main-blog"
          width={1238}
          height={621}
          layout="responsive"
        />
      </div>

      <div className="w-full md:w-[437px] h-auto text-[24px] md:text-[36px] md:mt-[56px]  md:ml-[258px] ml-[100px] mt-[56px] leading-[43.2px]  text-[#0D0A0B]">
        How to take care of caviar?
      </div>
      <div className="w-full md:w-[924px] h-auto text-[16px] md:text-[20px] leading-[24px] mt-[24px] ml-[20px] md:ml-[258px] text-[#0D0A0B]">
        Lorem ipsum dolor sit amet consectetur. Ante auctor neque iaculis
        habitasse facilisi etiam amet risus. Lacus sit pretium porta pulvinar at
        curabitur non nunc. Vulputate lacus integer rhoncus mollis sit amet
        volutpat facilisi. Eu fermentum nunc ornare nisl mattis imperdiet morbi
        et pellentesque. Tortor blandit magnis a amet sollicitudin. Non
        fermentum quis semper sagittis suspendisse. Sed eget facilisi sed in
        elementum senectus. Sit erat est morbi sem rutrum. Sit fermentum
        venenatis amet ullamcorper rutrum velit mi sit sed. Ut in facilisis
        aliquet justo sit vehicula id viverra. Consectetur molestie lacus quis
        placerat malesuada aenean integer pellentesque eu. Gravida at interdum
        dolor venenatis sem sed. Pretium praesent lectus ornare fames. Quis
        lorem hendrerit enim erat erat urna. Magna id cursus quam in tortor. Id
        proin imperdiet faucibus sit nullam augue est in maecenas. Consectetur
        mauris velit tempus arcu. Sed praesent volutpat sem ullamcorper.
        Convallis id nulla tellus aliquet quis odio sapien eu. Eu enim ipsum
        convallis sed feugiat mollis cursus amet. Nisl quis purus tellus
        aliquet. Purus morbi adipiscing orci amet ornare in. Enim viverra
        adipiscing dolor nunc amet quis ultrices. Et laoreet eu felis elementum
        blandit posuere duis massa orci. Mattis sit varius gravida enim. Sodales
        ultrices duis eget fusce nisl. Odio in at aliquet non fusce. Id
        consectetur interdum porttitor feugiat ut. Laoreet felis ultricies duis
        eu justo habitant pharetra diam. Cursus amet et orci orci lorem ligula
        adipiscing ipsum nunc. Tincidunt ac dis lobortis amet. Ultrices
        condimentum ultrices ultricies pretium volutpat nisi vitae metus. Varius
        dignissim sit egestas adipiscing tellus porttitor pellentesque posuere
        risus. Diam feugiat scelerisque vitae et. Varius id neque ut diam
        dignissim amet in. Amet in eu mauris adipiscing. Sagittis integer nec
        tortor felis commodo auctor in. Viverra tortor aliquam ornare a ornare
        aliquam duis. Sed viverra etiam turpis vel. Bibendum morbi donec orci
        facilisis accumsan eget placerat ac mi. Quisque facilisi risus arcu
        consectetur in tellus a condimentum. Amet turpis pretium vivamus ut mi
        imperdiet nibh. Ut tincidunt nulla cursus convallis elementum etiam sed
        dis leo. Aliquam nisi egestas laoreet auctor metus ligula ut. Auctor
        nisl at consectetur etiam. Ullamcorper nec tortor elementum nunc
        pellentesque vel. Vitae faucibus sed amet dignissim sagittis.
      </div>

      <div className="  flex  justify-center w-[120px] h-[22.63px] mt-[56px] mx-auto gap-[2px] ">
        <Image
          src={"/images/arrow-right.png"}
          alt="Arrow"
          width={30}
          height={24}
          className="mt-[-4px]"
        />
        <div className="   w-[100px] h-full text-[16px] leading-[16.8px] text-[#000000] opacity-50">
          Other Blogs
        </div>
      </div>
    </>
  );
}

export default page;
