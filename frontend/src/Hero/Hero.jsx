import React from "react";
import illustration from "../images/Illustration.png";
import dot from "../images/dot.png";

const Hero = () => {
  return (
    <div className="bg-[#F5F7FA] pb-10">
      <div className="flex justify-between px-50 py-20 ">
        <div>
          <div className="text-[44.55px] text font-semibold text-[#4D4D4D]">
            Lessons and insights
          </div>
          <div className="text-[#4CAF4F] font-semibold text-[44.55px]">
            from 8 years{" "}
          </div>
          <div className="text-[11.14px] text-[#717171]">
            Where to grow your business as a photographer: site or social media?
          </div>
          <div className="w-[88.55px] h-[36.49px] mt-7 bg-[#4CAF4F] flex justify-center items-center text-white ">
            Register
          </div>
        </div>

        <div>
          <img src={illustration} alt="Illustration" />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={dot} alt="dot" />
      </div>
    </div>
  );
};

export default Hero;
