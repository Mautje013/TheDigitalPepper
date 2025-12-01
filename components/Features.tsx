"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Container from "./Container";

function isMobile() {
  return typeof window !== "undefined" && window.innerWidth < 768;
}

// Service mapping to main categories
const serviceLinks: Record<string, string> = {
  // Digital Foundations
  "Cloudmigratie": "/diensten/digital-foundations",
  "Schaalbare cloud hosting": "/diensten/digital-foundations",
  "Security & toegang": "/diensten/digital-foundations",
  "Back-up & herstel": "/diensten/digital-foundations",
  "Slimmer vergaderen (VC-space)": "/diensten/digital-foundations",
  "Kostenoptimalisatie": "/diensten/digital-foundations",

  // Data & Intelligence
  "Dashboarding": "/diensten/data-intelligence",
  "Data-analyse": "/diensten/data-intelligence",
  "KPI-tracking": "/diensten/data-intelligence",
  "Rapportautomatisering": "/diensten/data-intelligence",
  "Data-integraties": "/diensten/data-intelligence",
  "Datamodellering": "/diensten/data-intelligence",
  "Process automation": "/diensten/data-intelligence",

  // Digital Experience & Growth
  "Website bouwen": "/diensten/digital-experience-growth",
  "SEO & SEA": "/diensten/digital-experience-growth",
  "Conversie-optimalisatie": "/diensten/digital-experience-growth",
  "Marketing automation": "/diensten/digital-experience-growth",
  "Digitale marketing": "/diensten/digital-experience-growth",
  "Customer journeys": "/diensten/digital-experience-growth",

  // Strategy, AI & Enablement
  "Digitale strategie": "/diensten/strategy-ai-enablement",
  "AI-workflows": "/diensten/strategy-ai-enablement",
  "AI-adoptie": "/diensten/strategy-ai-enablement",
  "Innovatieadvies": "/diensten/strategy-ai-enablement",
  "Workshops & trainingen": "/diensten/strategy-ai-enablement",
  "Change support": "/diensten/strategy-ai-enablement",
  "Vendorselectie": "/diensten/strategy-ai-enablement",
  "IT-planning": "/diensten/strategy-ai-enablement",
};

// Tooltip texts for each service
const serviceTooltips: Record<string, string> = {
  // Digital Foundations
  "Cloudmigratie": "Verplaats systemen veilig en efficiënt naar de cloud.",
  "Schaalbare cloud hosting": "Hosting die moeiteloos meegroeit met je organisatie.",
  "Security & toegang": "Zorg voor veilige toegang en sterke digitale bescherming.",
  "Back-up & herstel": "Automatische back-ups en snelle recovery wanneer nodig.",
  "Slimmer vergaderen (VC-space)": "Professionele, efficiënte setups voor hybride meetings.",
  "Kostenoptimalisatie": "Bespaar op cloud- en licentiekosten zonder functies te verliezen.",

  // Data & Intelligence
  "Dashboarding": "Direct inzicht in prestaties via interactieve dashboards.",
  "Data-analyse": "Ontdek patronen en kansen in je bedrijfsdata.",
  "KPI-tracking": "Meet wat ertoe doet en stuur bij op resultaten.",
  "Rapportautomatisering": "Rapportsystemen die zichzelf updaten.",
  "Data-integraties": "Tools koppelen zodat data automatisch stroomt.",
  "Datamodellering": "Een stevig datamodel dat klaar is voor groei.",
  "Process automation": "Automatiseer workflows en bespaar tijd.",

  // Digital Experience & Growth
  "Website bouwen": "Snelle, converterende websites.",
  "SEO & SEA": "Betere vindbaarheid en slimme advertenties.",
  "Conversie-optimalisatie": "Maximaliseer resultaten uit bestaande bezoekers.",
  "Marketing automation": "Geautomatiseerde funnels en flows.",
  "Digitale marketing": "Strategie + content voor online groei.",
  "Customer journeys": "Inspirerende en converterende klantreizen.",

  // Strategy, AI & Enablement
  "Digitale strategie": "Een roadmap die technologie koppelt aan groei.",
  "AI-workflows": "Werkprocessen versterken met slimme AI.",
  "AI-adoptie": "Teams helpen AI veilig te gebruiken.",
  "Innovatieadvies": "Selectie van juiste tools en technologie.",
  "Workshops & trainingen": "Teams digitaal sterker maken.",
  "Change support": "Begeleiding bij digitale verandering.",
  "Vendorselectie": "Hulp bij kiezen van tools en partners.",
  "IT-planning": "Groeiplanning voor IT en digitale systemen.",
};

