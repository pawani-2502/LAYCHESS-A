import { TIMELINE } from "./data";
import { SectionHeader, cardClass } from "./shared";
import { cn } from "@/lib/utils";

export default function TimelineSection() {
  return (
    <section className="mt-20" aria-labelledby="timeline-title">
      <SectionHeader
        label="Development journey"
        title="From concept to deployment"
        description="Six phases — each building on the last — to deliver a complete browser chess experience."
      />

      <ol className="relative mt-10">
        <div
          className="absolute bottom-0 left-3 top-0 w-px bg-border sm:left-6"
          aria-hidden
        />

        {TIMELINE.map((item, i) => (
          <li key={item.phase} className="relative pb-10 pl-10 sm:pl-14 last:pb-0">
            <span
              className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-card font-mono text-[10px] text-accent sm:left-3"
              aria-hidden
            >
              {item.phase}
            </span>

            <article className={cn(cardClass)} style={{ animationDelay: `${i * 80}ms` }}>
              <span className="font-mono text-xs text-accent">{item.phase}</span>
              <h3 className="mt-1 font-display text-base text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
