import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background text-sm font-bold">K</span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                Kerno <span className="text-muted-foreground font-normal">Service</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium Haus-Service in Nortorf und Umland. Mit voller Verantwortung. Mit Garantie.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Kontakt</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 04392 123 45 67</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hallo@kerno-service.de</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 24589 Nortorf, Deutschland</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Rechtliches</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Impressum</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Datenschutz</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Kerno Service. Alle Rechte vorbehalten.</div>
          <div>Mit Sorgfalt gemacht in Nortorf.</div>
        </div>
      </div>
    </footer>
  );
}