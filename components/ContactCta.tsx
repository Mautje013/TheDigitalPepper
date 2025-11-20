"use client";

export default function ContactCta() {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
          Laten we kennismaken
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Benieuwd wat digitale groei voor jouw organisatie kan betekenen? Plan een vrijblijvend gesprek en ontdek de mogelijkheden.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-pepper hover:bg-pepper-dark text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Heb je vragen?</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="mailto:info@thedigitalpepper.nl"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 hover:border-pepper hover:bg-pepper/10 text-white px-8 py-4 font-semibold transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Stuur een email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
