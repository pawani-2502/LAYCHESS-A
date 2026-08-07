import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Play" },
  { to: "/about", label: "About" },
] as const;

export default function SiteHeader() {
  const { pathname } = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="font-display text-lg tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {SITE.name}
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {NAV.map(({ to, label }) => (
            <Button
              key={to}
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "text-muted-foreground",
                pathname === to && "text-foreground bg-secondary/80",
              )}
            >
              <Link to={to}>{label}</Link>
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="ml-1 h-8 w-8"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>
      </div>
    </header>
  );
}
