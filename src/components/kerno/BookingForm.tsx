import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Sparkles, Sofa, Wrench, Lock, CheckCircle2 } from "lucide-react";

type StepData = {
  service: string;
  sqm: string;
  rooms: string;
  notes: string;
  name: string;
  address: string;
  phone: string;
  email: string;
};

const initial: StepData = {
  service: "cleaning",
  sqm: "",
  rooms: "",
  notes: "",
  name: "",
  address: "",
  phone: "",
  email: "",
};

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<StepData>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof StepData, v: string) => setData((d) => ({ ...d, [k]: v }));

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = ["Leistung", "Objekt", "Kontakt"];

  return (
    <section id="anfrage" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="text-center">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--tech-green-deep)]">
          Anfrage in 60 Sekunden
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Service anfragen
        </h2>
        <p className="mt-3 text-muted-foreground">
          Drei einfache Schritte. Wir melden uns innerhalb von 24 Stunden mit einem Festpreis.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
        {/* Stepper */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5 sm:px-8">
          {steps.map((label, i) => {
            const num = i + 1;
            const isActive = step === num;
            const isDone = step > num || submitted;
            return (
              <div key={label} className="flex flex-1 items-center">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                      isDone
                        ? "bg-[var(--tech-green)] text-[var(--anthracite)]"
                        : isActive
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isDone ? <Check className="h-4 w-4" strokeWidth={2.6} /> : num}
                  </div>
                  <span
                    className={`hidden text-sm font-medium sm:inline ${
                      isActive || isDone ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="mx-3 h-px flex-1 bg-border sm:mx-4" />
                )}
              </div>
            );
          })}
        </div>

        <form onSubmit={submit} className="px-6 py-8 sm:px-10 sm:py-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--tech-green)]">
                  <CheckCircle2 className="h-7 w-7 text-[var(--anthracite)]" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">Vielen Dank, {data.name || "Sie haben es geschafft"}!</h3>
                <p className="mt-2 text-muted-foreground">
                  Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden mit Ihrem Festpreis.
                </p>
              </motion.div>
            ) : step === 1 ? (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <Label>Welche Leistung benötigen Sie?</Label>
                <ServiceOption
                  active
                  selected={data.service === "cleaning"}
                  onClick={() => update("service", "cleaning")}
                  icon={Sparkles}
                  title="Unterhaltsreinigung"
                  desc="Regelmäßige oder einmalige Reinigung für Wohnung & Haus"
                />
                <ServiceOption icon={Sofa} title="Teppich- & Polsterreinigung" desc="Demnächst verfügbar" />
                <ServiceOption icon={Wrench} title="Hausmeister-Service" desc="Demnächst verfügbar" />
              </motion.div>
            ) : step === 2 ? (
              <motion.div
                key="s2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Quadratmeter" required>
                    <input
                      type="number"
                      min={10}
                      required
                      value={data.sqm}
                      onChange={(e) => update("sqm", e.target.value)}
                      placeholder="z.B. 85"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Anzahl Zimmer" required>
                    <select
                      required
                      value={data.rooms}
                      onChange={(e) => update("rooms", e.target.value)}
                      className={inputCls}
                    >
                      <option value="">Bitte wählen</option>
                      {["1", "2", "3", "4", "5", "6+"].map((r) => (
                        <option key={r} value={r}>{r} Zimmer</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Besondere Hinweise (optional)">
                  <textarea
                    value={data.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={4}
                    placeholder="z.B. Miete/Auszug, Hund im Haus, nur halbe Etage…"
                    className={inputCls}
                  />
                </Field>
              </motion.div>
            ) : (
              <motion.div
                key="s3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <Field label="Name" required>
                  <input required value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Max Mustermann" className={inputCls} />
                </Field>
                <Field label="Adresse (Nortorf & Umland)" required>
                  <input required value={data.address} onChange={(e) => update("address", e.target.value)} placeholder="Straße, Hausnr., PLZ Ort" className={inputCls} />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Telefon" required>
                    <input required type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="04392 …" className={inputCls} />
                  </Field>
                  <Field label="E-Mail" required>
                    <input required type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="name@beispiel.de" className={inputCls} />
                  </Field>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!submitted && (
            <div className="mt-9 flex items-center justify-between">
              <button
                type="button"
                onClick={prev}
                disabled={step === 1}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-0"
              >
                <ArrowLeft className="h-4 w-4" /> Zurück
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Weiter <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--tech-green)] px-6 py-3 text-sm font-semibold text-[var(--anthracite)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--tech-green-deep)]"
                >
                  Anfrage absenden <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-[var(--tech-green-deep)] focus:ring-2 focus:ring-[var(--tech-green)]/30";

function Label({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-base font-semibold text-foreground">{children}</h3>;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-[var(--tech-green-deep)]">*</span>}
      </span>
      {children}
    </label>
  );
}

function ServiceOption({
  icon: Icon,
  title,
  desc,
  active,
  selected,
  onClick,
}: {
  icon: typeof Sparkles;
  title: string;
  desc: string;
  active?: boolean;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      disabled={!active}
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
        !active
          ? "cursor-not-allowed border-border bg-muted/30 opacity-70"
          : selected
          ? "border-[var(--tech-green-deep)] bg-[var(--tech-green)]/10 ring-2 ring-[var(--tech-green)]/30"
          : "border-border bg-background hover:border-foreground/30"
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
          selected ? "bg-[var(--tech-green)]" : "bg-muted"
        }`}
      >
        <Icon className={`h-5 w-5 ${selected ? "text-[var(--anthracite)]" : "text-muted-foreground"}`} strokeWidth={2.1} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">{title}</span>
          {!active && (
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <Lock className="h-2.5 w-2.5" strokeWidth={2.4} /> Demnächst
            </span>
          )}
        </div>
        <div className="mt-0.5 text-xs text-muted-foreground">{desc}</div>
      </div>
      {selected && (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--tech-green)]">
          <Check className="h-3.5 w-3.5 text-[var(--anthracite)]" strokeWidth={3} />
        </div>
      )}
    </button>
  );
}