// Mapping from carousel service to pillar title
const serviceToPillar: Record<string, string> = {
  // Digital Foundations
  "Cloudmigratie": "Waar Groeien Moeiteloos Wordt",
  "Schaalbare cloud hosting": "Waar Groeien Moeiteloos Wordt",
  "Security & toegang": "Waar Groeien Moeiteloos Wordt",
  "Back-up & herstel": "Waar Groeien Moeiteloos Wordt",
  "Slimmer vergaderen (VC-space)": "Waar Groeien Moeiteloos Wordt",
  "Kostenoptimalisatie": "Waar Groeien Moeiteloos Wordt",

  // Data & Intelligence
  "Dashboarding": "Zie Vandaag Wat Morgen Brengt",
  "Data-analyse": "Zie Vandaag Wat Morgen Brengt",
  "KPI-tracking": "Zie Vandaag Wat Morgen Brengt",
  "Rapportautomatisering": "Zie Vandaag Wat Morgen Brengt",
  "Data-integraties": "Zie Vandaag Wat Morgen Brengt",
  "Datamodellering": "Zie Vandaag Wat Morgen Brengt",
  "Process automation": "Zie Vandaag Wat Morgen Brengt",

  // Digital Experience & Growth
  "Website bouwen": "Ervaar Wat Digitale Groei Echt Doet",
  "SEO & SEA": "Ervaar Wat Digitale Groei Echt Doet",
  "Conversie-optimalisatie": "Ervaar Wat Digitale Groei Echt Doet",
  "Marketing automation": "Ervaar Wat Digitale Groei Echt Doet",
  "Digitale marketing": "Ervaar Wat Digitale Groei Echt Doet",
  "Customer journeys": "Ervaar Wat Digitale Groei Echt Doet",

  // Strategy, AI & Enablement
  "Digitale strategie": "Stuur Je Toekomst. Niet Andersom.",
  "AI-workflows": "Stuur Je Toekomst. Niet Andersom.",
  "AI-adoptie": "Stuur Je Toekomst. Niet Andersom.",
  "Innovatieadvies": "Stuur Je Toekomst. Niet Andersom.",
  "Workshops & trainingen": "Stuur Je Toekomst. Niet Andersom.",
  "Change support": "Stuur Je Toekomst. Niet Andersom.",
  "Vendorselectie": "Stuur Je Toekomst. Niet Andersom.",
  "IT-planning": "Stuur Je Toekomst. Niet Andersom.",
};

const servicesRow1 = [
  "Cloudmigratie",
  "Schaalbare cloud hosting",
  "Security & toegang",
  "Back-up & herstel",
  "Slimmer vergaderen (VC-space)",
  "Kostenoptimalisatie",
  "Dashboarding",
  "Data-analyse",
  "KPI-tracking",
  "Rapportautomatisering"
];

const servicesRow2 = [
  "Data-integraties",
  "Datamodellering",
  "Process automation",
  "Website bouwen",
  "SEO & SEA",
  "Conversie-optimalisatie",
  "Marketing automation",
  "Digitale marketing",
  "Customer journeys",
  "Digitale strategie"
];

const servicesRow3 = [
  "AI-workflows",
  "AI-adoptie",
  "Innovatieadvies",
  "Workshops & trainingen",
  "Change support",
  "Vendorselectie",
  "IT-planning"
];

// Duplicate services for seamless infinite scroll
const allServicesRow1 = [...servicesRow1, ...servicesRow1, ...servicesRow1];
const allServicesRow2 = [...servicesRow2, ...servicesRow2, ...servicesRow2];
const allServicesRow3 = [...servicesRow3, ...servicesRow3, ...servicesRow3];

