import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    gsap.fromTo(
      ".animated-hero-wrapper",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Crafting
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Seamless Experiences</h1>
              <h1>with Code & Creativity</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none w-[50%]">
              Hi, I’m Pratik, a full stack developer from Pune turning ideas into scalable web experiences.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: Animated Circular Image */}
        <figure>
  <div className="w-full flex justify-center items-center absolute top-110 right-0 xl:absolute md:top-130 xl:top-50 2xl:top-20 xl:right-0 xl:w-[50%] 2xl:w-[55%] mt-10 xl:mt-0">
    <div className="animated-hero-wrapper relative w-[70vw] sm:w-[240px] md:w-[340px] lg:w-[360px] xl:w-[400px] max-w-[90vw] aspect-square rounded-full border-[6px] border-white animate-spin-slow p-2 bg-black/20">
      <img
        src="/images/optimized-room.png"
        alt="Workspace"
        className="w-full h-full object-cover rounded-full border-4 border-black shadow-lg"
      />
      {/* Black curved SVG at bottom */}
      <svg
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-[-1]"
        width="100"
        height="30"
        viewBox="0 0 100 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,0 C50,60 50,60 100,0" fill="black" />
      </svg>
    </div>
  </div>
</figure>

      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
