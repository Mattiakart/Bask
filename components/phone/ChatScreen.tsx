import { SendIcon, SparkleIcon } from "@/components/AppIcons";
import { Garment, type GarmentKind, type GarmentTone } from "@/components/Garment";
import { LogoGlyph } from "@/components/LogoMark";
import { TabBar } from "@/components/phone/TabBar";

export function ChatScreen() {
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <div className="flex items-center gap-2.5 border-b border-line pb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f0ee] ring-1 ring-line">
          <LogoGlyph className="h-[15px] w-auto text-ink" />
        </span>
        <div className="flex-1">
          <p className="text-[12.5px] font-semibold text-ink">Bask Shopper</p>
          <p className="mt-0.5 flex items-center gap-1 text-[9px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Online
          </p>
        </div>
        <span className="text-[13px] tracking-widest text-muted">•••</span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 overflow-hidden py-4">
        <div className="shrink-0 max-w-[86%] rounded-2xl rounded-tl-md bg-[#eeece8] px-3.5 py-2.5">
          <p className="flex items-center gap-1 text-[11.5px] leading-relaxed text-ink">
            Ciao Chiara!
            <SparkleIcon className="h-3 w-3 text-accent" />
          </p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-ink">
            Hai un matrimonio il 24 maggio alle 6 PM. Vuoi che ti proponga qualche outfit?
          </p>
        </div>

        <div className="ml-auto w-fit shrink-0 max-w-[70%] rounded-2xl rounded-tr-md bg-ink px-3.5 py-2 text-right">
          <p className="text-[11.5px] text-bg">Certo!</p>
        </div>

        <div className="shrink-0 max-w-[92%] rounded-2xl rounded-tl-md bg-[#eeece8] px-3.5 py-2.5">
          <p className="text-[11.5px] leading-relaxed text-ink">Ecco 3 idee che potrebbero piacerti:</p>
          <div className="mt-2.5 flex gap-2">
            <ChatLook kind="gown" tone="blush" />
            <ChatLook kind="dress" tone="dark" />
            <ChatLook kind="gown" tone="gold" />
          </div>
        </div>

        <div className="ml-auto w-fit shrink-0 max-w-[70%] rounded-2xl rounded-tr-md bg-ink px-3.5 py-2 text-right">
          <p className="text-[11.5px] text-bg">La seconda. Il nero non tradisce.</p>
        </div>

        <div className="shrink-0 max-w-[86%] rounded-2xl rounded-tl-md bg-[#eeece8] px-3.5 py-2.5">
          <p className="text-[11.5px] leading-relaxed text-ink">
            Salvato per il 24. Le scarpe le scegliamo giovedì.
          </p>
        </div>
      </div>

      <div className="mb-[64px] flex items-center gap-2 rounded-full bg-[#f1f0ee] px-4 py-2.5 ring-1 ring-line">
        <span className="flex-1 text-[11px] text-muted">Scrivi un messaggio…</span>
        <SendIcon className="h-4 w-4 text-ink" />
      </div>

      <TabBar active="shopper" />
    </div>
  );
}

function ChatLook({ kind, tone }: { kind: GarmentKind; tone: GarmentTone }) {
  return (
    <span className="flex h-[84px] flex-1 items-center justify-center rounded-xl bg-surface ring-1 ring-line">
      <Garment kind={kind} tone={tone} className="h-[86%] w-[86%]" />
    </span>
  );
}
