"use client";

import { Mail, Instagram, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const discordUrl = "https://discord.com/users/299927882636197888";

  const discordTooltip = discordUrl.includes("000000")
    ? "Set NEXT_PUBLIC_DISCORD_URL"
    : discordUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 text-gray-300 min-h-screen flex flex-col justify-center gap-5 md:gap-8 scroll-mt-16"
    >
      <header className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Get in Touch!
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-400">
          Interested in my work? Or just wanna say hi? Feel free to reach me
          using the links below!
        </p>
      </header>

      <div className="mx-auto w-full max-w-3xl">
        <div className="no-scrollbar mx-auto flex flex-nowrap items-center justify-center gap-3 sm:gap-4 overflow-x-auto">
          {/* Email */}
          <a
            href="mailto:faisal.fathirachman@gmail.com"
            className="group relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Send email"
          >
            <Mail className="h-5 w-5 text-indigo-300" />
            <span className="sr-only">Email</span>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900/90 px-3 py-2 text-xs text-gray-200 opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="font-medium text-white">Email</div>
              <div className="text-gray-400">
                faisal.fathirachmann@gmail.com
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/fathirachmann"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Open Instagram"
          >
            <Instagram className="h-5 w-5 text-indigo-300" />
            <span className="sr-only">Instagram</span>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900/90 px-3 py-2 text-xs text-gray-200 opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="font-medium text-white">Instagram</div>
              <div className="text-gray-400">@fathirachmann</div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/fathirachmann"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Open GitHub"
          >
            <Github className="h-5 w-5 text-indigo-300" />
            <span className="sr-only">GitHub</span>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900/90 px-3 py-2 text-xs text-gray-200 opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="font-medium text-white">GitHub</div>
              <div className="text-gray-400">@fathirachmann</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fathirachmann/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Open LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-indigo-300" />
            <span className="sr-only">LinkedIn</span>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900/90 px-3 py-2 text-xs text-gray-200 opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="font-medium text-white">LinkedIn</div>
              <div className="text-gray-400">/in/fathirachmann</div>
            </div>
          </a>

          {/* Discord */}
          <a
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Open Discord"
          >
            <span
              aria-hidden
              className="h-5 w-5 text-indigo-300"
              style={{
                backgroundColor: "currentColor",
                WebkitMaskImage: "url(/discord.svg)",
                maskImage: "url(/discord.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                display: "inline-block",
              }}
            />
            <span className="sr-only">Discord</span>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900/90 px-3 py-2 text-xs text-gray-200 opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="font-medium text-white">Discord</div>
              <div className="text-gray-400">{discordTooltip}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
