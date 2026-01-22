import React from "react";
import cc1 from "../images/cc1.png";
import cc2 from "../images/cc2.png";
import cc3 from "../images/cc3.png";

const Marketing = () => {
  return (
    <div className="px-40 py-10">
      <div className="text-center mx-auto max-w-[500px]">
        <h2 className="text-[25.06px] font-semibold  text-[#4D4D4D] mb-2">
          Caring is the new marketing
        </h2>

        <p className="text-[#717171] text-[14px] text-center mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
      </div>

      <div className="flex justify-center gap-10 mt-10 mb-10">
        <div className="relative">
          <img src={cc1} alt="cc1" className="rounded-t-lg" />
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[90%] bg-white rounded-lg shadow-lg p-5">
            <h3 className="text-[#4D4D4D] font-semibold text-center mb-2">
              Creating Streamlined Safeguarding Processes with OneRen
            </h3>
            <div className="flex justify-center items-center gap-2 text-[#4CAF4F] font-semibold cursor-pointer">
              <span>Readmore</span>
              <span>→</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={cc2} alt="cc2" className="rounded-t-lg" />
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[90%] bg-white rounded-lg shadow-lg p-5">
            <h3 className="text-[#4D4D4D] font-semibold text-center mb-2">
              Creating Streamlined Safeguarding Processes with OneRen
            </h3>
            <div className="flex justify-center items-center gap-2 text-[#4CAF4F] font-semibold cursor-pointer">
              <span>Readmore</span>
              <span>→</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={cc3} alt="cc3" className="rounded-t-lg" />
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[90%] bg-white rounded-lg shadow-lg p-5">
            <h3 className="text-[#4D4D4D] font-semibold text-center mb-2">
              Creating Streamlined Safeguarding Processes with OneRen
            </h3>
            <div className="flex justify-center items-center gap-2 text-[#4CAF4F] font-semibold cursor-pointer">
              <span>Readmore</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Marketing;
