"use client";

import { Mail, Instagram, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 text-gray-300 min-h-screen flex flex-col justify-center gap-8 scroll-mt-16"
    >
      <header className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Get in Touch!
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-400">
          Interested in my work? Or just wanna say hi? Feel free to reach out
          using the links below!
        </p>
      </header>

      <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Email */}
        <a
          href="mailto:fathirachmann@gmail.com"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
          aria-label="Send email"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-400/30">
            <Mail className="h-5 w-5 text-indigo-300" />
          </span>
          <div className="min-w-0">
            <p className="text-sm text-gray-400">Email</p>
            <p className="truncate font-medium text-white">
              fathirachmann@gmail.com
            </p>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/fathirachmann"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
          aria-label="Open Instagram"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-400/30">
            <Instagram className="h-5 w-5 text-indigo-300" />
          </span>
          <div className="min-w-0">
            <p className="text-sm text-gray-400">Instagram</p>
            <p className="truncate font-medium text-white">@fathirachmann</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/fathirachmann"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
          aria-label="Open GitHub"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-400/30">
            <Github className="h-5 w-5 text-indigo-300" />
          </span>
          <div className="min-w-0">
            <p className="text-sm text-gray-400">GitHub</p>
            <p className="truncate font-medium text-white">@fathirachmann</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/fathirachmann/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
          aria-label="Open LinkedIn"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-400/30">
            <Linkedin className="h-5 w-5 text-indigo-300" />
          </span>
          <div className="min-w-0">
            <p className="text-sm text-gray-400">LinkedIn</p>
            <p className="truncate font-medium text-white">/in/fathirachman</p>
          </div>
        </a>
      </div>
    </section>
  );
}
