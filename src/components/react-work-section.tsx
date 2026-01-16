import courseLandingPage1 from "../assets/images/recent-work-image/course-landing-page-1.png";
import courseLandingPage2 from "../assets/images/recent-work-image/course-landing-page-2.png";
import courseLandingPage3 from "../assets/images/recent-work-image/course-landing-page-3.png";

const myImageRecentWork = [
  {
    id: 1,
    image: courseLandingPage1,
    alt: "My Recent Work",
  },
  {
    id: 2,
    image: courseLandingPage2,
    alt: "My Recent Work",
  },
  {
    id: 3,
    image: courseLandingPage3,
    alt: "My Recent Work",
  },
];

export function MyRecentWorkSection() {
  return (
    <section className="min-h-screen relative">
      <div className="illustration-image" />
      <div className="relative z-10">
        <div className="flex flex-col">
          {/* my recent work */}
          <div className="flex flex-col items-center p-4 md:p-8 lg:p-16">
            {/* Title */}
            <div className="self-start w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-12">
                <span className="text-(--color-4) ">My recent </span>
                <span className="text-(--color-3) italic">works</span>
              </h2>
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 md:gap-4">
                <button className="px-4 md:px-8 py-2 md:py-3 bg-(--color-3) text-white rounded-full font-semibold text-sm md:text-lg hover:opacity-90 transition-opacity">
                  All
                </button>
                <button className="px-4 md:px-8 py-2 md:py-3 bg-(--color-2) text-white rounded-full font-semibold text-sm md:text-lg hover:bg-(--color-3) transition-colors">
                  UI
                </button>
                <button className="px-4 md:px-8 py-2 md:py-3 bg-(--color-2) text-white rounded-full font-semibold text-sm md:text-lg hover:bg-(--color-3) transition-colors">
                  UX
                </button>
                <button className="px-4 md:px-8 py-2 md:py-3 bg-(--color-2) text-white rounded-full font-semibold text-sm md:text-lg hover:bg-(--color-3) transition-colors">
                  Web Design
                </button>
              </div>
            </div>
          </div>
          {/* image illustration */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-12 pb-8 md:pb-16">
            {myImageRecentWork.map((image) => (
              <div
                key={image.id}
                className="flex-1 rounded-3xl p-4 md:p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px]"
              >
                <img
                  src={image.image}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
