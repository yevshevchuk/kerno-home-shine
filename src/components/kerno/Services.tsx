import { motion } from "framer-motion";
import { Sparkles, Sofa, Wrench, Lock } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Reinigung",
    desc: "Unterhalts-, Grund- und Endreinigung für Wohnung & Haus. Sorgfältig, gründlich, zuverlässig.",
    active: true,
  },
  {
    icon: Sofa,
    title: "Teppich- & Polsterreinigung",
    desc: "Tiefenreinigung für Sofas, Sessel und Teppiche. Schonend und materialgerecht.",
    active: false,
  },
  {
    icon: Wrench,
    title: "Hausmeister-Service",
    desc: "Kleinreparaturen, Pflege und regelmäßige Betreuung rund ums Haus.",
    active: false,
  },
];

export function Services({ onSelect }: { onSelect: () => void }) {
  return (
    <section id="leistung" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--tech-green-deep)]">
          Leistungen
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Ein Anbieter. Für alles im Zuhause.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Wir starten mit Reinigung — weitere Dienste folgen Schritt für Schritt, in gleicher Qualität.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group relative flex flex-col rounded-2xl border p-7 transition-all ${
              s.active
                ? "border-foreground/15 bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)]"
                : "border-border bg-card/50"
            }`}
          >
            {!s.active && (
              <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                <Lock className="h-3 w-3" strokeWidth={2.2} /> Demnächst
              </span>
            )}
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                s.active ? "bg-[var(--tech-green)]" : "bg-muted"
              }`}
            >
              <s.icon
                className={`h-6 w-6 ${s.active ? "text-[var(--anthracite)]" : "text-muted-foreground"}`}
                strokeWidth={2.1}
              />
            </div>
            <h3 className={`mt-6 text-xl font-semibold tracking-tight ${s.active ? "text-foreground" : "text-foreground/60"}`}>
              {s.title}
            </h3>
            <p className={`mt-2 text-sm leading-relaxed ${s.active ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
              {s.desc}
            </p>
            {s.active ? (
              <button
                onClick={onSelect}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--tech-green-deep)] transition hover:gap-2.5"
              >
                Jetzt anfragen →
              </button>
            ) : (
              <span className="mt-6 text-sm text-muted-foreground/80">In Vorbereitung</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}