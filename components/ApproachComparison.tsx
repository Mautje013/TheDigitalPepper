"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";

const journeySteps = [
  {
    id: "discover",
    number: "①",
    header: "Discover",
    subtitle: "Helderheid zonder aannames",
    body: "We starten met de Digital Compass QuickScan: een gestructureerde analyse die duidelijk maakt waar jouw organisatie digitaal staat. Je krijgt inzicht per quadrant: waar sterktes liggen, waar risico's ontstaan en welke thema's directe aandacht verdienen."
  },
  {
    id: "design",
    number: "②",
    header: "Design",
    subtitle: "Een roadmap die uitvoerbaar én haalbaar is",
    body: "Tijdens een gerichte werksessie of verdiepende sprint vertalen we ambities naar concrete prioriteiten. We brengen kansen, afhankelijkheden en ROI in kaart en maken een digitale roadmap die richting geeft zonder te overbelasten."
  },
  {
    id: "implement",
    number: "③",
    header: "Implement",
    subtitle: "Eén regisseur, meerdere experts",
    body: "Wij verbinden strategie met uitvoering. Marketing, IT, data en change worden gecoördineerd vanuit één regiepunt. Jij behoudt overzicht; wij bewaken voortgang, kwaliteit en samenhang."
  },
  {
    id: "evolve",
    number: "④",
    header: "Evolve",
    subtitle: "Groei als doorlopend ritme",
    body: "Met periodieke Compass-sessies evalueren we voortgang, actualiseren we prioriteiten en sturen we op basis van data. We scherpen de roadmap aan en zorgen dat de digitale ontwikkeling van de organisatie niet stilvalt."
  }
];

