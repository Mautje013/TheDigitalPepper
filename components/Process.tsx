"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const steps = [
  {
    k: "01",
    title: "Intake (20–30 min)",
    body: "Doelen, context en huidige setup. We denken direct mee en geven richting.",
  },
  {
    k: "02",
    title: "Quick Scan",
    body: "Korte analyse van je kanalen, tooling en data. We bepalen wat het meeste effect geeft.",
  },
  {
    k: "03",
    title: "Maatwerkvoorstel",
    body: "Heldere scope, planning en investering — geen verrassingen, wel keuzes.",
  },
  {
    k: "04",
    title: "Implementatie & groei",
    body: "Sprints met meetbare resultaten. Transparante rapportage en duidelijke next steps.",
  },
];

export default function Process() {
  return (
    <section id="proces" className="py-16 md:py-24 relative">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-2xl md:text-4xl font-extrabold"
        >
          Zo werken we — snel, duidelijk en resultaatgericht
        </motion.h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="text-pepper font-bold">{s.k}</div>
              <h3 className="text-lg font-semibold mt-1">{s.title}</h3>
              <p className="mt-2 text-gray-300">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-400 italic">
          * We werken transparant en zonder verborgen kosten. Elke stap wordt vooraf besproken.
        </div>
      </Container>
    </section>
  );
}
