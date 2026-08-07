import { ArrowDown } from "lucide-react";
import { SITE } from "@/lib/site";
import { HERO_PIECES, INTRO } from "./data";

const FLOAT_DELAYS = ["0ms", "1s", "2s", "0.5s", "1.5s", "2.5s"];

export default function AboutHero() {
  return (
    <section
      className="about-hero relative -mx-4 overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 sm:-mx-6 sm:px-10 sm:py-20"
      aria-labelledby="about-hero-title"
    >
      <div className="about-hero-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="about-hero-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />

      {HERO_PIECES.map((piece, i) => (
        <span
          key={piece}
          className="about-piece-float pointer-events-none absolute select-none font-display text-4xl text-accent/20 sm:text-5xl"
          style={{
            top: `${12 + (i % 3) * 28}%`,
            left: `${8 + i * 14}%`,
            animationDelay: FLOAT_DELAYS[i],
          }}
          aria-hidden
        >
          {piece}
        </span>
      ))}

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground animate-fade-in">
          Browser-native chess engine
        </p>
        <h1
          id="about-hero-title"
          className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl animate-fade-in"
          style={{ animationDelay: "60ms" }}
        >
          {SITE.name}
        </h1>
        <p
          className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base animate-fade-in"
          style={{ animationDelay: "120ms" }}
        >
          {SITE.tagline}
        </p>
        <p
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground animate-fade-in"
          style={{ animationDelay: "180ms" }}
        >
          {INTRO}
        </p>

        <div
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur animate-fade-in"
          style={{ animationDelay: "240ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Custom engine · Runs entirely in your browser
        </div>
      </div>

      <div className="relative z-10 mt-12 flex justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
        <a
          href="#overview"
          className="flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-accent"
        >
          <span className="uppercase tracking-[0.18em]">Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
