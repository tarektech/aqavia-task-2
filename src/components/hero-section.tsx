import arrowBottom from "../assets/images/Vector 187.png";
import personImg from "../assets/images/Group 2346.png";
import doodlesImg from "../assets/images/doodles mixed round.png";
import arrowDown from "../assets/images/arrow-down.png";
export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] bg-(--color-1) ">
      <div className="absolute left-[42%] top-0  h-full w-px bg-(--color-4) opacity-10 hidden md:block" />
      {/* Scroll indicator */}
      {/* <div className="scroll-arrow hidden md:flex" /> */}
      <div className="absolute left-[38.5%] top-[80%] bg-(--color-4)  hidden lg:block">
        <img src={arrowDown} alt="arrow down" className="w-24 opacity-100" />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left side */}
        <div className="relative z-10 flex-1 text-center lg:text-left">
          <div className="absolute -left-18 top-8 hidden lg:block -rotate-20">
            <img
              src={arrowBottom}
              alt="arrow bottom"
              className="w-14 opacity-60"
            />
          </div>

          {/* Title */}
          <div className="mb-10">
            <h1 className="Oswald-Font text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-(--color-4) tracking-wide">
              CREATIVE UI
            </h1>
            <h2 className="Oswald-Font text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-(--color-3) tracking-wide">
              DESIGNER
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
            <button className="bg-(--color-3) text-(--color-1) px-6 md:px-8 py-3 rounded-full font-semibold hover:opacity-90 transition text-sm md:text-base">
              Hire me
            </button>
            <button className="border border-(--color-2) bg-(--color-2) text-(--color-4) px-6 md:px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition text-sm md:text-base">
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
        <div className="relative flex-1 flex justify-center items-center min-h-[300px] md:min-h-[400px]">
          <img
            src={doodlesImg}
            alt=""
            className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[514px] lg:h-[514px] object-contain opacity-80"
          />
          <img
            src={personImg}
            alt="Designer illustration"
            className="relative z-10 w-[200px] h-auto md:w-[300px] lg:w-[400px] lg:top-35 lg:-left-20"
          />
        </div>
      </div>
    </section>
  );
}
