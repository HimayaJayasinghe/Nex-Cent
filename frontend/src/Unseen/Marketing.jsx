import React from "react";
import { Link } from "react-router-dom";
import cc1 from "../images/cc1.png";
import cc2 from "../images/cc2.png";
import cc3 from "../images/cc3.png";

const Marketing = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-8 lg:px-24 py-16">
      <div className="text-center mx-auto max-w-2xl">
        <div className="inline-block bg-green-50 text-[#4CAF4F] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-3">
          Our Portfolio
        </div>
        <h2 className="text-[28px] lg:text-[34px] font-bold text-[#4D4D4D] mb-3">
          Recent Custom Frontend Projects
        </h2>

        <p className="text-[#717171] text-[15px] leading-relaxed">
          Take a look at how we turn conceptual wireframes and designs into responsive, high-performing client-side websites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mt-12 mb-16">
        {/* Card 1 */}
        <div className="relative flex flex-col items-center">
          <img src={cc1} alt="SaaS Landing Page" className="rounded-xl w-full object-cover shadow-xs" />
          <div className="w-[90%] -mt-16 bg-white rounded-xl shadow-lg p-5 z-10 flex flex-col justify-between min-h-[140px] text-center border border-gray-100">
            <h3 className="text-[#4D4D4D] font-bold text-[16px] leading-snug">
              Modern SaaS Landing Page & Marketing Portal
            </h3>
            <Link to="/contact" className="flex justify-center items-center gap-1.5 text-[#4CAF4F] hover:text-[#3d913f] font-semibold text-sm cursor-pointer mt-3 transition-colors">
              <span>Request similar project</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col items-center">
          <img src={cc2} alt="Creative Studio Portfolio" className="rounded-xl w-full object-cover shadow-xs" />
          <div className="w-[90%] -mt-16 bg-white rounded-xl shadow-lg p-5 z-10 flex flex-col justify-between min-h-[140px] text-center border border-gray-100">
            <h3 className="text-[#4D4D4D] font-bold text-[16px] leading-snug">
              Interactive Portfolio & Showcase for Designers
            </h3>
            <Link to="/contact" className="flex justify-center items-center gap-1.5 text-[#4CAF4F] hover:text-[#3d913f] font-semibold text-sm cursor-pointer mt-3 transition-colors">
              <span>Request similar project</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col items-center">
          <img src={cc3} alt="Corporate Presentation Site" className="rounded-xl w-full object-cover shadow-xs" />
          <div className="w-[90%] -mt-16 bg-white rounded-xl shadow-lg p-5 z-10 flex flex-col justify-between min-h-[140px] text-center border border-gray-100">
            <h3 className="text-[#4D4D4D] font-bold text-[16px] leading-snug">
              Fast-Loading Corporate Presentation Site
            </h3>
            <Link to="/contact" className="flex justify-center items-center gap-1.5 text-[#4CAF4F] hover:text-[#3d913f] font-semibold text-sm cursor-pointer mt-3 transition-colors">
              <span>Request similar project</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
