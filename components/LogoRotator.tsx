"use client";

const logos = [
  { src: "/logo1.png", alt: "Logo 1" },
  { src: "/logo3.png", alt: "Logo 3" },
  { src: "/logo5.png", alt: "Logo 5" },
  { src: "/logo6.png", alt: "Logo 6" },
  { src: "/logo7.png", alt: "Logo 7" },
  { src: "/logo8.png", alt: "Logo 8" },
];

export default function LogoRotator() {
  return (
    <div className="w-full flex items-center justify-center py-10 min-h-[200px] relative z-10">
      <div className="flex items-center justify-center gap-8 md:gap-12 w-full max-w-6xl px-4 flex-wrap">
        {logos.map((logo, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center relative z-10"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain max-h-[180px] max-w-[300px] md:max-h-[330px] md:max-w-[600px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
