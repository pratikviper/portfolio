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

        {/* RIGHT: Portrait with background glow */}
        <figure>
  <div className="w-full flex justify-center items-center absolute top-130 right-0 xl:absolute md:top-150 xl:top-40 2xl:top-32 xl:right-0 xl:w-[50%] 2xl:w-[55%] mt-10 xl:mt-0">
    <div className="animated-hero-wrapper relative flex items-center justify-center w-[80vw] sm:w-[340px] md:w-[440px] lg:w-[480px] xl:w-[540px] max-w-[92vw]">
      {/* Blue background glow (paints behind the portrait via DOM order) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-center -translate-y-[8%]"
      >
        <div
          className="w-[120%] aspect-square rounded-full blur-[70px] opacity-95"
          style={{
            background:
              "radial-gradient(circle, #60a5fa 0%, #2563eb 35%, #1e3a8a 55%, transparent 70%)",
          }}
        />
      </div>

      {/* Portrait cutout */}
      <img
        src="/images/myself.png"
        alt="Pratik Yawalkar"
        className="relative z-[1] w-full h-auto object-contain drop-shadow-2xl"
        loading="lazy"
      />
    </div>
  </div>
</figure>

      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
