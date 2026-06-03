import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/kerno/Header";
import { Hero } from "@/components/kerno/Hero";
import { Guarantee } from "@/components/kerno/Guarantee";
import { Services } from "@/components/kerno/Services";
import { BookingForm } from "@/components/kerno/BookingForm";
import { Footer } from "@/components/kerno/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kerno Service — Premium Haus-Service in Nortorf" },
      { name: "description", content: "Premium Reinigung in Nortorf & Umland mit 100% Zufriedenheitsgarantie. Festpreis, geprüfte Fachkräfte, keine Überraschungen." },
      { property: "og:title", content: "Kerno Service — Premium Haus-Service in Nortorf" },
      { property: "og:description", content: "Premium Reinigung mit Garantie. Ist es nicht perfekt, machen wir es kostenlos noch einmal." },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollToForm = () => {
    document.getElementById("anfrage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero onCta={scrollToForm} />
        <Guarantee />
        <Services onSelect={scrollToForm} />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
