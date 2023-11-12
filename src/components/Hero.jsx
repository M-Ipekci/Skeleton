/*
import React, { useRef } from "react";
import { content } from "../Content";
import { Application } from '@splinetool/runtime';

const Hero = () => {
  const { hero } = content;
  const canvasRef = useRef(null);

  const initializeSpline = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode');
    } else {
      console.error('Canvas element not found!');
    }
  };

  initializeSpline();

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
        </div>

        {}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {}
        <canvas ref={canvasRef} id="canvas3d"></canvas>
      </div>
    </section>
  );
};

export default Hero; */

// import content
import React from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          {/* Add anything */}
          {/* Inject the spline-viewer script tag */}
          <div dangerouslySetInnerHTML={{ __html: '<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.496/build/spline-viewer.js"></script><spline-viewer url="https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode"></spline-viewer>' }} />
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
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
