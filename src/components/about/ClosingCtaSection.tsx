import { Link } from "react-router-dom";
import { Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export default function ClosingCtaSection() {
  return (
    <section
      className="about-cta relative mt-20 overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center sm:px-10 sm:py-20"
      aria-labelledby="cta-title"
    >
      <div className="about-hero-bg pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-xl animate-fade-in">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Ready to play?</p>
        <h2
          id="cta-title"
          className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl"
        >
          Challenge the Engine.
          <br />
          <span className="text-accent">Master the Game.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Face the custom search engine right in your browser — adjust depth, request hints, and
          study every move.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="gap-2 shadow-elegant" asChild>
            <Link to="/">
              <Play className="h-4 w-4" />
              Play Now
            </Link>
          </Button>
          {SITE.github && (
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Explore Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
