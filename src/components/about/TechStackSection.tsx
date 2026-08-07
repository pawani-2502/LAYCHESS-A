import { TECH_STACK } from "./data";
import { FeatureCard, SectionHeader } from "./shared";

function StackGroup({
  label,
  items,
  offset,
}: {
  label: string;
  items: readonly { name: string; detail: string }[];
  offset: number;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <FeatureCard key={item.name} title={item.name} delay={offset + i * 60}>
            <p>{item.detail}</p>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section className="mt-20" aria-labelledby="techstack-title">
      <SectionHeader
        label="Tech stack"
        title="Built with modern tools"
        description="A lean frontend stack paired with a hand-crafted engine — no WASM, no server-side compute."
      />

      <div className="mt-8 space-y-10">
        <StackGroup label="Frontend" items={TECH_STACK.frontend} offset={0} />
        <StackGroup label="Core systems" items={TECH_STACK.core} offset={240} />
      </div>
    </section>
  );
}
