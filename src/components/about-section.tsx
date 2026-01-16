import aboutIllustration from "../assets/images/Group 62.png";
import doodleItems from "../assets/images/doodle items.png";
import floorbackground from "../assets/images/floor background.png";

export function AboutSection() {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 lg:px-30 mb-10 md:mb-20 bg-(--color-1) min-h-auto lg:min-h-[calc(100vh-100px)]">
      <div className="absolute left-[42%] top-0  h-full w-px bg-(--color-4) opacity-10 hidden md:block" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6 max-w-full lg:max-w-[420px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-4)">
            About <span className="text-(--color-3)">me</span>
          </h2>
          <p className="text-base md:text-lg text-(--color-4) leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis....{" "}
            <span className="font-bold cursor-pointer">Read more</span>
          </p>
        </div>

        <div className="hidden lg:flex justify-center relative w-full max-w-[500px]">
          <img
            src={doodleItems}
            alt="Doodle background"
            className="absolute top-0 left-0 w-[665px] h-[499px] object-cover"
          />
          <img
            src={aboutIllustration}
            alt="About illustration"
            className="absolute top-60 left-0 w-[412px] h-[353px] z-10"
          />
          <img
            src={floorbackground}
            alt="About illustration"
            className="absolute top-146 left-8 w-[348px] h-[24px] z-10"
          />
        </div>
      </div>
      <span className="line-2 opacity-10" />
    </section>
  );
}