function CarouselRow({
  services,
  rowIndex,
  speed = 0.5,
  onServiceHover,
  localePrefix,
  getServiceLink,
  getTranslatedTooltip,
  getTranslatedPillarTitle
}: {
  services: string[];
  rowIndex: number;
  speed?: number;
  onServiceHover?: (pillarTitle: string | null) => void;
  localePrefix?: string;
  getServiceLink?: (service: string) => string;
  getTranslatedTooltip?: (service: string) => string;
  getTranslatedPillarTitle?: (service: string) => string | null;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const isReverse = speed < 0;
    const pixelsPerFrame = Math.abs(speed);

    let animationFrameId: number;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 3;

        if (isReverse) {
          // Moving right to left
          scrollContainer.scrollLeft -= pixelsPerFrame;
          if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft = maxScroll;
          }
        } else {
          // Moving left to right
          scrollContainer.scrollLeft += pixelsPerFrame;
          if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, speed]);

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-hidden py-2"
      style={{ scrollBehavior: "auto" }}
    >
      {services.map((service, index) => {
        const isHovered = hoveredIndex === index;
        const link = getServiceLink ? getServiceLink(service) : (serviceLinks[service] || "#");
        const pillarTitle = getTranslatedPillarTitle ? getTranslatedPillarTitle(service) : (serviceToPillar[service] || null);
        const tooltip = getTranslatedTooltip ? getTranslatedTooltip(service) : (serviceTooltips[service] || "");

        return (
          <div
            key={`${service}-${index}`}
            className="relative flex-shrink-0 group"
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsPaused(true);
              if (onServiceHover && pillarTitle) {
                onServiceHover(pillarTitle);
              }
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsPaused(false);
              if (onServiceHover) {
                onServiceHover(null);
              }
            }}
          >
            <div
              className={`
                carousel-item flex-shrink-0 px-5 py-2.5 rounded-lg cursor-pointer
                transition-all duration-300 ease-out relative
                ${isHovered
                  ? 'bg-pepper text-white scale-105 shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }
              `}
            >
              <span
                className={`
                  text-sm font-medium whitespace-nowrap
                  transition-colors duration-300
                `}
              >
                {service}
              </span>
            </div>
            
            {/* Tooltip */}
            {tooltip && (
              <div
                className={`
                  absolute bottom-full left-1/2 mb-2 px-3 py-2
                  bg-black/90 backdrop-blur-sm text-white text-xs rounded-lg
                  whitespace-nowrap pointer-events-none
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  z-50
                `}
                style={{
                  transform: 'translateX(-50%)',
                }}
              >
                {tooltip}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-black/90" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const mainServices = [
  {
    title: "Waar Groeien Moeiteloos Wordt",
    originalTitle: "Digital Foundations",
    desc: "Wij helpen organisaties met een schaalbare, veilige en moderne digitale basis. Denk aan cloudmigratie, schaalbare hosting, securitybeleid, netwerkarchitectuur, identiteitsbeheer en een efficiënte digitale werkomgeving waarin teams zonder frictie kunnen presteren.",
    link: "/diensten/digital-foundations",
    subservices: [
      "Cloud & infrastructuur",
      "Moderne werkplek",
      "Integraties",
      "Automatisering",
      "Health checks"
    ]
  },
  {
    title: "Zie Vandaag Wat Morgen Brengt",
    originalTitle: "Data & Intelligence",
    desc: "We transformeren data naar actie. Met datamodellen, dashboards, KPI-tracking, automatisering en integraties geven we teams realtime inzicht, voorspellende kracht en de tools om sneller betere beslissingen te nemen.",
    link: "/diensten/data-intelligence",
    subservices: [
      "Dashboards",
      "KPI-rapportages",
      "Data centralisatie",
      "Analytics",
      "Data-audits"
    ]
  },
  {
    title: "Ervaar Wat Digitale Groei Echt Doet",
    originalTitle: "Digital Experience & Growth",
    desc: "Voor organisaties die willen groeien via digitale kanalen. Wij bouwen conversiegerichte websites, optimaliseren customer journeys, koppelen marketingdata en ontwikkelen slimme content, funnels en automation die zichtbaarheid én resultaat vergroten.",
    link: "/diensten/digital-experience-growth",
    subservices: [
      "Marketing & weboplossingen",
      "Customer journeys",
      "Automations",
      "Training & adoptie",
      "Content & conversie"
    ]
  },
  {
    title: "Stuur Je Toekomst. Niet Andersom.",
    originalTitle: "Strategy, AI & Enablement",
    desc: "Wij begeleiden organisaties in strategie, digitale transformatie en AI-enablement. Met roadmapontwikkeling, AI-workflows, change management en training zorgen we dat teams klaar zijn voor de toekomst — met adoptie die écht werkt.",
    link: "/diensten/strategy-ai-enablement",
    subservices: [
      "Digitale strategie",
      "Roadmapping",
      "IT-governance",
      "Virtual CIO",
      "Security baseline"
    ]
  },
];

// Icon component function - returns appropriate SVG icon based on service title
function getServiceIcon(title: string) {
  switch (title) {
    case "Waar Groeien Moeiteloos Wordt":
    case "Where Growth Becomes Effortless":
    case "Digital Foundations":
      // Server stack / Cloud infrastructure icon - represents foundational technology infrastructure
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      );
    case "Zie Vandaag Wat Morgen Brengt":
    case "See Today What Tomorrow Brings":
    case "Data & Intelligence":
      // Analytics graph icon - represents data analysis and intelligence
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      );
    case "Ervaar Wat Digitale Groei Echt Doet":
    case "Experience What Digital Growth Really Does":
    case "Digital Experience & Growth":
      // Rocket launch icon - represents growth and digital experience acceleration
      return (
        <Image
          src="/rocket1.png"
          alt="Rocket"
          width={24}
          height={24}
          className="w-6 h-6 object-contain brightness-0 invert"
          style={{ filter: 'brightness(0) invert(1)' }}
          loading="lazy"
        />
      );
    case "Stuur Je Toekomst. Niet Andersom.":
    case "Steer Your Future. Not The Other Way Around.":
    case "Strategy, AI & Enablement":
      // Compass icon - represents strategic direction and navigation
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2v4m0 12v4M2 12h4m12 0h4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6l-3 6 3-2 3 2-3-6z"
          />
        </svg>
      );
    default:
      // Fallback to lightning bolt if title doesn't match
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
  }
}

