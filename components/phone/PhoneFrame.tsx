type PhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
  label: string;
};

export function PhoneFrame({ children, className, label }: PhoneFrameProps) {
  return (
    <figure
      className={`relative w-[300px] max-w-full shrink-0 rounded-[42px] bg-[#0f1013] p-[9px] shadow-[0_40px_80px_-30px_rgba(21,22,26,0.55),0_2px_0_0_rgba(255,255,255,0.35)_inset] ${className ?? ""}`}
    >
      <div
        className="relative h-[620px] overflow-hidden rounded-[34px] bg-surface"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[9px] z-20 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-[#0f1013]" />
        <StatusBar />
        <div className="relative h-[calc(100%-38px)]">{children}</div>
      </div>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

function StatusBar() {
  return (
    <div className="relative z-10 flex h-[38px] items-end justify-between px-6 pb-1 text-[10px] font-semibold text-ink">
      <span>9:41</span>
      <span className="flex items-center gap-1" aria-hidden="true">
        <svg viewBox="0 0 18 12" className="h-[9px] w-[13px]" fill="currentColor">
          <rect x="0" y="7" width="3" height="5" rx="1" />
          <rect x="4.5" y="5" width="3" height="7" rx="1" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.35" />
        </svg>
        <svg viewBox="0 0 26 12" className="h-[9px] w-[19px]" fill="none">
          <rect x="0.6" y="0.6" width="21" height="10.8" rx="3" stroke="currentColor" strokeOpacity="0.45" />
          <rect x="2.4" y="2.4" width="14" height="7.2" rx="1.8" fill="currentColor" />
          <path d="M23.4 4.2v3.6a2 2 0 0 0 0-3.6Z" fill="currentColor" fillOpacity="0.45" />
        </svg>
      </span>
    </div>
  );
}
