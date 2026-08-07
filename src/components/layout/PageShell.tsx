import type { ReactNode } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export default function PageShell({ children, className, wide }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main
        className={cn(
          "mx-auto px-4 py-10 sm:px-6",
          wide ? "max-w-5xl" : "max-w-3xl",
          className,
        )}
      >
        {children}
      </main>
    </div>
  );
}
