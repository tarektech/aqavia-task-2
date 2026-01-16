import { Keyboard, Mail, Send } from "lucide-react";
import climbingStairs from "../assets/images/Group 2372.png";
import curlyArrow from "../assets/images/Vector 187.png";

export function ProjectFormSection() {
  return (
    <section className="bg-(--color-1) py-20 px-8 lg:px-16 relative overflow-hidden">
      {/* Keyboard doodle - top right */}
      <div className="absolute top-8 right-[45%] z-10 rotate-[-20deg]">
        <Keyboard size={80} color="#00ADB5" strokeWidth={1.5} />
      </div>

      {/* Envelope doodle - bottom right */}
      <div className="absolute bottom-16 right-16 z-10 rotate-15">
        <Mail size={60} color="#00ADB5" strokeWidth={1.5} />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left side - Title and illustration */}
        <div className="flex-1 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-4) Oswald-Font leading-tight">
            Got a project in
            <br />
            <span className="text-(--color-3)">mind?</span>
          </h2>

          {/* Curly arrow */}
          <img
            src={curlyArrow}
            alt=""
            className="absolute left-0 top-32 w-16 opacity-60"
          />

          {/* Person climbing stairs illustration */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <img
              src={climbingStairs}
              alt="Person climbing stairs illustration"
              className="w-64 md:w-80 lg:w-96 h-auto"
            />
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="flex-1 w-full max-w-xl">
          <form className="space-y-6">
            {/* Name and Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-(--color-4) font-semibold mb-2 text-sm"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-(--color-2) text-(--color-4) placeholder:text-gray-500 rounded-lg px-4 py-3 border border-transparent focus:border-(--color-3) focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-(--color-4) font-semibold mb-2 text-sm"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-(--color-2) text-(--color-4) placeholder:text-gray-500 rounded-lg px-4 py-3 border border-transparent focus:border-(--color-3) focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-(--color-4) font-semibold mb-2 text-sm"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={8}
                className="w-full bg-(--color-2) text-(--color-4) placeholder:text-gray-500 rounded-lg px-4 py-3 border border-transparent focus:border-(--color-3) focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-(--color-3) text-(--color-1) font-semibold px-8 py-3 rounded-full flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
