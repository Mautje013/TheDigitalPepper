"use client";

import { useState } from "react";
import Container from "./Container";

export default function Concept({ locale = "nl" }: { locale?: string }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const text = {
    nl: {
      header: "De voordelen van een Digital Compass-",
      headerHighlight: "partnership",
      subtitle: "Bedrijven kiezen voor ons door onze strategische aanpak en bewezen vermogen om groei te realiseren.",
      benefits: [
        {
          title: "Kompas, geen rapport",
          description: "Wij leveren geen dikke presentaties die in een la verdwijnen. Met The Digital Compass™ vertalen we jouw ambities naar een scherpe digitale koers mét concrete initiatieven, prioriteiten en ROI-inschatting, klaar om morgen mee te sturen."
        },
        {
          title: "Customer oriented transformatie",
          description: "Wij bouwen digitale groei \"outside-in\": vanuit de klant naar binnen. Customer experience vormt het hart van elke verandering. Zo sluiten je producten en diensten vlekkeloos aan op de verwachtingen, frustraties en behoeften van je klanten."
        },
        {
          title: "Eén regisseur, meerdere experts",
          description: "We werken samen met jouw bestaande leveranciers én gespecialiseerde partners. Jij houdt één aanspreekpunt: wij orkestreren techniek, marketing en change, bewaken samenhang en zorgen dat plannen in de praktijk wérken."
        },
        {
          title: "Kompas als ritme, niet als project",
          description: "Digitale groei is geen sprint. Met kwartaal- of halfjaarlijkse Compass-sessies herijken we prioriteiten, sturen we op data en scherpen we je roadmap bij. Zo bouw je aan een systeem dat jaar op jaar beter presteert."
        }
      ]
    },
    eng: {
      header: "The benefits of a Digital Compass",
      headerHighlight: "partnership",
      subtitle: "Companies choose us for our strategic approach and proven ability to realize growth.",
      benefits: [
        {
          title: "Compass, not report",
          description: "We don't deliver thick presentations that disappear in a drawer. With The Digital Compass™, we translate your ambitions into a sharp digital course with concrete initiatives, priorities, and ROI estimates, ready to steer with tomorrow."
        },
        {
          title: "Customer-oriented transformation",
          description: "We build digital growth \"outside-in\": from the customer inward. Customer experience forms the heart of every change. This way, your products and services seamlessly align with the expectations, frustrations, and needs of your customers."
        },
        {
          title: "One director, multiple experts",
          description: "We work together with your existing suppliers and specialized partners. You keep one point of contact: we orchestrate technology, marketing, and change, monitor coherence, and ensure plans work in practice."
        },
        {
          title: "Compass as rhythm, not as project",
          description: "Digital growth is not a sprint. With quarterly or semi-annual Compass sessions, we reassess priorities, steer based on data, and refine your roadmap. This way, you build a system that performs better year after year."
        }
      ]
    }
  };

  const t = text[locale as keyof typeof text] || text.nl;

  const benefits = t.benefits.map((benefit, index) => ({
    icon: (
      index === 0 ? (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ) : index === 1 ? (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ) : index === 2 ? (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ) : (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
        </svg>
      )
    ),
    title: benefit.title,
    description: benefit.description
  }));

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-40 md:pb-64">
      <div className="absolute inset-0 pointer-events-none">
        {/* Dark universe background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />

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
      </div>

      <Container>
        {/* Header */}
        <div className="mb-12 px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {t.header} <span className="text-pepper">{t.headerHighlight}</span>
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4-column grid - responsive: 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {benefits.map((benefit, index) => {
            const isHovered = hoveredCard === index;

            return (
              <article
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative rounded-[24px] border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 transition-all duration-300"
                style={{
                  borderColor: isHovered ? 'rgba(255, 42, 42, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                }}
              >

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center bg-white/10 transition-colors duration-300 ${
                    isHovered ? 'bg-[#FF2A2A]/20' : ''
                  }`}>
                    <div className={`transition-colors duration-300 ${
                      isHovered ? 'text-[#FF2A2A]' : 'text-white'
                    }`}>
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-gray-300 leading-relaxed transition-all duration-[250ms] ease-out ${
                    isHovered ? 'text-base md:text-lg' : 'text-sm'
                  }`}>
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
