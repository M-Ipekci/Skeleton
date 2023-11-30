import { useEffect, useState } from "react";
import { content } from "../Content";
import Spline from '@splinetool/react-spline';

// ... (imports)

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="relative overflow-hidden">
      <style>
        {`
          @media only screen and (max-width: 767px) {
            .flex-col-reverse-mobile {
              flex-direction: column-reverse !important;
            }

            .text-center-mobile {
              text-align: center !important;
            }
          }
        `}
      </style>

      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* ... (existing code) */}

        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h2 className="rotate-90 absolute top-[30%] right-[15%]">{hero.title}</h2>
        </div>

        <div className="pb-16 px-6 pt-5 z-10 text-center-mobile" data-aos="fade-down">
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
                  ${i === 1 && " flex-row-reverse text-right flex-col-reverse-mobile"}
                `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
