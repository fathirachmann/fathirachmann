"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import {
  MapPin,
  Leaf,
  Gamepad2,
  Camera,
  Newspaper,
  Puzzle,
  ExternalLink,
  Github,
  Download,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
// Local stack icons will be loaded from /public/stack as SVG/PNG

// =========================
// Projects Data
// =========================
type ProjectItem = {
  title: string;
  date: string;
  icon: LucideIcon;
  screenshot: string;
  blurb: string;
  stack: string[];
  site?: string;
  repo?: string;
};

const projects: ProjectItem[] = [
  {
    title: "Geotiv8",
    date: "September 2025",
    icon: MapPin,
    screenshot: "/screenshots/Geotiv8.png",
    blurb:
      "AI vs Human Geoguessr challenge. Upload an image, let AI guess the location, drop your pin, and compare your score — built in a 2-hour hackathon.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Gemini API",
      "MongoDB",
      "TailwindCSS",
      "Vercel",
    ],
    site: "https://geotiv8.vercel.app",
    repo: "https://github.com/fathirachmann/geotiv8",
  },
  {
    title: "Florabyte",
    date: "September 2025",
    icon: Leaf,
    screenshot: "/screenshots/Florabyte.png",
    blurb:
      "AI-powered plant care assistant: identify plants from photos, generate care plans, recommend products. Includes Midtrans checkout and a lightweight admin dashboard.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Google OAuth2",
      "Midtrans",
      "Gemini API",
      "MongoDB",
      "TailwindCSS",
      "Vercel",
    ],
    site: "https://florabyte.vercel.app",
    repo: "https://github.com/fathirachmann/florabyte",
  },
  {
    title: "Nintendo Store Clone",
    date: "September 2025",
    icon: Gamepad2,
    screenshot: "/screenshots/Nentindo.png",
    blurb:
      "A modern recreation of the Nintendo Store with clean UI and responsive performance.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "MongoDB",
      "JWT",
      "Vercel",
      "AWS",
    ],
    site: "https://nentindo-store.vercel.app/",
    repo: "https://github.com/fathirachmann/nintendo-store",
  },
  {
    title: "Instageram (Expo SDK 53)",
    date: "September 2025",
    icon: Camera,
    screenshot: "/screenshots/Instageram.jpeg",
    blurb:
      "A mobile-first Instagram clone built with React Native and Apollo GraphQL for real-time social interactions.",
    stack: [
      "JavaScript",
      "React Native",
      "TailwindCSS",
      "Expo",
      "Redux",
      "Redis",
      "MongoDB",
      "Apollo Client",
      "Apollo Server",
      "GraphQL",
      "AWS",
    ],
    repo: "https://github.com/fathirachmann/instageram",
  },
  {
    title: "NewsFlashAI",
    date: "August 2025",
    icon: Newspaper,
    screenshot: "/screenshots/NewsFlashAI.png",
    blurb:
      "AI news summarizer that condenses long articles into short, insightful summaries with sentiment and impact analysis.",
    stack: [
      "JavaScript",
      "React",
      "Vite",
      "TailwindCSS",
      "Express",
      "Gemini API",
      "Redux",
      "PostgreSQL",
      "Sequelize",
      "AWS",
    ],
    site: "https://ip-hck86-news-flash-ai.web.app/login",
    repo: "https://github.com/fathirachmann/IP-HCK86-NewsFlashAI",
  },
  {
    title: "Simon Game",
    date: "June 2025",
    icon: Puzzle,
    screenshot: "/screenshots/SimonGame.png",
    blurb:
      "A simple single-page memory game recreating the classic Simon experience using DOM and jQuery.",
    stack: ["JavaScript", "HTML", "CSS", "jQuery"],
    site: "https://fathirachmann.github.io/simon_game_h8/",
    repo: "https://github.com/fathirachmann/simon_game_h8",
  },
];

// Map stack labels to local icon base names (without extension)
const STACK_ICON_KEYS: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  NextJS: "nextjs",
  Vite: "vite",
  Go: "go",
  React: "react",
  "React Native": "reactnative",
  "Next.js": "nextjs",
  MongoDB: "mongodb",
  Redux: "redux",
  Redis: "redis",
  GraphQL: "graphql",
  "Apollo Client": "apollo",
  "Apollo Server": "apollo",
  Expo: "expo",
  TailwindCSS: "tailwindcss",
  Vercel: "vercel",
  "Google OAuth2": "google",
  "Google Oauth 2": "google",
  "Gemini API": "gemini",
  Express: "express",
  PostgreSQL: "postgresql",
  Sequelize: "sequelize",
  HTML: "html",
  CSS: "css",
  jQuery: "jquery",
  JWT: "jwt",
  Midtrans: "midtrans",
  AWS: "aws",
};

const toIconKey = (label: string): string | null => {
  return STACK_ICON_KEYS[label] ?? null;
};

