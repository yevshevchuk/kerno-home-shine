import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-2 md:gap-8 md:pt-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--tech-green)]" />
            Premium Haus-Service · Nortorf & Umland
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Ihr Zuhause.<br />Perfekt gepflegt.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Premium Reinigung mit 100% Zufriedenheitsgarantie. Ist es nicht perfekt, machen wir es kostenlos noch einmal.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={onCta}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--tech-green)] px-7 py-3.5 text-sm font-semibold text-[var(--anthracite)] shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--tech-green-deep)] hover:shadow-[var(--shadow-elegant)]"
            >
              Service anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.4} />
            </button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-[var(--tech-green-deep)]" strokeWidth={2.2} />
              Keine Anzahlung · Festpreis
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] ring-1 ring-border">
            <img
              src={heroImage}
              alt="Makellos sauberes, helles Wohnzimmer"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-5 -left-5 hidden rounded-xl bg-card p-4 shadow-[var(--shadow-elegant)] ring-1 ring-border md:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--tech-green)]">
                <ShieldCheck className="h-5 w-5 text-[var(--anthracite)]" strokeWidth={2.4} />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">100% Garantie</div>
                <div className="text-xs text-muted-foreground">Sonst kostenlos erneut</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}