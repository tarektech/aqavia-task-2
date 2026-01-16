import arrowTop from "../assets/images/Vector 186.png";
import arrowBottom from "../assets/images/Vector 187.png";
import personImg from "../assets/images/Group 2346.png";
import doodlesImg from "../assets/images/doodles mixed round.png";
export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] bg-(--color-1) ">
      {/* Vertical line divider */}
      <div className="line-1 opacity-10" />

      {/* Scroll indicator */}
      <div className="scroll-arrow" />

      <div className="container mx-auto px-8 py-20 flex items-center justify-between ">
        {/* Left side */}
        <div className="relative z-10 flex-1">
          {/* Decorative arrows */}
          <div className="absolute -left-16 top-0">
            <img src={arrowTop} alt="" className="w-12 opacity-60" />
          </div>
          <div className="absolute -left-16 top-32">
            <img src={arrowBottom} alt="" className="w-10 opacity-60" />
          </div>

          {/* Title */}
          <div className="mb-10">
            <h1 className="Oswald-Font text-6xl md:text-7xl lg:text-8xl font-bold text-(--color-4) tracking-wide">
              CREATIVE UI
            </h1>
            <h2 className="Oswald-Font text-6xl md:text-7xl lg:text-8xl font-bold text-(--color-3) tracking-wide">
              DESIGNER
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-(--color-3) text-(--color-1) px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Hire me
            </button>
            <button className="border border-(--color-2) bg-(--color-2) text-(--color-4) px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="relative flex-1 flex justify-center items-center">
          <img
            src={doodlesImg}
            alt=""
            className="absolute w-[514px] h-[514px] object-contain opacity-80"
          />
          <img
            src={personImg}
            alt="Designer illustration"
            className="relative z-10 w-[400px] h-[472.65px]  top-35 -left-20  "
          />
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}
