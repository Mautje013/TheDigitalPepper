export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden text-white" style={{ backgroundColor: '#010000' }}>
      
      {/* --- Fullscreen video background --- */}
      <video
        src="/pepper-universe.mp4?v=17s"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen"
      />

      {/* --- Multi-layer gradient overlay for ultra-smooth transition --- */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010000]/20 to-[#0a0520]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050210]" />
      </div>

      {/* --- Text content --- */}
      <div className="relative z-20 w-full min-h-screen flex flex-col items-start justify-center px-8 md:px-16">
        <div className="w-full max-w-6xl">
          {/* Left-aligned Header & Subheader */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight animate-fade-in text-white mb-6" style={{ wordSpacing: '-0.05em' }}>
              Jouw Reis naar Datagedreven <span className="text-pepper">Groei</span> Begint Hier
            </h1>
            <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-300 animate-slide-up [animation-delay:0.1s] leading-relaxed mb-8">
              Wij begeleiden groeiende bedrijven naar helderheid, structuur en meetbare resultaten met The Digital Compass™.
            </h2>

            {/* CTA Button - Under subheader */}
            <div className="animate-slide-up [animation-delay:0.3s]">
              <a
                href="https://digitalpepper.nl/contact/"
                className="bg-pepper hover:bg-white hover:text-pepper text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                BEGIN MET GROEIEN
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


