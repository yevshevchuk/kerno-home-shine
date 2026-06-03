import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
            <span className="text-sm font-bold tracking-tight">K</span>
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">
            Kerno <span className="text-muted-foreground font-normal">Service</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#leistung" className="text-sm text-muted-foreground transition hover:text-foreground">Leistungen</a>
          <a href="#garantie" className="text-sm text-muted-foreground transition hover:text-foreground">Garantie</a>
          <a href="#anfrage" className="text-sm text-muted-foreground transition hover:text-foreground">Anfrage</a>
        </nav>
        <a
          href="tel:+4943921234567"
          className="flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-[var(--tech-green-deep)]"
        >
          <Phone className="h-4 w-4" strokeWidth={2.2} />
          <span className="hidden sm:inline">04392 123 45 67</span>
        </a>
      </div>
    </header>
  );
}