// =========================
// Project Card
//  - FIX: ensure all adjacent JSX is wrapped by a single parent (<article>)
// =========================
function ProjectCard({
  title,
  date,
  blurb,
  stack,
  icon: Icon,
  screenshot,
  site,
  repo,
}: ProjectItem) {
  return (
    <article className="group relative h-[20rem] w-72 md:h-[22rem] md:w-[22rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col snap-start">
      {/* Screenshot */}
      <div className="relative h-32 md:h-36">
        <img
          src={screenshot}
          alt={`${title} screenshot`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
      </div>

      {/* Content */}
      <div className="p-4 pb-2 flex-1">
        <div className="relative flex items-start gap-3">
          <div className="hidden md:grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-400/30">
            <Icon className="h-5 w-5 text-indigo-300" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-[0.95rem] font-semibold text-white tracking-tight truncate">
                  {title}
                </h3>
                <p className="mt-0.5 text-[0.7rem] text-gray-400">{date}</p>
              </div>
              {(site || repo) && (
                <div className="shrink-0 flex items-center gap-2">
                  {site && (
                    <a
                      href={site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 items-center justify-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 text-[11px] text-gray-200 hover:bg-white/10"
                      aria-label="Open site"
                    >
                      <ExternalLink className="h-3 w-3" /> Live
                    </a>
                  )}
                  {repo && (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 items-center justify-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 text-[11px] text-gray-200 hover:bg-white/10"
                      aria-label="Open repository"
                    >
                      <Github className="h-3 w-3" /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="relative mt-3 text-sm text-gray-300 leading-relaxed line-clamp-3">
          {blurb}
        </p>
      </div>

      {/* Tech stack pinned to bottom */}
      <div className="p-4 pt-0 flex flex-wrap items-center gap-2 mt-auto">
        {stack.map((s) => {
          const key = toIconKey(s);
          return key ? (
            <img
              key={s}
              src={`/stack/${key}.svg`}
              alt={`${s} logo`}
              title={s}
              width={18}
              height={18}
              className="rounded-[4px]"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement & {
                  dataset: { fallback?: string };
                };
                if (!img.dataset.fallback) {
                  img.src = `/stack/${key}.png`;
                  img.dataset.fallback = "png";
                } else if (img.dataset.fallback === "png") {
                  img.src = "/stack/_fallback.svg";
                  img.dataset.fallback = "done";
                }
              }}
            />
          ) : (
            <span
              key={s}
              className="text-[10px] text-gray-400 px-1 py-0.5 border border-white/10 rounded"
            >
              {s}
            </span>
          );
        })}
      </div>

      {/* Soft ring & glow overlays kept INSIDE the same parent */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-indigo-400/40" />
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,0.20), rgba(99,102,241,0))",
        }}
      />
    </article>
  );
}

// =========================
// Infinite Carousel
// =========================
type InfiniteCarouselProps = {
  items: ProjectItem[];
  ariaLabel?: string;
};

function InfiniteCarousel({ items, ariaLabel }: InfiniteCarouselProps) {
  // Static list; no duplicated items since animation is disabled
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel as EventListener);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-auto no-scrollbar"
      aria-label={ariaLabel}
    >
      {/* gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0b0f1a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0b0f1a] to-transparent" />

      <div className="flex gap-4 md:gap-6 px-2 md:px-0 snap-x snap-mandatory">
        {items.map((p, idx) => (
          <ProjectCard key={`${p.title}-${idx}`} {...p} />
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

// =========================
// Projects Section (Export)
// =========================
export default function ProjectsSection() {
  // --- Lightweight runtime tests (only run in dev) ---
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    // Test cases: validate project entries
    console.group("[ProjectsSection] sanity checks");
    console.assert(
      Array.isArray(projects) && projects.length > 0,
      "projects should be a non-empty array"
    );
    projects.forEach((p, i) => {
      console.assert(
        typeof p.title === "string" && p.title.length > 0,
        `Project[${i}] title`
      );
      console.assert(
        typeof p.date === "string" && p.date.length > 0,
        `Project[${i}] date`
      );
      console.assert(
        typeof p.blurb === "string" && p.blurb.length > 0,
        `Project[${i}] blurb`
      );
      console.assert(
        Array.isArray(p.stack) && p.stack.length > 0,
        `Project[${i}] stack`
      );
      console.assert(
        typeof p.screenshot === "string" &&
          (p.screenshot.startsWith("/") || /^https?:\/\//.test(p.screenshot)),
        `Project[${i}] screenshot path or url`
      );
      console.assert(
        typeof p.icon === "function",
        `Project[${i}] icon component`
      );
    });
    // Extra: ensure duplicate concatenation for loop works
    const loopLength = [...projects, ...projects].length;
    console.assert(
      loopLength === projects.length * 2,
      "duplicated array should be x2 length"
    );
    console.groupEnd();
  }, []);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 text-gray-300 min-h-screen flex flex-col justify-center gap-5 md:gap-6 scroll-mt-16"
      data-aos="fade-up"
    >
      <header className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Projects
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-400">
          A selection of my web apps and experiments.
        </p>
      </header>

      {/* Row 1 */}
      <InfiniteCarousel items={projects} ariaLabel="Projects carousel row 1" />

      {/* CV blurb and download */}
      <div className="mt-6 text-center">
        <p className="mx-auto max-w-2xl text-sm text-gray-400">
          Also, check out my education and ceritifcation by downloading my CV
          below!
        </p>
        <div className="mt-3">
          <a
            href="https://drive.google.com/file/d/1I9-cDSn6Uck7IEGAthbVpCI76yR5dNwN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 hover:bg-white/10"
            aria-label="Download CV"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
