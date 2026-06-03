import { motion } from "framer-motion";
import { BadgeCheck, UserCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "100% Zufriedenheitsgarantie",
    text: "Ist ein Detail nicht perfekt, kommen wir zurück und reinigen kostenfrei nach.",
  },
  {
    icon: UserCheck,
    title: "Geprüfte Fachkräfte",
    text: "Persönlich ausgewählt, geschult und versichert. Immer dieselben Gesichter.",
  },
  {
    icon: Sparkles,
    title: "Festpreis, kein Risiko",
    text: "Transparenter Preis vorab. Keine versteckten Kosten, keine Überraschungen.",
  },
];

export function Guarantee() {
  return (
    <section id="garantie" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--tech-green-deep)]">
            Unser Versprechen
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Premium-Service. Volle Verantwortung.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wir stehen mit unserem Namen für jedes Detail ein. Was wir versprechen, halten wir — oder wir machen es richtig.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--tech-green)]/15">
                <it.icon className="h-5 w-5 text-[var(--tech-green-deep)]" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}