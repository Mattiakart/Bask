import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { ChatScreen } from "@/components/phone/ChatScreen";
import { EventsScreen } from "@/components/phone/EventsScreen";
import { WardrobeScreen } from "@/components/phone/WardrobeScreen";
import { PromiseBand } from "@/components/PromiseBand";
import { BoutiqueVignette, MemoryVignette } from "@/components/vignettes";
import { WaitlistSection } from "@/components/WaitlistSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PromiseBand />

        <FeatureSection
          index="01"
          eyebrow="Armadio"
          title="Tutto il tuo guardaroba, in tre schermate."
          body="Fotografi capi e accessori una volta sola. Bask li ordina per categoria e stagione, li rende cercabili e te li mostra come sono: puliti, ritagliati, pronti da abbinare."
          points={[
            "Abbigliamento, scarpe, borse e accessori già divisi",
            "Ricerca nel tuo armadio, non nel catalogo di qualcun altro",
            "Filtri per stagione, colore e occasione",
          ]}
          visual={
            <PhoneFrame label="Anteprima della schermata Armadio con ricerca, filtri per categoria e griglia dei capi.">
              <WardrobeScreen />
            </PhoneFrame>
          }
        />

        <FeatureSection
          index="02"
          eyebrow="Eventi e meteo"
          title="Il calendario decide cosa metti. Il meteo lo conferma."
          body="Collega un outfit a un evento e non ci pensi più. Bask legge l'agenda, guarda le previsioni della tua città e prepara il look prima che tu apra l'anta."
          points={[
            "Ogni evento con la sua temperatura e la sua ora",
            "Look salvato in anticipo, modificabile fino all'ultimo",
            "Suggerimenti che cambiano se cambia il tempo",
          ]}
          flip
          visual={
            <PhoneFrame label="Anteprima della schermata Eventi con calendario di maggio, eventi del giorno e meteo per ciascuno.">
              <EventsScreen />
            </PhoneFrame>
          }
        />

        <FeatureSection
          index="03"
          eyebrow="Memoria"
          title="Ricorda cosa hai indossato, quando e dove."
          body="Ogni look indossato finisce in archivio con data, luogo e occasione. Quando stai per ripetere lo stesso completo davanti alle stesse persone, Bask ti avvisa. Con garbo."
          points={[
            "Storico completo di capi e abbinamenti",
            "Avviso gentile prima di un doppione",
            "I capi che non tocchi mai, messi in evidenza",
          ]}
          visual={<MemoryVignette />}
        />

        <FeatureSection
          index="04"
          eyebrow="Dal negozio all'armadio"
          title="Compri in boutique, il capo è già nel tuo armadio."
          body="Con i negozi partner non serve fotografare nulla: l'acquisto arriva nel guardaroba virtuale con taglia, materiale e colore. Tu esci dal negozio, il capo entra da solo."
          points={[
            "Nuovi acquisti sincronizzati dal negozio",
            "Nessuna foto, nessun inserimento manuale",
            "Scontrino digitale e scheda capo allegati",
          ]}
          flip
          visual={<BoutiqueVignette />}
        />

        <FeatureSection
          index="05"
          eyebrow="Bask Shopper"
          title="Un'amica che ha sempre il look giusto."
          body="Bask Shopper parte da quello che hai già. Ti scrive quando in agenda c'è qualcosa di importante, propone tre idee e ti dice perché funzionano. Se manca un pezzo, lo dice — senza insistere."
          points={[
            "Tre proposte per ogni occasione, dal tuo armadio",
            "Conversazione, non un modulo da compilare",
            "Consigli d'acquisto solo quando servono davvero",
          ]}
          visual={
            <PhoneFrame label="Anteprima della chat con Bask Shopper che propone tre outfit per un matrimonio.">
              <ChatScreen />
            </PhoneFrame>
          }
        />

        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
