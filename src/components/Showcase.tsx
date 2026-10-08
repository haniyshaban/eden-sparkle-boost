import { useEffect, useRef, useState } from "react";

export type Screen = {
  /** Feature name shown in the list */
  title: string;
  /** One line about what the screen shows */
  desc: string;
  src: string;
};

const INTERVAL = 5000;

/**
 * Steps through a set of screens. Plays on its own while visible,
 * and stops for good once the visitor picks a screen.
 */
const useShowcase = (count: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const playing = auto && visible;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => window.clearInterval(id);
  }, [playing, count]);

  const select = (i: number) => {
    setAuto(false);
    setIndex(i);
  };

  return { ref, index, playing, select };
};

/* ───────────────────────────── feature tabs ───────────────────────────── */

const FeatureTabs = ({
  screens,
  index,
  playing,
  onSelect,
  layout,
  label,
}: {
  screens: Screen[];
  index: number;
  playing: boolean;
  onSelect: (i: number) => void;
  layout: "row" | "list";
  label: string;
}) => (
  <div
    role="tablist"
    aria-label={label}
    className={layout === "row" ? "grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4" : "grid"}
  >
    {screens.map((s, i) => {
      const active = i === index;
      return (
        <button
          key={s.src}
          type="button"
          role="tab"
          aria-selected={active}
          onClick={() => onSelect(i)}
          className={`group relative border-t border-line py-5 text-left transition-colors ${
            active ? "text-ink" : "text-graphite hover:text-ink"
          }`}
        >
          {active && (
            <span
              key={playing ? "playing" : "still"}
              className={`absolute -top-px left-0 h-0.5 bg-ink ${playing ? "showcase-progress" : "w-full"}`}
              style={{ animationDuration: `${INTERVAL}ms` }}
            />
          )}
          <span className="block font-medium">{s.title}</span>
          <span
            className={`block text-[15px] leading-snug text-graphite ${
              layout === "row"
                ? "mt-1.5"
                : `grid transition-all duration-300 ${active ? "mt-1.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`
            }`}
          >
            <span className="overflow-hidden">{s.desc}</span>
          </span>
        </button>
      );
    })}
  </div>
);

/** Screens stacked on top of each other, cross-fading to the active one */
const Stack = ({
  screens,
  index,
  alt,
  width,
  height,
}: {
  screens: Screen[];
  index: number;
  alt: string;
  width: number;
  height: number;
}) => (
  <>
    {screens.map((s, i) => (
      <img
        key={s.src}
        src={s.src}
        alt={`${alt}: ${s.title}`}
        aria-hidden={i !== index}
        loading="lazy"
        width={width}
        height={height}
        className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
          i === index ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}
  </>
);

/* ─────────────────────────────── frames ─────────────────────────────── */

const Glass = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <span
    className={`inline-flex h-7 items-center justify-center rounded-full border border-white/90 bg-white/70 text-[#5a5f58] shadow-[0_0_0_0.5px_rgba(18,20,18,0.1),0_1px_3px_rgba(18,20,18,0.08),inset_0_1px_0_#fff] ${className}`}
  >
    {children}
  </span>
);

const Icon = ({ d, className = "" }: { d: string; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-3.5 w-3.5 fill-none stroke-current ${className}`}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

/** A macOS browser window in the current style: large radius, floating glass controls */
const MacWindow = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="overflow-hidden rounded-[18px] border border-ink/10 bg-surface shadow-[0_30px_60px_-22px_rgba(18,20,18,0.28),0_10px_20px_-12px_rgba(18,20,18,0.14)]">
    <div className="relative flex h-11 items-center gap-2.5 border-b border-ink/[0.07] bg-gradient-to-b from-[#FBFBF9] to-[#F3F4F0] px-3.5">
      <span className="mr-1.5 flex gap-2">
        <i className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.14)]" />
        <i className="h-3 w-3 rounded-full bg-[#FEBC2E] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.14)]" />
        <i className="h-3 w-3 rounded-full bg-[#28C840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.14)]" />
      </span>
      <Glass className="hidden w-7 sm:inline-flex">
        <Icon d="M6 5h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3ZM9 5v14" />
      </Glass>
      <Glass className="hidden w-14 gap-3 sm:inline-flex">
        <Icon d="M15 5l-7 7 7 7" />
        <Icon d="M9 5l7 7-7 7" className="opacity-40" />
      </Glass>
      <Glass className="absolute left-1/2 w-[min(46%,340px)] -translate-x-1/2 gap-1.5 text-[13px] text-[#3c403b]">
        <Icon
          d="M7 11h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2ZM8 11V8a4 4 0 0 1 8 0v3"
          className="!h-[11px] !w-[11px]"
        />
        {title}
      </Glass>
      <span className="flex-1" />
      <Glass className="hidden w-7 sm:inline-flex">
        <Icon d="M12 15V4M8 8l4-4 4 4M6 12v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
      </Glass>
      <Glass className="hidden w-7 sm:inline-flex">
        <Icon d="M12 5v14M5 12h14" />
      </Glass>
    </div>
    {children}
  </div>
);

/* ───────────────────────────── showcases ───────────────────────────── */

/** Web app: features in a row, with a full-width browser window below */
export const WebShowcase = ({
  screens,
  windowTitle,
  onOpen,
}: {
  screens: Screen[];
  windowTitle: string;
  onOpen: (src: string, alt: string) => void;
}) => {
  const { ref, index, playing, select } = useShowcase(screens.length);
  const active = screens[index];

  return (
    <div ref={ref}>
      <FeatureTabs
        screens={screens}
        index={index}
        playing={playing}
        onSelect={select}
        layout="row"
        label={`${windowTitle} screens`}
      />
      <div className="mt-6">
        <MacWindow title={windowTitle}>
          <button
            type="button"
            className="relative block aspect-[1152/560] w-full cursor-zoom-in bg-paper"
            onClick={() => onOpen(active.src, `${windowTitle}: ${active.title}`)}
            aria-label={`Enlarge ${active.title} screenshot`}
          >
            <Stack screens={screens} index={index} alt={windowTitle} width={2304} height={1120} />
          </button>
        </MacWindow>
      </div>
    </div>
  );
};

/** Mobile app: a feature list beside one large phone */
export const PhoneShowcase = ({
  screens,
  appName,
  onOpen,
  flip = false,
}: {
  screens: Screen[];
  appName: string;
  onOpen: (src: string, alt: string) => void;
  /** Put the phone on the left */
  flip?: boolean;
}) => {
  const { ref, index, playing, select } = useShowcase(screens.length);
  const active = screens[index];

  return (
    <div
      ref={ref}
      className={`grid items-center gap-x-16 gap-y-10 ${flip ? "lg:grid-cols-[auto_1fr]" : "lg:grid-cols-[1fr_auto]"}`}
    >
      <div className={flip ? "lg:order-2" : ""}>
        <FeatureTabs
          screens={screens}
          index={index}
          playing={playing}
          onSelect={select}
          layout="list"
          label={`${appName} screens`}
        />
        <div className="border-t border-line" />
      </div>

      <div className="order-first mx-auto w-[17rem] lg:order-none lg:mx-8">
        <div className="rounded-[46px] bg-ink p-[9px] shadow-[0_30px_60px_-22px_rgba(18,20,18,0.35)]">
          <button
            type="button"
            className="relative block aspect-[780/1648] w-full cursor-zoom-in overflow-hidden rounded-[38px] bg-paper"
            onClick={() => onOpen(active.src, `${appName}: ${active.title}`)}
            aria-label={`Enlarge ${active.title} screenshot`}
          >
            <Stack screens={screens} index={index} alt={appName} width={780} height={1648} />
            <span className="absolute left-1/2 top-[9px] h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-ink" />
          </button>
        </div>
      </div>
    </div>
  );
};
