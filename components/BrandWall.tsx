"use client";

import Image from "next/image";
import Container from "./Container";

const logos = [
  { src: "/logo1.png", alt: "Partner logo 1", applyFilter: true, removeWhiteBg: false },
  { src: "/logo2.png", alt: "Partner logo 2", applyFilter: false, removeWhiteBg: false },
  { src: "/logo3.png", alt: "Partner logo 3", applyFilter: true, removeWhiteBg: false },
  { src: "/logo5.png", alt: "Partner logo 5", applyFilter: false, removeWhiteBg: false },
  { src: "/logo6.png", alt: "Partner logo 6", applyFilter: false, removeWhiteBg: false },
  { src: "/logo7.png", alt: "Partner logo 7", applyFilter: false, removeWhiteBg: false },
  { src: "/logo8.png", alt: "Partner logo 8", applyFilter: false, removeWhiteBg: false },
];

export default function BrandWall() {
  return (
    <section className="relative overflow-hidden pt-16 pb-0 md:pt-24">
      <div className="absolute inset-0 pointer-events-none" style={{ paddingBottom: '8rem', marginBottom: '-8rem' }}>
        {/* Dark universe background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" style={{ paddingBottom: '8rem' }} />

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

      <Container className="pb-32 md:pb-48">
        {/* Header */}
        <div className="mb-12 px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Merken waar we met <span className="text-pepper">trots</span> mee samenwerken
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
            Van mkb tot gevestigde namen — wij bouwen digitale groei voor organisaties die vooruit willen.
          </p>
        </div>

        {/* Logo Grid: 2-3-2 layout */}
        <div className="flex flex-col items-center gap-6 md:gap-8 relative z-10">
          {/* Row 1: 2 logos */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl justify-items-center">
            {logos.slice(0, 2).map((logo, index) => (
              <LogoCard key={index} logo={logo} index={index} />
            ))}
          </div>

          {/* Row 2: 3 logos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl justify-items-center">
            {logos.slice(2, 5).map((logo, index) => (
              <LogoCard key={index + 2} logo={logo} index={index + 2} />
            ))}
          </div>

          {/* Row 3: 2 logos */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl justify-items-center">
            {logos.slice(5, 7).map((logo, index) => (
              <LogoCard key={index + 5} logo={logo} index={index + 5} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function LogoCard({ logo, index }: { logo: typeof logos[0]; index: number }) {
  return (
    <div
      className="group relative p-16 rounded-xl border border-white/10 bg-white/5 hover:bg-white/30 hover:backdrop-blur-sm hover:border-white/40 transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_0_30px_rgba(255,0,0,0.4),0_0_60px_rgba(255,0,0,0.2),inset_0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center opacity-0 animate-slide-up w-full max-w-[582px]"
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'forwards',
      }}
    >
      <div className="flex items-center justify-center h-28">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={200}
          height={100}
          className="h-28 w-auto md:h-32 mx-auto object-contain transition-all duration-300 group-hover:scale-105"
          style={logo.applyFilter 
            ? { filter: 'invert(1) brightness(0) invert(1)' } 
            : logo.removeWhiteBg
            ? { 
                mixBlendMode: 'multiply'
              }
            : {}
          }
        />
      </div>
    </div>
  );
}

