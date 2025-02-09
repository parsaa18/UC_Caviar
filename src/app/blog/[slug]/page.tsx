import Image from "next/image";

function page() {
  return (
    <>
      <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] opacity-50 mx-auto mt-[123px]">
        Blog
      </div>
      <div className="flex justify-center space-x-[104px] mt-[2px] ml-[50px] ">
        <div className=" flex  justify-center w-[57px] h-[22.63px] mt-[15px] gap-[2px] ">
          <Image
            src={"/images/arrow-right.png"}
            alt="Arrow"
            width={26}
            height={26}
            className="mt-[-4px]"
          />
          <div className="w-[32px] h-[17px] text-[16px] leading-[16.8px] text-[#000000] opacity-50">
            Back
          </div>
        </div>{" "}
        <div className="w-[437px] h-[43px]  text-[36px] leading-[43.2px] text-[#0D0A0B] ">
          How to take care of caviar ?
        </div>{" "}
        <div className=" flex  justify-center w-[120px] h-[20px] gap-[5px] mt-[15px] ">
          <Image
            src={"/images/calendar-03.png"}
            alt="calendar"
            width={25}
            height={10}
            className="mt-[-4px]"
          />
          <div className=" w-[120px] h-full text-[16px] leading-[16.8px] text-[#000000] opacity-50">
            Jan 7 , 2023
          </div>
        </div>
      </div>
      <div className=" flex mx-auto mt-[56px]  text-[20px] leading-[24px] text-[#0D0A0B] w-[924px] h-[72px]">
        How to take care of caviar How to take care of caviar How to take care
        of caviar How to take care of caviar How to take care of caviar How to
        take care of caviar How to take care of caviar How to take care of
        caviar How to take care of caviar How to take care of caviar How to take
        care of caviar How to take care of caviar...
      </div>
      <div className="w-[1238px] h-[621px] rounded-[32px] mt-[56px] mx-auto ">
        <Image
          src={"/images/Blog.png"}
          alt="main-blog"
          width={1238}
          height={621}
        />
      </div>
      <div className="w-[437px] h-[43px] text-[36px] leading-[43.2px] mt-[56px] ml-[258px] text-[#0D0A0B]">
        How to take care of caviar ?
      </div>

      <div className="w-[924px] h-[576px] text-[20px] leading-[24px] mt-[24px] ml-[258px] text-[#0D0A0B]">
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
