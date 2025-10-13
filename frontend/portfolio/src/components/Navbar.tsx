"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    {
      href: "https://instagram.com/fathirachmann",
      label: "Instagram",
      Icon: Instagram,
    },
    { href: "https://github.com/fathirachmann", label: "GitHub", Icon: Github },
    {
      href: "https://linkedin.com/in/fathirachman",
      label: "LinkedIn",
      Icon: Linkedin,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="inline-flex items-center gap-2 font-semibold tracking-tight text-gray-100"
        >
          <Image
            src="/logo_F_brackets_clean_white.png"
            alt="Fathirachmann logo"
            width={120}
            height={36}
            className="h-8 w-auto md:h-9"
            priority
          />
          <span className="text-sm md:text-base text-white">
            Faisal&apos;s Portfolio
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Desktop social icons */}
          <div className="hidden items-center gap-2 md:flex">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-800 text-gray-300 hover:bg-gray-900"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-800 text-gray-300 hover:bg-gray-900"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-gray-800 bg-gray-950 md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-3 text-gray-300">
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-md px-2 py-2 hover:bg-gray-900"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile social icons */}
            <div className="mt-3 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-800 text-gray-300 hover:bg-gray-900"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
