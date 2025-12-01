"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CompassCta({ locale = "nl" }: { locale?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const text = {
    nl: {
      title: "De eerste stap naar",
      titleHighlight1: "jouw",
      titleMiddle: "digitale",
      titleHighlight2: "toekomst",
      subtitle: "Je bent nog maar één stap verwijderd van inzichten die je maanden aan groei kunnen opleveren.",
      primaryCta: "Start de Digital Compass Scan",
      secondaryCta: "Heb je vragen?",
      bullet1: "Vrijblijvend & snel",
      bullet2: "Concreet inzicht in jouw digitale kracht",
      bullet3: "Helpt je prioriteiten scherp te stellen",
    },
    eng: {
      title: "The first step toward",
      titleHighlight1: "your",
      titleMiddle: "digital",
      titleHighlight2: "future",
      subtitle: "You're just one step away from insights that can deliver months of growth.",
      primaryCta: "Start the Digital Compass Scan",
      secondaryCta: "Have questions?",
      bullet1: "Non-binding & fast",
      bullet2: "Concrete insight into your digital strength",
      bullet3: "Helps you sharpen priorities",
    },
  };

  const t = text[locale as keyof typeof text] || text.nl;
  const contactHref = `/${locale}/contact`;

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
      }}
    >
      {/* Background - nebula.png met overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <Image
            src="/nebula.png"
            alt=""
            fill
            className="object-cover opacity-70 mix-blend-screen"
            priority
            style={{ 
              filter: 'blur(1px)',
            }}
          />
        </div>
        {/* Dark gradient overlay voor betere integratie */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#111111]/60 to-[#0a0a0a]/70" />
      </div>

      <div className="relative z-10 max-w-[780px] mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
          {t.title} <span className="text-pepper">{t.titleHighlight1}</span> {t.titleMiddle} <span className="text-pepper">{t.titleHighlight2}</span>
        </h2>

        {/* Subheader */}
        <p className="text-lg md:text-xl text-white mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-shine">
          {t.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
          {/* Primary CTA */}
          <Link
            href={contactHref}
            className="group relative px-10 py-5 bg-[#ff2d2d] text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#ff3d3d] hover:shadow-[0_0_30px_rgba(255,45,45,0.6),0_0_60px_rgba(255,45,45,0.3)]"
          >
            {t.primaryCta}
          </Link>

          {/* Secondary CTA */}
          <Link
            href={contactHref}
            className="group px-10 py-5 border-2 border-white/30 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:border-[#ff2d2d] hover:text-[#ff2d2d]"
          >
            {t.secondaryCta}
          </Link>
        </div>

        {/* Trust Bullets */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm text-gray-400">
          <span>{t.bullet1}</span>
          <span className="hidden sm:inline">•</span>
          <span>{t.bullet2}</span>
          <span className="hidden sm:inline">•</span>
          <span>{t.bullet3}</span>
        </div>
      </div>
    </section>
  );
}

