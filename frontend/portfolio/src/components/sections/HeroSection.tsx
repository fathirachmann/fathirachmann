export function HeroSection() {
  return (
    <section
      id="hero"
      className="text-gray-100 scroll-mt-16 min-h-screen flex items-center"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Hello World! I’m Faisal!{" "}
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mt-2">
            <span className="text-blue-400">Full-Stack Web Developer</span>
          </h1>
          <p className="mt-5 mx-auto max-w-md md:max-w-xl leading-relaxed text-gray-400 px-2">
            Driven by the idea that great software should be smart, simple, and
            crafted with care. I love turning ideas into thoughtful experiences
            where every detail matters.
          </p>
          <p className="mt-3 mx-auto max-w-md md:max-w-xl text-gray-500 italic px-2">
            &ldquo;Curiosity is key, knowledge is power&rdquo;
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="/cv/FaisalFathiRachman_FSJS.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-3 font-medium text-gray-200 transition-colors hover:bg-gray-800"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
