import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const RESUME_PATH = "/Pratik-Yawalkar-Resume.pdf";

const Resume = () => {
  useGSAP(() => {
    gsap.from(".resume-frame", {
      opacity: 0,
      yPercent: 12,
      scale: 0.94,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#resume",
        start: "top 70%",
      },
    });
  });

  return (
    <section id="resume" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="My Resume" sub="📄 A Quick Overview" />

        <div className="mt-16 flex flex-col items-center">
          {/* Floating, glowing PDF frame */}
          <div className="resume-frame animate-float relative w-full max-w-3xl">
            {/* Blue glow behind the frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 z-0 rounded-3xl blur-[70px] opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, #2563eb 0%, #1e3a8a 45%, transparent 75%)",
              }}
            />

            <div className="relative z-[1] rounded-2xl border border-white/15 bg-black-100 p-2 shadow-2xl md:p-3">
              <object
                data={`${RESUME_PATH}#view=FitH&toolbar=0&navpanes=0`}
                type="application/pdf"
                className="h-[70vh] min-h-[420px] w-full rounded-xl bg-white"
                aria-label="Pratik Yawalkar resume"
              >
                {/* Fallback for browsers/phones that can't inline-render a PDF */}
                <div className="flex h-[70vh] min-h-[420px] w-full flex-col items-center justify-center gap-4 rounded-xl bg-black-200 text-center px-6">
                  <p className="text-white-50 md:text-lg">
                    Your browser can’t display the PDF inline.
                  </p>
                  <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
                  >
                    Open Resume
                  </a>
                </div>
              </object>
            </div>
          </div>

          {/* Actions */}
          <div className="relative z-[1] mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 font-semibold text-white-50 transition-colors hover:bg-white/10 hover:text-white md:text-lg"
            >
              Open in new tab
            </a>
            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-black transition-transform hover:scale-105 md:text-lg"
            >
              Download PDF
              <img src="/images/arrow-down.svg" alt="" className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
