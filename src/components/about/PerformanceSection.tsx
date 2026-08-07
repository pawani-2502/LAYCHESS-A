import { PERFORMANCE_OPTIMIZATIONS } from "./data";
import { SectionHeader, cardClass } from "./shared";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  "Node counting and TT hit tracking exposed in search stats",
  "Configurable depth slider — trade speed for strength on the fly",
  "Non-blocking search via setTimeout — UI stays responsive while thinking",
  "Incremental Zobrist updates — no full-board rescans per node",
] as const;

export default function PerformanceSection() {
  return (
    <section className="mt-20" aria-labelledby="performance-title">
      <SectionHeader
        label="Performance optimizations"
        title="Engineered for speed in the browser"
        description="Every optimization targets real bottlenecks — branching, redundancy, and evaluation cost."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PERFORMANCE_OPTIMIZATIONS.map((opt, i) => (
          <article
            key={opt.title}
            className={cn(cardClass)}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-base text-foreground">{opt.title}</h3>
              <span className="shrink-0 rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent">
                {opt.metric}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{opt.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card/60 p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Engineering highlights
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {HIGHLIGHTS.map((item, i) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
