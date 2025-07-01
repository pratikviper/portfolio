'use client';

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn_data/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Project 1 - YouTellMe */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper relative">
              <img src="/images/project1.png" alt="YouTellMe App" />
              <a
                href="https://github.com/pratikviper/youtellme_new_frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 text-white hover:text-gray-300"
              >
                <FaGithub className="text-4xl text-black" />
              </a>
            </div>
            <div className="text-content">
              <h2 className="flex items-center gap-4 flex-wrap">
                <a
                  href="https://tellmedigi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 underline hover:text-blue-300"
                >
                  Live Site
                </a>
                YouTellMe – Media Marketplace
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack e-commerce platform for stock photos, videos, and 360° VR content.
              </p>
            </div>
          </div>

          {/* Project 2 - Car Dealer */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="w-full p-0 m-0" ref={libraryRef}>
              <Carousel className="w-full p-0 m-0 aspect-video bg-[#FFEFDB] rounded-xl relative overflow-hidden">
                <CarouselContent className="p-0 m-0 w-full">
                  {["project2", "project2(1)", "project2(2)", "project2(3)", "project2(4)"].map((img, idx) => (
                    <CarouselItem
                      key={idx}
                      className="p-0 m-0 w-full aspect-video flex justify-center items-center overflow-hidden"
                    >
                      <img
                        src={`/images/${img}.jpeg`}
                        alt={`Car Dealer ${idx + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <a
                  href="https://github.com/pratikviper/car-dealer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 text-white hover:text-gray-700 z-10"
                >
                  <FaGithub className="text-4xl" />
                </a>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <h2 className="mt-4">Car Dealer – Stock Listings & Management</h2>
              <p className="text-white-50 md:text-base">
                A Django + PostgreSQL-powered app for managing car inventory, search filters, and secure admin control.
              </p>
            </div>


            <div className="w-full p-0 m-0" ref={ycDirectoryRef}>
              <Carousel className="w-full p-0 m-0 aspect-video bg-[#FFE7EB] rounded-xl relative overflow-hidden">
                <CarouselContent className="p-0 m-0 w-full">
                  {["project3", "project3(1)", "project3(2)"].map((img, idx) => (
                    <CarouselItem
                      key={idx}
                      className="p-0 m-0 w-full aspect-video flex justify-center items-center overflow-hidden"
                    >
                      <img
                        src={`/images/${img}.jpeg`}
                        alt={`Musify ${idx + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <a
                  href="https://github.com/pratikviper/musify-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 text-black hover:text-gray-700 z-10"
                >
                  <FaGithub className="text-4xl" />
                </a>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <h2 className="mt-4">Musify – Music Streaming Interface</h2>
              <p className="text-white-50 md:text-base">
                A frontend music UI built with HTML, CSS, and JavaScript that mimics modern music platforms.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
