"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";

export default function DigitalCompassExplainer({ locale = "nl" }: { locale?: string }) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const pillarsData = {
    nl: [
      {
        id: "foundations",
        title: "Digital Foundations",
        shortText: "De technologische basis die elke moderne organisatie nodig heeft.",
        extendedText: "Wij bouwen de technologische ruggengraat van je organisatie. Met veilige, schaalbare cloud-omgevingen, moderne werkplekken en betrouwbare systemen creëren we een fundament waarop teams sneller, slimmer en foutloos kunnen werken."
      },
      {
        id: "intelligence",
        title: "Data & Intelligence",
        shortText: "Van ruwe data naar inzichten die beslissingen en groei versnellen.",
        extendedText: "Wij maken data bruikbaar, begrijpelijk en waardevol. Van dashboards tot voorspellende modellen: we geven organisaties het inzicht en de intelligentie om sneller te beslissen, risico's te verkleinen en groei te versnellen."
      },
      {
        id: "experience",
        title: "Digital Experience & Growth",
        shortText: "Digitale zichtbaarheid, conversie en klantbeleving als groeimotor.",
        extendedText: "Wij bouwen digitale ervaringen die groeien. Met slimme funnels, conversie-optimalisatie, content en performance marketing creëren wij journeys die klanten aantrekken, activeren en terug laten komen."
      },
      {
        id: "strategy",
        title: "Strategy, AI & Enablement",
        shortText: "Strategie, innovatie en adoptie die organisaties klaar maken voor de toekomst.",
        extendedText: "Wij zorgen dat technologie gedragen wordt door mensen. Met adoptie, training, AI-workflows en verandermanagement versnellen we digitale transformatie. Zo worden teams wendbaar, data-gedreven en klaar voor de toekomst."
      }
    ],
    eng: [
      {
        id: "foundations",
        title: "Digital Foundations",
        shortText: "The technological foundation every modern organization needs.",
        extendedText: "We build the technological backbone of your organization. With secure, scalable cloud environments, modern workplaces, and reliable systems, we create a foundation on which teams can work faster, smarter, and error-free."
      },
      {
        id: "intelligence",
        title: "Data & Intelligence",
        shortText: "From raw data to insights that accelerate decisions and growth.",
        extendedText: "We make data usable, understandable, and valuable. From dashboards to predictive models: we give organizations the insight and intelligence to decide faster, reduce risks, and accelerate growth."
      },
      {
        id: "experience",
        title: "Digital Experience & Growth",
        shortText: "Digital visibility, conversion, and customer experience as growth drivers.",
        extendedText: "We build digital experiences that grow. With smart funnels, conversion optimization, content, and performance marketing, we create journeys that attract, activate, and bring customers back."
      },
      {
        id: "strategy",
        title: "Strategy, AI & Enablement",
        shortText: "Strategy, innovation, and adoption that prepare organizations for the future.",
        extendedText: "We ensure technology is embraced by people. With adoption, training, AI workflows, and change management, we accelerate digital transformation. Teams become agile, data-driven, and ready for the future."
      }
    ],
  };

  const introText = {
    nl: {
      paragraph1: "The Digital Compass™ biedt organisaties een helder kader om digitale groei te versnellen. Het model combineert strategie, data, technologie en adoptie in één samenhangend kompas dat richting geeft — ongeacht waar een organisatie zich bevindt in haar digitale reis.",
      paragraph2: "Versterk je bedrijf door te focussen op vier essentiële gebieden die duurzame en meetbare groei stimuleren.",
      conclusion: "Vind richting voor je digitale transformatie.",
    },
    eng: {
      paragraph1: "The Digital Compass™ provides organizations with a clear framework to accelerate digital growth. The model combines strategy, data, technology, and adoption into one cohesive compass that provides direction — regardless of where an organization is in its digital journey.",
      paragraph2: "Strengthen your business by focusing on four essential areas that drive sustainable and measurable growth.",
      conclusion: "Find direction for your digital transformation.",
    },
  };

  const pillars = pillarsData[locale as keyof typeof pillarsData] || pillarsData.nl;
  const intro = introText[locale as keyof typeof introText] || introText.nl;

  return (
    <section id="digital-compass-explainer" className="py-16 md:py-24 relative">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Title at top */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-pepper mb-8 whitespace-nowrap">
            The Digital Compass™
          </h2>

          {/* Two paragraphs below title */}
          <div className="space-y-4 text-white leading-relaxed mb-12 max-w-3xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl font-semibold">
              {intro.paragraph1}
            </p>
            <p className="text-base md:text-lg lg:text-xl font-semibold">
              {intro.paragraph2}
            </p>
          </div>

          {/* Compass graphic centered */}
          <div className="flex items-center justify-center my-12">
            <Image
              src="/compass1.png"
              alt="Digital Compass"
              width={300}
              height={300}
              className="w-full max-w-[300px] h-auto"
              priority
            />
          </div>

          {/* Four pillar cards below compass with connecting lines */}
          <div className="relative mt-16">
            {/* Connecting lines from central point below compass to cards */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 96" preserveAspectRatio="none" fill="none" stroke="white" strokeWidth="1" opacity="0.3">
                {/* Central point below compass */}
                <circle cx="400" cy="0" r="2" fill="white" />
                {/* Lines to each card center - 4 cards */}
                <line x1="400" y1="0" x2="100" y2="96" />
                <line x1="400" y1="0" x2="300" y2="96" />
                <line x1="400" y1="0" x2="500" y2="96" />
                <line x1="400" y1="0" x2="700" y2="96" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-24">
              {pillars.map((pillar) => {
                const isHovered = hoveredCard === pillar.id;
                const hasOtherHovered = hoveredCard !== null && hoveredCard !== pillar.id;

                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => setHoveredCard(pillar.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative rounded-2xl overflow-hidden border backdrop-blur-sm p-6 transition-all duration-[280ms] ease-out ${
                      isHovered
                        ? 'border-pepper bg-gradient-to-br from-pepper/20 via-pepper/10 to-transparent shadow-[0_0_40px_rgba(230,57,70,0.4)] lg:scale-[1.15]'
                        : 'border-white/10 bg-white/[0.06] lg:scale-100'
                    } ${
                      hasOtherHovered ? 'lg:opacity-60' : 'lg:opacity-100'
                    }`}
                    style={isHovered ? {
                      boxShadow: '0 0 12px rgba(255, 46, 46, 0.3)',
                      borderColor: 'rgba(255, 46, 46, 0.5)',
                    } : {}}
                  >
                    {/* Glowing red background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-pepper/30 via-pepper/10 to-transparent opacity-0 transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} />

                    {/* Animated red glow pulse */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-pepper/40 to-transparent transition-all duration-700 ${
                      isHovered ? 'opacity-100 blur-2xl' : 'opacity-0'
                    }`} />

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
                        isHovered ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-white'
                      }`}>
                        {pillar.title}
                      </h3>
                      <p className={`leading-relaxed text-sm transition-colors duration-300 ${
                        isHovered ? 'text-gray-200' : 'text-gray-300'
                      }`}>
                        {pillar.shortText}
                        <span className={`block mt-2 transition-all duration-[280ms] ease-out overflow-hidden ${
                          isHovered ? 'lg:max-h-[200px] lg:opacity-100' : 'lg:max-h-0 lg:opacity-0'
                        }`}>
                          {pillar.extendedText}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Concluding text at bottom - Animated fade */}
          <p className="text-white mt-12 text-xl md:text-2xl animate-fade-shine">
            {intro.conclusion}
          </p>
        </div>
      </Container>
    </section>
  );
}

