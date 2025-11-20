import Container from "./Container";

export default function DigitalCompassIntro() {
  return (
    <section className="py-16 md:py-24 relative">
      <Container>
        {/* Section header */}
        <div className="mb-12 px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-pepper">
            Het Digital Compass™
          </h2>
          <h3 className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
            De routekaart voor moderne, schaalbare digitale groei.
          </h3>
        </div>

        {/* Content paragraphs */}
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Digitale groei kan overweldigend voelen: tientallen tools, versnipperde processen, technische ruis. Het Digital Compass™ brengt daar rust en richting in. Het is een helder model dat laat zien waar een organisatie nú staat, welke digitale stappen prioriteit hebben en hoe technologie, data, marketing en AI samen één geheel vormen.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            Het kompas bestaat uit vier samenhangende pijlers die elke digitale organisatie nodig heeft — van een solide technische basis tot slimme data, van digitale groei tot toekomstgerichte strategie.
          </p>
          
          <p className="text-gray-300 leading-relaxed font-semibold">
            Met het Digital Compass™ maak je digitale keuzes niet langer op gevoel, maar op een duidelijke, bewezen structuur.
          </p>
        </div>
      </Container>
    </section>
  );
}

