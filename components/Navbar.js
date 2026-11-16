
"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        
        {/* Logo / Name */}
        <Link
          href="/#home"
          onClick={() => setOpen(false)}
          className="text-lg font-bold tracking-wide text-indigo-400 transition hover:text-indigo-300 sm:text-xl"
        >
          <span className="sm:hidden">Atika</span>
          <span className="hidden sm:inline">
            Umme Ayman Atika Khatun
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-indigo-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-2xl text-slate-200 transition hover:bg-slate-800 hover:text-indigo-400 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <ul
          id="mobile-navigation"
          className="flex flex-col gap-2 border-t border-slate-800 bg-slate-950/95 px-5 py-4 shadow-xl md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:bg-slate-800 hover:text-indigo-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
