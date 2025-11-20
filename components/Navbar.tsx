"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "Expertise", scrollTo: "digital-compass-explainer" },
 // { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact", cta: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/5 backdrop-blur
      ${scrolled ? "bg-slate-950/70 shadow-[0_1px_0_0_rgba(255,255,255,0.08)]" : "bg-slate-950/50"}`}
    >
      <Container className="py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-extrabold text-lg">
            TheDigitalPepper<span className="text-pepper">🌶️</span>
          </Link>

          <button
            className="md:hidden rounded-lg px-3 py-2 ring-1 ring-white/10"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>

          <ul className="hidden md:flex items-center gap-6">
            {links.map(({ href, label, cta, scrollTo }) => {
              const active = pathname === href;
              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (scrollTo && pathname === "/") {
                  e.preventDefault();
                  const element = document.getElementById(scrollTo);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              };

              if (cta) {
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      prefetch={true}
                      className="rounded-xl bg-pepper text-slate-950 px-4 py-2 font-semibold hover:brightness-95"
                    >
                      {label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleClick}
                    prefetch={true}
                    className={`
                      relative text-sm font-medium tracking-wide uppercase
                      transition-all duration-300 ease-out
                      ${active 
                        ? "text-pepper" 
                        : "text-gray-300 hover:text-pepper"
                      }
                      before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px]
                      before:bg-gradient-to-r before:from-pepper before:to-pepper-light
                      before:transition-all before:duration-300
                      hover:before:w-full
                      ${active ? "before:w-full" : ""}
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {open && (
          <ul
            id="mobile-nav"
            className="md:hidden mt-3 grid gap-2 rounded-xl border border-white/10 p-3 bg-slate-900/70"
          >
            {links.map(({ href, label, cta, scrollTo }) => {
              const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (scrollTo && pathname === "/") {
                  e.preventDefault();
                  setOpen(false);
                  const element = document.getElementById(scrollTo);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else {
                  setOpen(false);
                }
              };

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleMobileClick}
                    prefetch={true}
                    className={
                      cta
                        ? "block rounded-lg bg-pepper text-slate-950 px-3 py-2 font-semibold text-center uppercase tracking-wide"
                        : "block rounded-lg px-3 py-2 hover:bg-pepper/10 hover:text-pepper text-gray-200 uppercase tracking-wide font-medium transition-all duration-300"
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </header>
  );
}


