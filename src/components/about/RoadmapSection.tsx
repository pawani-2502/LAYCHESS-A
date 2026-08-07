import { ROADMAP } from "./data";
import { FeatureCard, SectionHeader } from "./shared";

export default function RoadmapSection() {
  return (
    <section className="mt-20" aria-labelledby="roadmap-title">
      <SectionHeader
        label="Future roadmap"
        title="What comes next"
        description="LayChess is built to grow — from solo engine play toward a full competitive platform."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {ROADMAP.map((item, i) => (
          <FeatureCard
            key={item.title}
            index={String(i + 1).padStart(2, "0")}
            title={item.title}
            delay={i * 60}
          >
            <p>{item.description}</p>
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}
