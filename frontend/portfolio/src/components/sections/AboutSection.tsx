import ProfileCard from "../ProfileCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="text-gray-100 scroll-mt-16 min-h-screen flex items-center"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2
          className="mb-8 inline-block border-b border-gray-800 pb-3 text-3xl font-semibold tracking-tight text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </h2>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Text */}
          <div
            className="space-y-5 leading-relaxed text-gray-400 md:order-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <p>
              I began my career in{" "}
              <span className="font-medium text-gray-100">
                mining engineering
              </span>
              , where I learned precision, data analysis, and system design.
              That same structured mindset naturally led me to{" "}
              <span className="font-medium text-gray-100">
                software development
              </span>
              .
            </p>
            <p>
              After completing Hacktiv8’s{" "}
              <span className="font-medium text-gray-100">
                Full Stack Web Development
              </span>{" "}
              program and graduating top of my class, I focused on building
              modern{" "}
              <span className="font-medium text-gray-100">
                AI‑powered web applications
              </span>{" "}
              using <span className="text-blue-400">React</span>,{" "}
              <span className="text-blue-400">Node.js</span>, and{" "}
              <span className="text-blue-400">Go</span>, as well as working
              extensively with the{" "}
              <span className="font-medium text-gray-100">MERN Stack</span>{" "}
              (MongoDB, Express, React, Node.js).
            </p>
            <p>
              My approach is practical and detail oriented: clean architecture,
              reliable performance, and code that simplifies complex ideas for
              real users.
            </p>
          </div>

          {/* Visual */}
          <div
            className="flex justify-center md:justify-start md:order-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ProfileCard avatarUrl="/profile-1.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
