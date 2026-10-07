import React from "react";
import { Link } from "react-router-dom";
import illustration from "../images/Illustration.png";
import dot from "../images/dot.png";

const Hero = () => {
  return (
    <section id="home" className="bg-[#F5F7FA] pb-12">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-8 lg:px-24 py-16 lg:py-20 gap-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-green-100 text-[#4CAF4F] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            <span>✨ Pure Frontend Web Specialists</span>
          </div>

          <h1 className="text-[40px] lg:text-[46px] font-bold text-[#4D4D4D] leading-tight">
            Custom Websites Crafted
          </h1>
          <div className="text-[#4CAF4F] font-bold text-[40px] lg:text-[46px] leading-tight mb-4">
            Without Backend Hassle.
          </div>

          <p className="text-[15px] text-[#717171] leading-relaxed mb-8">
            We specialize exclusively in designing and coding high-converting, mobile-responsive <strong>frontend pages</strong>. Whether you need a landing page, portfolio, or sleek corporate showcase, we deliver pixel-perfect UI experiences without unnecessary backend complexity or server costs.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4CAF4F] hover:bg-[#3d913f] transition-all rounded-lg text-white font-semibold cursor-pointer shadow-sm hover:shadow"
            >
              Contact Us for a Quote
            </Link>

            <a 
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 hover:border-[#4CAF4F] text-[#4D4D4D] hover:text-[#4CAF4F] transition-all rounded-lg font-medium cursor-pointer bg-white"
            >
              Explore Services ↓
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src={illustration} alt="Frontend Web Development Illustration" className="max-w-[420px] w-full" />
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <img src={dot} alt="Indicator dots" />
      </div>
    </section>
  );
};

export default Hero;
