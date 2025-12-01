"use client";

import Script from "next/script";

export default function ContactDutch() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        async
      />
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">Plan een kennismaking</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Kies een moment dat voor jou past — het gesprek is gratis en vrijblijvend.  
          We bespreken waar je nu staat, wat je doelen zijn en welke digitale oplossingen passen bij jouw business.
        </p>

        <div
          className="calendly-inline-widget mt-10 rounded-2xl border border-white/10 bg-white/[0.06]"
          data-url="https://calendly.com/mauricio-boekhoudoe/30min?text_color=ffffff&primary_color=f70808"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </>
  );
}

