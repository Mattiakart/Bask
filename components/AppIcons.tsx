type IconProps = { className?: string };

function Icon({ children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const BellIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M12 4a5 5 0 0 0-5 5v3.4L5.5 16h13L17 12.4V9a5 5 0 0 0-5-5Z" />
    <path d="M10 18.5a2 2 0 0 0 4 0" />
  </Icon>
);

export const SearchIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="11" cy="11" r="6.4" />
    <path d="M15.8 15.8 20 20" />
  </Icon>
);

export const SlidersIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
    <circle cx="9" cy="7" r="1.9" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="12" r="1.9" fill="currentColor" stroke="none" />
    <circle cx="11" cy="17" r="1.9" fill="currentColor" stroke="none" />
  </Icon>
);

export const SunCloudIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="9.2" cy="8.4" r="3.1" />
    <path d="M9.2 2.6v1.4M4.4 8.4H3M13.6 4 12.6 5M4.8 4l1 1M4.8 12.8l1-1" />
    <path d="M9.6 19.5h7.6a3.2 3.2 0 0 0 .2-6.4 4.3 4.3 0 0 0-8.1 1 2.7 2.7 0 0 0 .3 5.4Z" fill="currentColor" fillOpacity="0.08" />
  </Icon>
);

export const PinIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
    <circle cx="12" cy="11" r="2.2" />
  </Icon>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
  </Icon>
);

export const ChevronLeftIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </Icon>
);

export const CameraIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h2.2l1.2-2h7.2l1.2 2H19a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5Z" />
    <circle cx="12" cy="12.5" r="3.6" />
  </Icon>
);

export const DressFormIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M12 3a1.9 1.9 0 0 1 1.9 1.9c0 1-.9 1.5-.9 2.5 0 1.9 5 4.5 5 9.3 0 2.8-2.6 4.3-6 4.3s-6-1.5-6-4.3c0-4.8 5-7.4 5-9.3 0-1-.9-1.5-.9-2.5A1.9 1.9 0 0 1 12 3Z" />
  </Icon>
);

export const CalendarCloudIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V13" />
    <path d="M4 7.5V18a1.5 1.5 0 0 0 1.5 1.5H12" />
    <path d="M8 4v3.5M16 4v3.5M4 10.5h16" />
    <path d="M15.5 20.5h4.1a2 2 0 0 0 .2-4 2.7 2.7 0 0 0-5.1.6 1.7 1.7 0 0 0 .8 3.4Z" />
  </Icon>
);

export const ChatIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M4 12.2c0-3.5 3.4-6.2 8-6.2s8 2.7 8 6.2-3.4 6.3-8 6.3a11 11 0 0 1-2.3-.3L5.5 20l.8-2.8A6.6 6.6 0 0 1 4 12.2Z" />
    <path d="M9 12h.01M12 12h.01M15 12h.01" strokeWidth="2" />
  </Icon>
);

export const ProfileIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="8.6" />
    <circle cx="12" cy="10" r="2.9" />
    <path d="M6.6 18.6a5.9 5.9 0 0 1 10.8 0" />
  </Icon>
);

export const ClockIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7v5.3l3.4 2" />
  </Icon>
);

export const SparkleIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M12 3.5c.6 4.3 1.7 5.4 6 6-4.3.6-5.4 1.7-6 6-.6-4.3-1.7-5.4-6-6 4.3-.6 5.4-1.7 6-6Z" />
  </Icon>
);

export const CheckIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Icon>
);

export const PlusIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

export const SendIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="m4.5 12 15-6.5-4 6.5 4 6.5Z" />
  </Icon>
);

/** Shopping bag receiving an upload — the boutique-to-wardrobe sync mark. */
export const CloudBagIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path
      d="M11 15h26l2.5 27H8.5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M17.5 17V12a6.5 6.5 0 0 1 13 0v5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="24" cy="30" r="9.5" fill="#f8f8f9" />
    <path d="M24 35v-9.5m0 0-3.8 3.8M24 25.5l3.8 3.8" stroke="#b0763f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

/** Boutique facade from the concept board. */
export const StorefrontIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 96 72" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 22h76v46H10Z" />
    <path d="M6 22 14 8h68l8 14Z" fill="currentColor" fillOpacity="0.07" />
    <path d="M22 8v14M38 8v14M58 8v14M74 8v14" />
    <path d="M40 40h16v28H40Z" />
    <path d="M18 32h14v20H18ZM64 32h14v20H64Z" />
    <path d="M52 55h2" strokeLinecap="round" />
  </svg>
);

/** The cat avatar used as the app's greeting mark. */
export const CatFaceIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path
      d="M6.5 20.5V13L8 4.5l7.2 6.2c.9-.2 1.7-.2 2.6 0L25 4.5 26.5 13v7.5c0 3.6-4.7 6.5-10 6.5s-10-2.9-10-6.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <ellipse cx="12" cy="16.5" rx="2.2" ry="2.9" stroke="currentColor" strokeWidth="1.3" />
    <ellipse cx="21" cy="16.5" rx="2.2" ry="2.9" stroke="currentColor" strokeWidth="1.3" />
    <ellipse cx="12" cy="16.5" rx="0.8" ry="1.9" fill="currentColor" />
    <ellipse cx="21" cy="16.5" rx="0.8" ry="1.9" fill="currentColor" />
    <path d="M16.5 21.2v1.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
