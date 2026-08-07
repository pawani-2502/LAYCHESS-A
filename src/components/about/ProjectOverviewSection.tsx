import { OVERVIEW_STATS, WHY_BUILT } from "./data";
import { SectionHeader, StatCard } from "./shared";

export default function ProjectOverviewSection() {
  return (
    <section id="overview" className="mt-20 scroll-mt-20" aria-labelledby="overview-title">
      <SectionHeader
        label="Project overview"
        title="What is LayChess?"
        description="A modern browser-based chess platform powered by a custom engine — intuitive to play, rigorous under the hood."
      />

      <div className="mt-6 space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{WHY_BUILT}</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {OVERVIEW_STATS.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            detail={stat.detail}
            delay={i * 60}
          />
        ))}
      </div>
    </section>
  );
}
