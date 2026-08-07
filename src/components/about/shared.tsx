import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const cardClass =
  "group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-elegant animate-fade-in";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <header className={className}>
      {label && (
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      )}
      <h2 className="font-display text-2xl tracking-tight text-foreground">{title}</h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}

interface FeatureCardProps {
  index?: string;
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  icon?: ReactNode;
}

export function FeatureCard({
  index,
  title,
  children,
  className,
  delay = 0,
  icon,
}: FeatureCardProps) {
  return (
    <article
      className={cn(cardClass, className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        {index && <span className="font-mono text-xs text-accent">{index}</span>}
        {icon && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-accent">
            {icon}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base text-foreground">{title}</h3>
          <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </article>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  detail?: string;
  delay?: number;
}

export function StatCard({ value, label, detail, delay = 0 }: StatCardProps) {
  return (
    <div
      className={cn(cardClass, "text-center sm:text-left")}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="font-display text-3xl tracking-tight text-accent">{value}</p>
      <p className="mt-1 font-display text-sm text-foreground">{label}</p>
      {detail && <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>}
    </div>
  );
}

interface DetailRowProps {
  term: string;
  children: ReactNode;
}

export function DetailRow({ term, children }: DetailRowProps) {
  return (
    <div className="border-t border-border/60 pt-3 first:border-t-0 first:pt-0">
      <dt className="text-xs uppercase tracking-[0.14em] text-accent">{term}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</dd>
    </div>
  );
}
