export default function UniverseBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Dark universe background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      
      {/* Stars layer - Large stars */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(2px 2px at 20% 30%, white, transparent),
          radial-gradient(2px 2px at 60% 70%, white, transparent),
          radial-gradient(1px 1px at 50% 50%, white, transparent),
          radial-gradient(1px 1px at 80% 10%, white, transparent),
          radial-gradient(2px 2px at 90% 40%, white, transparent),
          radial-gradient(1px 1px at 33% 60%, white, transparent),
          radial-gradient(1px 1px at 55% 25%, white, transparent),
          radial-gradient(2px 2px at 15% 80%, white, transparent),
          radial-gradient(1px 1px at 75% 55%, white, transparent),
          radial-gradient(1px 1px at 40% 15%, white, transparent),
          radial-gradient(2px 2px at 25% 45%, white, transparent),
          radial-gradient(1px 1px at 65% 85%, white, transparent),
          radial-gradient(1px 1px at 85% 65%, white, transparent),
          radial-gradient(2px 2px at 10% 20%, white, transparent),
          radial-gradient(1px 1px at 45% 75%, white, transparent),
          radial-gradient(1px 1px at 70% 35%, white, transparent),
          radial-gradient(2px 2px at 30% 90%, white, transparent),
          radial-gradient(1px 1px at 50% 5%, white, transparent),
          radial-gradient(1px 1px at 95% 50%, white, transparent),
          radial-gradient(2px 2px at 5% 60%, white, transparent),
          radial-gradient(1px 1px at 7% 40%, white, transparent),
          radial-gradient(2px 2px at 38% 8%, white, transparent),
          radial-gradient(1px 1px at 62% 42%, white, transparent),
          radial-gradient(1px 1px at 88% 75%, white, transparent),
          radial-gradient(2px 2px at 22% 92%, white, transparent),
          radial-gradient(1px 1px at 47% 28%, white, transparent),
          radial-gradient(1px 1px at 73% 18%, white, transparent),
          radial-gradient(2px 2px at 16% 55%, white, transparent),
          radial-gradient(1px 1px at 52% 88%, white, transparent),
          radial-gradient(1px 1px at 84% 32%, white, transparent)
        `,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
      }} />
      
      {/* Medium stars */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(1px 1px at 12% 25%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 58% 15%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 72% 80%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 88% 30%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 18% 70%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 42% 40%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 68% 95%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 82% 10%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 28% 85%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 14% 48%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 36% 12%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 59% 68%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 77% 38%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 91% 62%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 23% 33%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 44% 77%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 66% 22%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 81% 88%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 9% 65%, rgba(255,255,255,0.9), transparent)
        `,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        opacity: 0.6,
      }} />
      
      {/* Small stars - many more */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(0.5px 0.5px at 8% 18%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 17% 52%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 26% 37%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 34% 73%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 43% 29%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 51% 64%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 57% 11%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 63% 81%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 69% 46%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 74% 23%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 79% 58%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 86% 34%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 92% 67%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 3% 41%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 11% 76%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 19% 14%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 27% 59%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 31% 83%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 39% 26%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 46% 71%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 54% 9%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 61% 54%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 67% 96%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 71% 31%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 76% 66%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 83% 19%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 89% 78%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 94% 43%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 6% 87%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 13% 22%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 21% 61%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 29% 4%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 37% 49%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 41% 92%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 48% 16%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 56% 84%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 64% 27%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 72% 72%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 78% 6%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 85% 51%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 93% 36%, rgba(255,255,255,0.8), transparent),
          radial-gradient(0.5px 0.5px at 97% 89%, rgba(255,255,255,0.8), transparent)
        `,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
      }} />
    </div>
  );
}