function ServiceCard({ 
  item, 
  index, 
  isHighlighted 
}: { 
  item: typeof mainServices[0]; 
  index: number;
  isHighlighted?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldHighlight = isHovered || isHighlighted;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative rounded-2xl overflow-hidden cursor-pointer block
        border transition-all duration-[180ms] ease-in-out
        ${shouldHighlight
          ? 'border-pepper bg-gradient-to-br from-pepper/20 via-pepper/10 to-transparent shadow-[0_0_40px_rgba(230,57,70,0.4)] scale-[1.02]'
          : 'border-white/10 bg-black/40 scale-100'
        }
      `}
      style={shouldHighlight ? {
        boxShadow: '0 0 12px rgba(255, 46, 46, 0.3)',
        borderColor: 'rgba(255, 46, 46, 0.5)',
      } : {}}
    >
      {/* Glowing red background on hover */}
      <div className={`
        absolute inset-0 bg-gradient-to-br from-pepper/30 via-pepper/10 to-transparent
        opacity-0 transition-opacity duration-300
        ${shouldHighlight ? 'opacity-100' : 'opacity-0'}
      `} />

      {/* Animated red glow pulse */}
      <div className={`
        absolute inset-0 bg-gradient-to-br from-pepper/40 to-transparent
        transition-all duration-700
        ${shouldHighlight ? 'opacity-100 blur-2xl' : 'opacity-0'}
      `} />

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Icon - Dynamic icon based on service title */}
        <div className={`
          mb-6 w-12 h-12 rounded-lg flex items-center justify-center
          transition-all duration-300 transform
          ${shouldHighlight
            ? 'bg-pepper shadow-[0_0_20px_rgba(230,57,70,0.8)] scale-110'
            : 'bg-white/10'
          }
        `}>
          <div className={`transition-all duration-300 ${shouldHighlight ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-white'}`}>
            {getServiceIcon(item.title)}
          </div>
        </div>

        {/* Title */}
        <h3 className={`
          text-xl font-bold mb-3 transition-all duration-300
          ${shouldHighlight ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-white'}
        `}>
          {item.title}
        </h3>

        {/* Description */}
        <p className={`
          text-base leading-relaxed transition-colors duration-300
          ${shouldHighlight ? 'text-gray-200' : 'text-gray-400'}
        `}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

// Translation data
const translations = {
  nl: {
    header: {
      title: "Hoe we digitale",
      titleHighlight: "groei",
      titleEnd: "realiseren",
      subtitle: "Met The Digital Compass™ begeleiden we organisaties naar digitale groei met structuur, helderheid en resultaat.",
    },
    services: {
      row1: ["Cloudmigratie", "Schaalbare cloud hosting", "Security & toegang", "Back-up & herstel", "Slimmer vergaderen (VC-space)", "Kostenoptimalisatie", "Dashboarding", "Data-analyse", "KPI-tracking", "Rapportautomatisering"],
      row2: ["Data-integraties", "Datamodellering", "Process automation", "Website bouwen", "SEO & SEA", "Conversie-optimalisatie", "Marketing automation", "Digitale marketing", "Customer journeys", "Digitale strategie"],
      row3: ["AI-workflows", "AI-adoptie", "Innovatieadvies", "Workshops & trainingen", "Change support", "Vendorselectie", "IT-planning"],
    },
    mainServices: [
      {
        title: "Waar Groeien Moeiteloos Wordt",
        originalTitle: "Digital Foundations",
        desc: "Wij helpen organisaties met een schaalbare, veilige en moderne digitale basis. Denk aan cloudmigratie, schaalbare hosting, securitybeleid, netwerkarchitectuur, identiteitsbeheer en een efficiënte digitale werkomgeving waarin teams zonder frictie kunnen presteren.",
        link: "/diensten/digital-foundations",
        subservices: ["Cloud & infrastructuur", "Moderne werkplek", "Integraties", "Automatisering", "Health checks"]
      },
      {
        title: "Zie Vandaag Wat Morgen Brengt",
        originalTitle: "Data & Intelligence",
        desc: "We transformeren data naar actie. Met datamodellen, dashboards, KPI-tracking, automatisering en integraties geven we teams realtime inzicht, voorspellende kracht en de tools om sneller betere beslissingen te nemen.",
        link: "/diensten/data-intelligence",
        subservices: ["Dashboards", "KPI-rapportages", "Data centralisatie", "Analytics", "Data-audits"]
      },
      {
        title: "Ervaar Wat Digitale Groei Echt Doet",
        originalTitle: "Digital Experience & Growth",
        desc: "Voor organisaties die willen groeien via digitale kanalen. Wij bouwen conversiegerichte websites, optimaliseren customer journeys, koppelen marketingdata en ontwikkelen slimme content, funnels en automation die zichtbaarheid én resultaat vergroten.",
        link: "/diensten/digital-experience-growth",
        subservices: ["Marketing & weboplossingen", "Customer journeys", "Automations", "Training & adoptie", "Content & conversie"]
      },
      {
        title: "Stuur Je Toekomst. Niet Andersom.",
        originalTitle: "Strategy, AI & Enablement",
        desc: "Wij begeleiden organisaties in strategie, digitale transformatie en AI-enablement. Met roadmapontwikkeling, AI-workflows, change management en training zorgen we dat teams klaar zijn voor de toekomst — met adoptie die écht werkt.",
        link: "/diensten/strategy-ai-enablement",
        subservices: ["Digitale strategie", "Roadmapping", "IT-governance", "Virtual CIO", "Security baseline"]
      },
    ],
    tooltips: {
      "Cloudmigratie": "Verplaats systemen veilig en efficiënt naar de cloud.",
      "Schaalbare cloud hosting": "Hosting die moeiteloos meegroeit met je organisatie.",
      "Security & toegang": "Zorg voor veilige toegang en sterke digitale bescherming.",
      "Back-up & herstel": "Automatische back-ups en snelle recovery wanneer nodig.",
      "Slimmer vergaderen (VC-space)": "Professionele, efficiënte setups voor hybride meetings.",
      "Kostenoptimalisatie": "Bespaar op cloud- en licentiekosten zonder functies te verliezen.",
      "Dashboarding": "Direct inzicht in prestaties via interactieve dashboards.",
      "Data-analyse": "Ontdek patronen en kansen in je bedrijfsdata.",
      "KPI-tracking": "Meet wat ertoe doet en stuur bij op resultaten.",
      "Rapportautomatisering": "Rapportsystemen die zichzelf updaten.",
      "Data-integraties": "Tools koppelen zodat data automatisch stroomt.",
      "Datamodellering": "Een stevig datamodel dat klaar is voor groei.",
      "Process automation": "Automatiseer workflows en bespaar tijd.",
      "Website bouwen": "Snelle, converterende websites.",
      "SEO & SEA": "Betere vindbaarheid en slimme advertenties.",
      "Conversie-optimalisatie": "Maximaliseer resultaten uit bestaande bezoekers.",
      "Marketing automation": "Geautomatiseerde funnels en flows.",
      "Digitale marketing": "Strategie + content voor online groei.",
      "Customer journeys": "Inspirerende en converterende klantreizen.",
      "Digitale strategie": "Een roadmap die technologie koppelt aan groei.",
      "AI-workflows": "Werkprocessen versterken met slimme AI.",
      "AI-adoptie": "Teams helpen AI veilig te gebruiken.",
      "Innovatieadvies": "Selectie van juiste tools en technologie.",
      "Workshops & trainingen": "Teams digitaal sterker maken.",
      "Change support": "Begeleiding bij digitale verandering.",
      "Vendorselectie": "Hulp bij kiezen van tools en partners.",
      "IT-planning": "Groeiplanning voor IT en digitale systemen.",
    },
    pillarTitles: {
      "Cloudmigratie": "Waar Groeien Moeiteloos Wordt",
      "Schaalbare cloud hosting": "Waar Groeien Moeiteloos Wordt",
      "Security & toegang": "Waar Groeien Moeiteloos Wordt",
      "Back-up & herstel": "Waar Groeien Moeiteloos Wordt",
      "Slimmer vergaderen (VC-space)": "Waar Groeien Moeiteloos Wordt",
      "Kostenoptimalisatie": "Waar Groeien Moeiteloos Wordt",
      "Dashboarding": "Zie Vandaag Wat Morgen Brengt",
      "Data-analyse": "Zie Vandaag Wat Morgen Brengt",
      "KPI-tracking": "Zie Vandaag Wat Morgen Brengt",
      "Rapportautomatisering": "Zie Vandaag Wat Morgen Brengt",
      "Data-integraties": "Zie Vandaag Wat Morgen Brengt",
      "Datamodellering": "Zie Vandaag Wat Morgen Brengt",
      "Process automation": "Zie Vandaag Wat Morgen Brengt",
      "Website bouwen": "Ervaar Wat Digitale Groei Echt Doet",
      "SEO & SEA": "Ervaar Wat Digitale Groei Echt Doet",
      "Conversie-optimalisatie": "Ervaar Wat Digitale Groei Echt Doet",
      "Marketing automation": "Ervaar Wat Digitale Groei Echt Doet",
      "Digitale marketing": "Ervaar Wat Digitale Groei Echt Doet",
      "Customer journeys": "Ervaar Wat Digitale Groei Echt Doet",
      "Digitale strategie": "Stuur Je Toekomst. Niet Andersom.",
      "AI-workflows": "Stuur Je Toekomst. Niet Andersom.",
      "AI-adoptie": "Stuur Je Toekomst. Niet Andersom.",
      "Innovatieadvies": "Stuur Je Toekomst. Niet Andersom.",
      "Workshops & trainingen": "Stuur Je Toekomst. Niet Andersom.",
      "Change support": "Stuur Je Toekomst. Niet Andersom.",
      "Vendorselectie": "Stuur Je Toekomst. Niet Andersom.",
      "IT-planning": "Stuur Je Toekomst. Niet Andersom.",
    },
  },
  eng: {
    header: {
      title: "How we realize digital",
      titleHighlight: "growth",
      titleEnd: "",
      subtitle: "With The Digital Compass™, we guide organizations toward digital growth with structure, clarity, and results.",
    },
    services: {
      row1: ["Cloud Migration", "Scalable Cloud Hosting", "Security & Access", "Backup & Recovery", "Smarter Meetings (VC-space)", "Cost Optimization", "Dashboarding", "Data Analysis", "KPI Tracking", "Report Automation"],
      row2: ["Data Integrations", "Data Modeling", "Process Automation", "Website Building", "SEO & SEA", "Conversion Optimization", "Marketing Automation", "Digital Marketing", "Customer Journeys", "Digital Strategy"],
      row3: ["AI Workflows", "AI Adoption", "Innovation Advisory", "Workshops & Training", "Change Support", "Vendor Selection", "IT Planning"],
    },
    mainServices: [
      {
        title: "Where Growth Becomes Effortless",
        originalTitle: "Digital Foundations",
        desc: "We help organizations with a scalable, secure, and modern digital foundation. Think cloud migration, scalable hosting, security policies, network architecture, identity management, and an efficient digital work environment where teams can perform without friction.",
        link: "/services/digital-foundations",
        subservices: ["Cloud & Infrastructure", "Modern Workplace", "Integrations", "Automation", "Health Checks"]
      },
      {
        title: "See Today What Tomorrow Brings",
        originalTitle: "Data & Intelligence",
        desc: "We transform data into action. With data models, dashboards, KPI tracking, automation, and integrations, we give teams real-time insight, predictive power, and the tools to make better decisions faster.",
        link: "/services/data-intelligence",
        subservices: ["Dashboards", "KPI Reports", "Data Centralization", "Analytics", "Data Audits"]
      },
      {
        title: "Experience What Digital Growth Really Does",
        originalTitle: "Digital Experience & Growth",
        desc: "For organizations that want to grow through digital channels. We build conversion-focused websites, optimize customer journeys, connect marketing data, and develop smart content, funnels, and automation that increase visibility and results.",
        link: "/services/digital-experience-growth",
        subservices: ["Marketing & Web Solutions", "Customer Journeys", "Automations", "Training & Adoption", "Content & Conversion"]
      },
      {
        title: "Steer Your Future. Not The Other Way Around.",
        originalTitle: "Strategy, AI & Enablement",
        desc: "We guide organizations in strategy, digital transformation, and AI enablement. With roadmap development, AI workflows, change management, and training, we ensure teams are ready for the future — with adoption that really works.",
        link: "/services/strategy-ai-enablement",
        subservices: ["Digital Strategy", "Roadmapping", "IT Governance", "Virtual CIO", "Security Baseline"]
      },
    ],
    tooltips: {
      "Cloud Migration": "Move systems safely and efficiently to the cloud.",
      "Scalable Cloud Hosting": "Hosting that effortlessly grows with your organization.",
      "Security & Access": "Ensure secure access and strong digital protection.",
      "Backup & Recovery": "Automatic backups and fast recovery when needed.",
      "Smarter Meetings (VC-space)": "Professional, efficient setups for hybrid meetings.",
      "Cost Optimization": "Save on cloud and license costs without losing features.",
      "Dashboarding": "Direct insight into performance via interactive dashboards.",
      "Data Analysis": "Discover patterns and opportunities in your business data.",
      "KPI Tracking": "Measure what matters and adjust based on results.",
      "Report Automation": "Reporting systems that update themselves.",
      "Data Integrations": "Connect tools so data flows automatically.",
      "Data Modeling": "A solid data model ready for growth.",
      "Process Automation": "Automate workflows and save time.",
      "Website Building": "Fast, converting websites.",
      "SEO & SEA": "Better visibility and smart advertising.",
      "Conversion Optimization": "Maximize results from existing visitors.",
      "Marketing Automation": "Automated funnels and flows.",
      "Digital Marketing": "Strategy + content for online growth.",
      "Customer Journeys": "Inspiring and converting customer journeys.",
      "Digital Strategy": "A roadmap that connects technology to growth.",
      "AI Workflows": "Strengthen work processes with smart AI.",
      "AI Adoption": "Help teams use AI safely.",
      "Innovation Advisory": "Selection of the right tools and technology.",
      "Workshops & Training": "Make teams digitally stronger.",
      "Change Support": "Guidance in digital change.",
      "Vendor Selection": "Help choosing tools and partners.",
      "IT Planning": "Growth planning for IT and digital systems.",
    },
    pillarTitles: {
      "Cloud Migration": "Where Growth Becomes Effortless",
      "Scalable Cloud Hosting": "Where Growth Becomes Effortless",
      "Security & Access": "Where Growth Becomes Effortless",
      "Backup & Recovery": "Where Growth Becomes Effortless",
      "Smarter Meetings (VC-space)": "Where Growth Becomes Effortless",
      "Cost Optimization": "Where Growth Becomes Effortless",
      "Dashboarding": "See Today What Tomorrow Brings",
      "Data Analysis": "See Today What Tomorrow Brings",
      "KPI Tracking": "See Today What Tomorrow Brings",
      "Report Automation": "See Today What Tomorrow Brings",
      "Data Integrations": "See Today What Tomorrow Brings",
      "Data Modeling": "See Today What Tomorrow Brings",
      "Process Automation": "See Today What Tomorrow Brings",
      "Website Building": "Experience What Digital Growth Really Does",
      "SEO & SEA": "Experience What Digital Growth Really Does",
      "Conversion Optimization": "Experience What Digital Growth Really Does",
      "Marketing Automation": "Experience What Digital Growth Really Does",
      "Digital Marketing": "Experience What Digital Growth Really Does",
      "Customer Journeys": "Experience What Digital Growth Really Does",
      "Digital Strategy": "Steer Your Future. Not The Other Way Around.",
      "AI Workflows": "Steer Your Future. Not The Other Way Around.",
      "AI Adoption": "Steer Your Future. Not The Other Way Around.",
      "Innovation Advisory": "Steer Your Future. Not The Other Way Around.",
      "Workshops & Training": "Steer Your Future. Not The Other Way Around.",
      "Change Support": "Steer Your Future. Not The Other Way Around.",
      "Vendor Selection": "Steer Your Future. Not The Other Way Around.",
      "IT Planning": "Steer Your Future. Not The Other Way Around.",
    },
  },
};

export default function Features({ locale = "nl" }: { locale?: string }) {
  const [highlightedPillar, setHighlightedPillar] = useState<string | null>(null);
  const t = translations[locale as keyof typeof translations] || translations.nl;
  const localePrefix = locale === "eng" ? "/services" : "/diensten";

  const handleServiceHover = (pillarTitle: string | null) => {
    setHighlightedPillar(pillarTitle);
  };

  // Service key mapping (index-based to map between languages)
  const serviceKeys = [
    // Row 1
    "Cloudmigratie", "Schaalbare cloud hosting", "Security & toegang", "Back-up & herstel", "Slimmer vergaderen (VC-space)", "Kostenoptimalisatie", "Dashboarding", "Data-analyse", "KPI-tracking", "Rapportautomatisering",
    // Row 2
    "Data-integraties", "Datamodellering", "Process automation", "Website bouwen", "SEO & SEA", "Conversie-optimalisatie", "Marketing automation", "Digitale marketing", "Customer journeys", "Digitale strategie",
    // Row 3
    "AI-workflows", "AI-adoptie", "Innovatieadvies", "Workshops & trainingen", "Change support", "Vendorselectie", "IT-planning"
  ];

  // Get service key from translated service name
  const getServiceKey = (translatedService: string) => {
    const allServices = [...t.services.row1, ...t.services.row2, ...t.services.row3];
    const index = allServices.indexOf(translatedService);
    return index >= 0 ? serviceKeys[index] : translatedService;
  };

  // Create service links with locale prefix
  const getServiceLink = (service: string) => {
    const serviceKey = getServiceKey(service);
    const baseLink = serviceLinks[serviceKey] || "#";
    if (baseLink === "#") return "#";
    return baseLink.replace("/diensten", localePrefix);
  };

  // Get translated tooltip
  const getTranslatedTooltip = (service: string) => {
    return t.tooltips[service as keyof typeof t.tooltips] || "";
  };

  // Get translated pillar title
  const getTranslatedPillarTitle = (service: string) => {
    return t.pillarTitles[service as keyof typeof t.pillarTitles] || null;
  };

  // Get services for carousel
  const getCarouselServices = () => {
    const services = [...t.services.row1, ...t.services.row2, ...t.services.row3];
    return [...services, ...services, ...services];
  };

  return (
    <>
      <section className="py-16 md:py-24 relative">
        <Container>
        {/* Section header */}
        <div className="mb-12 px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            {t.header.title} <span className="text-pepper">{t.header.titleHighlight}</span> {t.header.titleEnd}
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl text-lg leading-relaxed">
            {t.header.subtitle}
          </p>
        </div>

        {/* Main Service Cards - 2x2 Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mb-16">
          {t.mainServices.map((item, index) => (
            <ServiceCard 
              key={item.title} 
              item={{...item, link: item.link.replace("/diensten", localePrefix)}} 
              index={index}
              isHighlighted={highlightedPillar === item.title}
            />
          ))}
        </div>

        {/* Divider line */}
        <div className="my-12 border-t border-white/10" />

        {/* 3-row infinite scrolling carousel */}
        <div className="relative overflow-hidden space-y-3 py-6">
          {/* Row 1 - scrolls left to right */}
          <CarouselRow 
            services={[...t.services.row1, ...t.services.row1, ...t.services.row1]} 
            rowIndex={1} 
            speed={isMobile() ? 1.2 : 0.6}
            onServiceHover={handleServiceHover}
            localePrefix={localePrefix}
            getServiceLink={getServiceLink}
            getTranslatedTooltip={getTranslatedTooltip}
            getTranslatedPillarTitle={getTranslatedPillarTitle}
          />

          {/* Row 2 - scrolls right to left (negative speed) */}
          <CarouselRow 
            services={[...t.services.row2, ...t.services.row2, ...t.services.row2]} 
            rowIndex={2} 
            speed={isMobile() ? -1.2 : -0.6}
            onServiceHover={handleServiceHover}
            localePrefix={localePrefix}
            getServiceLink={getServiceLink}
            getTranslatedTooltip={getTranslatedTooltip}
            getTranslatedPillarTitle={getTranslatedPillarTitle}
          />

          {/* Row 3 - scrolls left to right */}
          <CarouselRow 
            services={[...t.services.row3, ...t.services.row3, ...t.services.row3]} 
            rowIndex={3} 
            speed={isMobile() ? 1.2 : 0.6}
            onServiceHover={handleServiceHover}
            localePrefix={localePrefix}
            getServiceLink={getServiceLink}
            getTranslatedTooltip={getTranslatedTooltip}
            getTranslatedPillarTitle={getTranslatedPillarTitle}
          />

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#010000] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#010000] to-transparent" />
        </div>
      </Container>
      </section>
    </>
  );
}
