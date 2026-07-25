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
          eyebrow="Wardrobe"
          title="Your whole wardrobe, in three screens."
          body="Photograph pieces and accessories once. Bask sorts them by category and season, makes them searchable, and shows them as they are: clean, cropped, ready to style."
          points={[
            "Clothes, shoes, bags, and accessories already sorted",
            "Search your wardrobe — not someone else’s catalog",
            "Filters for season, color, and occasion",
          ]}
          visual={
            <PhoneFrame label="Wardrobe screen preview with search, category filters, and a grid of garments.">
              <WardrobeScreen />
            </PhoneFrame>
          }
        />

        <FeatureSection
          index="02"
          eyebrow="Events & weather"
          title="Your calendar decides what you wear. The weather confirms it."
          body="Link an outfit to an event and stop thinking about it. Bask reads your schedule, checks the forecast for your city, and has the look ready before you open the door."
          points={[
            "Every event with its temperature and time",
            "Looks saved ahead, editable until the last minute",
            "Suggestions that shift when the weather does",
          ]}
          flip
          visual={
            <PhoneFrame label="Events screen preview with a May calendar, today’s plans, and weather for each.">
              <EventsScreen />
            </PhoneFrame>
          }
        />

        <FeatureSection
          index="03"
          eyebrow="Memory"
          title="It remembers what you wore, when and where."
          body="Every look you wear is archived with date, place, and occasion. When you’re about to repeat the same outfit in front of the same people, Bask lets you know — gently."
          points={[
            "A full history of pieces and pairings",
            "A polite nudge before a repeat",
            "The pieces you never touch, brought into view",
          ]}
          visual={<MemoryVignette />}
        />

        <FeatureSection
          index="04"
          eyebrow="From boutique to wardrobe"
          title="Shop in boutique — the piece is already in your wardrobe."
          body="With partner stores you don’t photograph a thing: the purchase lands in your digital wardrobe with size, fabric, and color. You leave the shop; the piece walks in on its own."
          points={[
            "New purchases synced from the store",
            "No photos, no manual entry",
            "Digital receipt and garment card attached",
          ]}
          flip
          visual={<BoutiqueVignette />}
        />

        <FeatureSection
          index="05"
          eyebrow="Bask Shopper"
          title="An AI companion that always has the right look."
          body="Bask Shopper starts with what you already own. It writes when something important is on your calendar, offers three ideas, and explains why they work. If a piece is missing, it says so — without pushing."
          points={[
            "Three ideas for every occasion, from your wardrobe",
            "A conversation, not a form to fill out",
            "Shopping advice only when you truly need it",
          ]}
          visual={
            <PhoneFrame label="Chat preview with Bask Shopper proposing three outfits for a wedding.">
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