export default function ApproachComparison() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden pt-0 pb-16 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0" style={{ paddingTop: '8rem', marginTop: '-8rem' }}>
        <Image
          src="/DPP.png"
          alt="Digital Compass Journey"
          fill
          className="object-contain opacity-40"
          style={{ transform: 'scale(0.7)' }}
          priority
        />
        {/* Dark universe background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" style={{ top: '-1px' }} />

        {/* Stars layer - Large bright stars */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1.5px 1.5px at 50% 50%, white, transparent),
            radial-gradient(1.5px 1.5px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 40%, white, transparent),
            radial-gradient(1.5px 1.5px at 33% 60%, white, transparent),
            radial-gradient(1.5px 1.5px at 55% 25%, white, transparent),
            radial-gradient(2px 2px at 15% 80%, white, transparent),
            radial-gradient(1.5px 1.5px at 75% 55%, white, transparent),
            radial-gradient(1.5px 1.5px at 40% 15%, white, transparent),
            radial-gradient(2px 2px at 25% 45%, white, transparent),
            radial-gradient(1.5px 1.5px at 65% 85%, white, transparent),
            radial-gradient(1.5px 1.5px at 85% 65%, white, transparent),
            radial-gradient(1.5px 1.5px at 10% 20%, white, transparent),
            radial-gradient(1.5px 1.5px at 45% 75%, white, transparent),
            radial-gradient(1.5px 1.5px at 70% 35%, white, transparent),
            radial-gradient(2px 2px at 30% 90%, white, transparent),
            radial-gradient(1.5px 1.5px at 50% 5%, white, transparent),
            radial-gradient(1.5px 1.5px at 95% 50%, white, transparent),
            radial-gradient(2px 2px at 5% 60%, white, transparent),
            radial-gradient(1.5px 1.5px at 7% 40%, white, transparent),
            radial-gradient(2px 2px at 38% 8%, white, transparent),
            radial-gradient(1.5px 1.5px at 62% 42%, white, transparent),
            radial-gradient(1.5px 1.5px at 88% 75%, white, transparent),
            radial-gradient(2px 2px at 22% 92%, white, transparent),
            radial-gradient(1.5px 1.5px at 47% 28%, white, transparent),
            radial-gradient(1.5px 1.5px at 73% 18%, white, transparent),
            radial-gradient(2px 2px at 16% 55%, white, transparent),
            radial-gradient(1.5px 1.5px at 52% 88%, white, transparent),
            radial-gradient(1.5px 1.5px at 84% 32%, white, transparent),
            radial-gradient(2px 2px at 12% 65%, white, transparent),
            radial-gradient(1.5px 1.5px at 28% 35%, white, transparent),
            radial-gradient(2px 2px at 68% 12%, white, transparent),
            radial-gradient(1.5px 1.5px at 42% 82%, white, transparent),
            radial-gradient(2px 2px at 78% 48%, white, transparent),
            radial-gradient(1.5px 1.5px at 35% 22%, white, transparent),
            radial-gradient(2px 2px at 58% 78%, white, transparent),
            radial-gradient(1.5px 1.5px at 92% 15%, white, transparent),
            radial-gradient(2px 2px at 18% 48%, white, transparent),
            radial-gradient(1.5px 1.5px at 54% 62%, white, transparent)
          `,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }} />

        {/* Medium stars - brighter and more */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(1px 1px at 12% 25%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 58% 15%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 72% 80%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 88% 30%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 18% 70%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 42% 40%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 68% 95%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 82% 10%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 28% 85%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 14% 48%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 36% 12%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 59% 68%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 77% 38%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 91% 62%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 23% 33%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 44% 77%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 66% 22%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 81% 88%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 9% 65%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 31% 18%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 53% 52%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 74% 72%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 19% 92%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 46% 6%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 63% 44%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 87% 26%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 24% 58%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 57% 86%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 79% 14%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 11% 37%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 39% 63%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 71% 29%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 93% 76%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 16% 8%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 48% 91%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 65% 56%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 83% 41%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 27% 74%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 51% 19%, rgba(255,255,255,1), transparent)
          `,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.85,
        }} />

        {/* Small stars - many more for density */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(0.5px 0.5px at 8% 18%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 17% 52%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 26% 37%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 34% 73%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 43% 29%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 51% 64%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 57% 11%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 63% 81%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 69% 46%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 74% 23%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 79% 58%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 86% 34%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 92% 67%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 3% 41%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 11% 76%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 19% 14%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 27% 59%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 31% 83%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 39% 26%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 46% 71%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 54% 9%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 61% 54%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 67% 96%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 71% 31%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 76% 66%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 83% 19%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 89% 78%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 94% 43%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 6% 87%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 13% 22%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 21% 61%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 29% 4%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 37% 49%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 41% 92%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 48% 16%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 56% 84%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 64% 27%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 72% 72%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 78% 6%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 85% 51%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 93% 36%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 97% 89%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 2% 56%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 15% 39%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 33% 68%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 49% 33%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 55% 79%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 66% 13%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 73% 47%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 88% 69%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 96% 24%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 4% 71%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 22% 45%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 38% 17%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 52% 88%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 68% 61%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 81% 35%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 91% 82%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 7% 28%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 25% 94%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 44% 53%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 59% 38%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 75% 74%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 86% 7%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 9% 63%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 32% 26%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 47% 97%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 64% 50%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 77% 21%, rgba(255,255,255,0.95), transparent),
            radial-gradient(0.5px 0.5px at 95% 57%, rgba(255,255,255,0.95), transparent)
          `,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
        }} />
        
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/80 via-[#0d0d0d]/60 to-[#0d0d0d]/80" />
      </div>

      <Container className="pt-16 md:pt-24">
        {/* Section Header */}
        <div className="mb-12 px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Hoe organisaties door de Digital Compass <span className="text-pepper">Journey</span> gaan
          </h2>
          <p className="mt-4 text-gray-200/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Van eerste inzicht tot blijvende digitale groei, een proces dat richting, rust en resultaat brengt.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative z-10 mt-16">
          {/* Horizontal laser line - Desktop only */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5">
            <div 
              className="h-full w-full"
              style={{
                background: 'linear-gradient(to right, transparent, #FF2A2A, transparent)',
                boxShadow: '0 0 8px rgba(255, 42, 42, 0.6), 0 0 16px rgba(255, 42, 42, 0.3)',
              }}
            />
          </div>

          {/* Nodes Grid - Responsive: stacked on mobile, horizontal on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative lg:items-start">
            {journeySteps.map((step, index) => {
              const isHovered = hoveredNode === step.id;

              return (
                <div
                  key={step.id}
                  className="journey-node relative flex flex-col lg:flex-row lg:items-start gap-4 h-full"
                  onMouseEnter={() => setHoveredNode(step.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Node Circle Container */}
                  <div className="relative flex-shrink-0 flex items-center justify-center lg:justify-start">
                    {/* Connecting line from node to content - Mobile only */}
                    <div className="lg:hidden absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-white/20" />
                    
                    {/* Node Circle */}
                    <div
                      className={`
                        node-circle relative w-16 h-16 rounded-full border-2 flex items-center justify-center
                        transition-all duration-[250ms] ease-out
                        ${isHovered 
                          ? 'border-[rgba(255,0,0,0.6)] bg-[#FF2A2A]/10' 
                          : 'border-white/30 bg-transparent'
                        }
                      `}
                      style={{
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                        boxShadow: isHovered 
                          ? '0 0 18px rgba(255,0,0,0.8)' 
                          : 'none',
                      }}
                    >
                      {/* Number label - inside circle */}
                      <div className={`absolute text-white/60 font-bold transition-all duration-[250ms] ease-out ${
                        isHovered ? 'text-base scale-125' : 'text-sm scale-100'
                      }`}>
                        {step.number}
                      </div>
                      
                      {/* Inner circle */}
                      <div className={`
                        w-8 h-8 rounded-full border
                        transition-all duration-[250ms] ease-out
                        ${isHovered 
                          ? 'border-[#FF2A2A] bg-[#FF2A2A]/20' 
                          : 'border-white/20 bg-white/5'
                        }
                      `} />
                    </div>
                  </div>

                  {/* Node Label & Content */}
                  <div className="flex-1">
                    <div 
                      className={`
                        node-label transition-all duration-[250ms] ease-out min-h-[100px] lg:min-h-[120px]
                        ${isHovered 
                          ? 'opacity-100 translate-y-[-4px]' 
                          : 'opacity-85 translate-y-0'
                        }
                      `}
                    >
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                        {step.header}
                      </h4>
                      <p className="text-sm md:text-base text-[#FF2A2A] mb-0" style={{
                        textShadow: '0 0 6px rgba(255, 42, 42, 0.5), 0 0 12px rgba(255, 42, 42, 0.3)',
                      }}>
                        {step.subtitle}
                      </p>
                    </div>
                    <p className={`text-gray-300 leading-relaxed -mt-8 transition-all duration-[250ms] ease-out ${
                      isHovered ? 'text-base md:text-lg' : 'text-sm'
                    }`}>
                      {step.body}
                      </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
