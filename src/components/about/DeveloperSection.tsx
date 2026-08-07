import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEVELOPER, SITE } from "@/lib/site";
import { SectionHeader, cardClass } from "./shared";
import { cn } from "@/lib/utils";

export default function DeveloperSection() {
  const hasLinks = SITE.github || SITE.portfolio;

  return (
    <section className="mt-20" aria-labelledby="developer-title">
      <SectionHeader
        label="About the developer"
        title="Built by hand"
        description="Architecture, engine, interface, and deployment — one cohesive vision."
      />

      <article className={cn(cardClass, "mt-8")}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-2xl tracking-tight text-foreground">{DEVELOPER.name}</p>
            <p className="mt-1 text-sm text-accent">{DEVELOPER.role}</p>
          </div>

          {hasLinks && (
            <div className="flex flex-wrap gap-2">
              {SITE.github && (
                <Button variant="outline" size="sm" className="gap-1.5" asChild>
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {SITE.portfolio && (
                <Button variant="outline" size="sm" className="gap-1.5" asChild>
                  <a href={SITE.portfolio} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Portfolio
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Responsibilities
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {DEVELOPER.responsibilities.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
