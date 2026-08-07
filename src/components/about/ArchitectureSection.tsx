import { ArrowDown } from "lucide-react";
import { ARCHITECTURE_LAYERS } from "./data";
import { SectionHeader, cardClass } from "./shared";
import { cn } from "@/lib/utils";

export default function ArchitectureSection() {
  return (
    <section className="mt-20" aria-labelledby="architecture-title">
      <SectionHeader
        label="Engine architecture"
        title="Six layers, one pipeline"
        description="From your click on the board to the engine's best move — data flows through a clean, layered stack."
      />

      <div className="mt-8 flex flex-col items-center gap-0">
        {ARCHITECTURE_LAYERS.map((layer, i) => (
          <div key={layer.layer} className="flex w-full flex-col items-center">
            <article
              className={cn(cardClass, "w-full")}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                <span className="font-mono text-xs text-accent">{layer.layer}</span>
                <div className="flex-1">
                  <h3 className="font-display text-base text-foreground">{layer.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
                <span className="hidden shrink-0 rounded-md border border-border bg-secondary/50 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
                  Layer {layer.layer}
                </span>
              </div>
            </article>
            {i < ARCHITECTURE_LAYERS.length - 1 && (
              <div className="flex flex-col items-center py-2 text-accent/60" aria-hidden>
                <div className="h-4 w-px bg-border" />
                <ArrowDown className="h-4 w-4" />
                <div className="h-4 w-px bg-border" />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        UI → Game Logic → Move Gen → Evaluation → Search → Optimization → best move returned
      </p>
    </section>
  );
}
