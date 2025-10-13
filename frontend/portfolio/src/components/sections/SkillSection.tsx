"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type SkillItem = { name: string; logo: string };
type LogoLoopRowProps = { items: SkillItem[]; speed?: number };

function LogoLoopRow({ items, speed = 50 }: LogoLoopRowProps) {
  return (
    <div className="relative overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-none">
      <div
        className="flex items-center gap-6 md:gap-10 py-3 md:py-4"
        style={{
          animation: `loopLeft ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 md:gap-3">
            <Image
              src={item.logo}
              alt={item.name}
              className="h-6 w-6 md:h-10 md:w-10 object-contain"
              width={40}
              height={40}
            />
            <span className="text-xs md:text-base font-medium tracking-wide text-gray-200">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [heights, setHeights] = useState<number[]>([]);
  // Measure content heights once mounted (ensures open animation has a target height)
  useLayoutEffect(() => {
    setHeights(contentRefs.current.map((el) => (el ? el.scrollHeight : 0)));
  }, []);

  // Keep heights in sync (e.g., when images load or on resize)
  useEffect(() => {
    const observers: ResizeObserver[] = [];
    contentRefs.current.forEach((el, idx) => {
      if (!el) return;
      const ro = new ResizeObserver(() => {
        setHeights((prev) => {
          const next = [...prev];
          next[idx] = el.scrollHeight;
          return next;
        });
      });
      ro.observe(el);
      observers.push(ro);
    });
    const onResize = () => {
      setHeights(contentRefs.current.map((el) => (el ? el.scrollHeight : 0)));
    };
    window.addEventListener("resize", onResize);
    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const skills = [
    { name: "JavaScript", logo: "/stack/javascript.svg" },
    { name: "TypeScript", logo: "/stack/typescript.svg" },
    { name: "Go", logo: "/stack/go.svg" },
    { name: "React", logo: "/stack/react.svg" },
    { name: "React Vite", logo: "/stack/vite.svg" },
    { name: "React Native", logo: "/stack/reactnative.svg" },
    { name: "Redux", logo: "/stack/redux.svg" },
    { name: "Node.js", logo: "/stack/nodejs.svg" },
    { name: "Next.js", logo: "/stack/nextjs.svg" },
    { name: "MongoDB", logo: "/stack/mongodb.svg" },
    { name: "PostgreSQL", logo: "/stack/postgresql.svg" },
    { name: "TailwindCSS", logo: "/stack/tailwindcss.svg" },
    { name: "Docker", logo: "/stack/docker.svg" },
    { name: "Amazon Web Services", logo: "/stack/aws.svg" },
    { name: "Google Cloud Platform", logo: "/stack/google.svg" },
    { name: "Vercel", logo: "/stack/vercel.svg" },
    { name: "Firebase", logo: "/stack/firebase.svg" },
    { name: "Sequelize", logo: "/stack/sequelize.svg" },
    { name: "Redis", logo: "/stack/redis.svg" },
  ];

  const stackList = [
    {
      title: "Languages",
      tools: [
        {
          name: "JavaScript",
          logo: "/stack/javascript.svg",
        },
        {
          name: "TypeScript",
          logo: "/stack/typescript.svg",
        },
        {
          name: "Go",
          logo: "/stack/go.svg",
        },
      ],
    },
    {
      title: "Front End",
      tools: [
        {
          name: "React.js",
          logo: "/stack/react.svg",
        },
        {
          name: "React Native",
          logo: "/stack/reactnative.svg",
        },
        {
          name: "Next.js",
          logo: "/stack/nextjs.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "/stack/tailwindcss.svg",
        },
        {
          name: "Redux",
          logo: "/stack/redux.svg",
        },
        {
          name: "Vite",
          logo: "/stack/vite.svg",
        },
      ],
    },
    {
      title: "Back End",
      tools: [
        {
          name: "Node.js",
          logo: "/stack/nodejs.svg",
        },
        {
          name: "Express",
          logo: "/stack/express.svg",
        },
        {
          name: "GraphQL",
          logo: "/stack/graphql.svg",
        },
        {
          name: "Gin Gonic",
          logo: "/stack/gin.svg",
        },
        {
          name: "GORM",
          logo: "/stack/gorm.svg",
        },
        {
          name: "Sequelize",
          logo: "/stack/sequelize.svg",
        },
        {
          name: "Redis",
          logo: "/stack/redis.svg",
        },
        {
          name: "PostgreSQL",
          logo: "/stack/postgresql.svg",
        },
        {
          name: "MongoDB",
          logo: "/stack/mongodb.svg",
        },
      ],
    },
    {
      title: "Cloud Deployment",
      tools: [
        {
          name: "Docker",
          logo: "/stack/docker.svg",
        },
        {
          name: "AWS",
          logo: "/stack/aws.svg",
        },
        {
          name: "GCP",
          logo: "/stack/google.svg",
        },
        {
          name: "Vercel",
          logo: "/stack/vercel.svg",
        },
        {
          name: "Cloudflare",
          logo: "/stack/cloudflare.svg",
        },
        {
          name: "Firebase",
          logo: "/stack/firebase.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="text-gray-100 scroll-mt-16 min-h-screen flex items-center"
      data-aos="fade-up"
    >
      <style>{`@keyframes loopLeft { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20 text-center">
        <h2 className="mb-5 md:mb-6 font-sans text-3xl md:text-4xl font-bold tracking-tight text-white mx-auto max-w-xs sm:max-w-sm">
          Skills & Tech Stacks
        </h2>
        <LogoLoopRow items={skills} />

        {/* Accordion list */}
        <div className="mx-auto mt-10 md:mt-12 max-w-xs sm:max-w-sm md:max-w-3xl space-y-2 divide-y divide-gray-800/70 border-y border-gray-800/70 text-left">
          {stackList.map((stack, i) => (
            <div key={i} className="bg-transparent p-2">
              <button
                type="button"
                className="flex w-full cursor-pointer select-none items-center justify-between px-1 py-2 md:py-3"
                aria-expanded={openIndex === i}
                aria-controls={`stack-panel-${i}`}
                onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold uppercase tracking-wide text-gray-300">
                    {stack.title}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({stack.tools.length})
                  </span>
                </div>
                <svg
                  className={`h-4 w-4 text-gray-500 transition-transform duration-300 ease-in-out ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id={`stack-panel-${i}`}
                ref={(el) => {
                  contentRefs.current[i] = el;
                }}
                style={{
                  maxHeight: openIndex === i ? `${heights[i] ?? 0}px` : "0px",
                }}
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out will-change-[max-height]"
              >
                <div
                  className={`mt-3 flex flex-wrap items-center gap-2 md:gap-4 transition-opacity duration-300 ease-in-out ${
                    openIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {stack.tools.map((tool, j) => (
                    <div key={j} className="flex items-center gap-2 md:gap-3">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        className="h-5 w-5 md:h-8 md:w-8 object-contain"
                        width={32}
                        height={32}
                      />
                      <span className="text-xs md:text-sm text-gray-300">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
