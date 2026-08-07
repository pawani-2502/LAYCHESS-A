import { ENGINE_TECHNOLOGIES } from "./data";
import { DetailRow, FeatureCard, SectionHeader } from "./shared";

export default function EngineTechnologiesSection() {
  return (
    <section className="mt-20" aria-labelledby="technologies-title">
      <SectionHeader
        label="Chess engine technologies"
        title="Algorithms that power the engine"
        description="Each technique targets a specific bottleneck — together they deliver fast, tactically aware search."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {ENGINE_TECHNOLOGIES.map((tech, i) => (
          <FeatureCard
            key={tech.title}
            index={String(i + 1).padStart(2, "0")}
            title={tech.title}
            delay={i * 60}
          >
            <dl className="mt-3 space-y-3">
              <DetailRow term="Purpose">{tech.purpose}</DetailRow>
              <DetailRow term="Benefit">{tech.benefit}</DetailRow>
              <DetailRow term="Performance">{tech.impact}</DetailRow>
            </dl>
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}
