import ProfileCard from "../ProfileCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="text-gray-100 scroll-mt-16 min-h-screen flex items-center"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-24">
        <h2
          className="mb-8 inline-block border-b border-gray-800 pb-3 text-3xl font-semibold tracking-tight text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </h2>

        <div className="grid items-start gap-8 md:gap-12 md:grid-cols-2">
          {/* Text */}
          <div
            className="space-y-4 md:space-y-5 leading-relaxed text-gray-400 md:order-2 text-justify"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <p>
              I began my career in mining engineering, where I developed a deep
              sense of precision, data analysis, and system design. That
              structured way of thinking, combined with my love for creativity
              and problem-solving, naturally drew me to the world of web
              development.
            </p>
            <p>
              After completing Hacktiv8’s Full Stack Web Development program and
              graduating at the top of my class, I’ve focused on building
              modern, AI-powered web applications using React, Node.js, and Go,
              with strong experience in the MERN Stack (MongoDB, Express, React,
              Node.js).
            </p>
            <p>
              I’m a quick learner and a great “copycat”, I absorb ideas and new
              things fast, easily adapt to patterns, and turn them into clean,
              reliable solutions. My curiosity keeps me exploring new
              technologies and creative approaches to make complex ideas feel
              simple and intuitive for users.
            </p>
            <p>
              Above all, I enjoy crafting software that balances structure with
              creativity and systems that work beautifully, solve real problems,
              and feel effortless to use.
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
