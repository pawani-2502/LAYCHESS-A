import { SITE } from "@/lib/site";

export const OVERVIEW_STATS = [
  {
    value: "8+",
    label: "Engine Algorithms",
    detail: "Negamax, alpha-beta, quiescence, iterative deepening, and more.",
  },
  {
    value: "6",
    label: "Search Optimizations",
    detail: "TT, Zobrist hashing, killer moves, MVV-LVA, and smart ordering.",
  },
  {
    value: "12+",
    label: "Supported Features",
    detail: "Hints, themes, 3D board, sounds, two-player, undo, and depth control.",
  },
  {
    value: "3×",
    label: "Performance Gains",
    detail: "Pruning and caching deliver deeper search in the same time budget.",
  },
] as const;

export const ARCHITECTURE_LAYERS = [
  {
    layer: "01",
    title: "User Interface Layer",
    description:
      "React board, controls, themes, and real-time feedback. Captures moves and renders engine state with polished animations.",
  },
  {
    layer: "02",
    title: "Game Logic Layer",
    description:
      "chess.js handles rules, legality, check detection, and game state. The single source of truth for position integrity.",
  },
  {
    layer: "03",
    title: "Move Generation Layer",
    description:
      "Generates all legal moves from the current position. Feeds the search tree with branching possibilities at every node.",
  },
  {
    layer: "04",
    title: "Evaluation Layer",
    description:
      "Static scoring via material, piece-square tables, mobility, and king safety hints. Returns centipawn scores from White's view.",
  },
  {
    layer: "05",
    title: "Search Layer",
    description:
      "Negamax with alpha-beta pruning, quiescence search, and iterative deepening. Explores lines to configurable depth.",
  },
  {
    layer: "06",
    title: "Engine Optimization Layer",
    description:
      "Transposition tables, Zobrist hashing, killer heuristic, and MVV-LVA ordering. Cuts nodes and accelerates cutoffs.",
  },
] as const;

export const ENGINE_TECHNOLOGIES = [
  {
    title: "Negamax Search",
    purpose: "Unified minimax framework that searches both sides with a single recursive function.",
    benefit: "Simpler code paths and consistent score negation at every ply.",
    impact: "Reduces implementation complexity while maintaining full search strength.",
  },
  {
    title: "Alpha-Beta Pruning",
    purpose: "Eliminates branches that cannot improve the current best score.",
    benefit: "Dramatically shrinks the effective search tree without losing accuracy.",
    impact: "Often cuts explored nodes by orders of magnitude at higher depths.",
  },
  {
    title: "Quiescence Search",
    purpose: "Extends search through capture sequences at leaf nodes.",
    benefit: "Prevents horizon effect — avoids blundering into tactical traps.",
    impact: "Stabilizes evaluation in sharp positions where material swings matter.",
  },
  {
    title: "Iterative Deepening",
    purpose: "Searches depth 1, then 2, then 3… up to the target depth.",
    benefit: "Each pass improves move ordering for the next, via transposition best-moves.",
    impact: "Better cutoffs per depth; graceful time management under constraints.",
  },
  {
    title: "Zobrist Hashing",
    purpose: "Incremental XOR-based position hashing for O(1) lookup keys.",
    benefit: "Fast, collision-resistant keys for transposition table indexing.",
    impact: "Near-instant position recognition across millions of nodes.",
  },
  {
    title: "Transposition Tables",
    purpose: "Cache previously searched positions with depth, score, and best move.",
    benefit: "Reuses work when the same position is reached via different move orders.",
    impact: "High TT hit rates slash redundant subtree exploration.",
  },
  {
    title: "Killer Move Heuristic",
    purpose: "Prioritizes quiet moves that caused beta cutoffs at the same ply.",
    benefit: "Improves move ordering for non-capture cutoffs without extra search.",
    impact: "Earlier cutoffs mean fewer nodes evaluated per second of thinking.",
  },
  {
    title: "MVV-LVA Move Ordering",
    purpose: "Orders captures by Most Valuable Victim, Least Valuable Attacker.",
    benefit: "Tries the most promising captures first to trigger alpha-beta cutoffs sooner.",
    impact: "Critical in quiescence and tactical positions — faster, sharper play.",
  },
] as const;

export const PERFORMANCE_OPTIMIZATIONS = [
  {
    title: "Faster Search Depth",
    metric: "Depth 4+",
    description:
      "Iterative deepening with strong ordering reaches practical depths in milliseconds on modern hardware.",
  },
  {
    title: "Position Caching",
    metric: "TT Hits",
    description:
      "Zobrist-keyed transposition table stores EXACT, LOWER, and UPPER bounds to skip re-search.",
  },
  {
    title: "Reduced Branching Factor",
    metric: "α-β Cuts",
    description:
      "Alpha-beta pruning eliminates subtrees that cannot affect the final score.",
  },
  {
    title: "Smart Move Ordering",
    metric: "4-Tier",
    description:
      "TT best-move, captures (MVV-LVA), promotions, and killer moves ordered before quiet moves.",
  },
  {
    title: "Efficient Evaluation",
    metric: "<1ms",
    description:
      "Lightweight PST-based evaluation — material, placement, mobility, king safety — no heavy neural nets.",
  },
  {
    title: "Memory Optimization",
    metric: "In-Browser",
    description:
      "Compact TT entries and incremental hashing keep memory footprint small for browser deployment.",
  },
] as const;

export const TECH_STACK = {
  frontend: [
    { name: "React", detail: "Component-driven UI with hooks and lazy routes." },
    { name: "TypeScript", detail: "Type-safe engine interfaces and UI props." },
    { name: "Vite", detail: "Fast dev server and optimized production builds." },
    { name: "Tailwind CSS", detail: "Utility-first styling with design tokens." },
  ],
  core: [
    { name: "Custom Chess Engine", detail: "Hand-written search in TypeScript." },
    { name: "Move Generator", detail: "chess.js verbose move generation." },
    { name: "Evaluation Engine", detail: "Material + PST + mobility scoring." },
    { name: "Search Algorithms", detail: "Negamax, quiescence, iterative deepening." },
  ],
} as const;

export const TIMELINE = [
  {
    phase: "01",
    title: "Project Planning",
    description: "Defined goals: browser-native play, custom engine, premium UX without a backend.",
  },
  {
    phase: "02",
    title: "Engine Architecture",
    description: "Layered design separating UI, game logic, evaluation, search, and optimizations.",
  },
  {
    phase: "03",
    title: "Search Implementation",
    description: "Built negamax with alpha-beta, quiescence, and iterative deepening from scratch.",
  },
  {
    phase: "04",
    title: "Optimization Phase",
    description: "Added Zobrist hashing, transposition table, killer moves, and MVV-LVA ordering.",
  },
  {
    phase: "05",
    title: "UI Integration",
    description: "Connected engine to react-chessboard with themes, 3D tilt, sounds, and hints.",
  },
  {
    phase: "06",
    title: "Final Deployment",
    description: "Production build on Vite, SPA routing, and Vercel-ready static hosting.",
  },
] as const;

export const ROADMAP = [
  { title: "Multiplayer Support", description: "Real-time games between two players over the network." },
  { title: "Online Matchmaking", description: "Queue-based pairing with skill-aware matching." },
  { title: "User Authentication", description: "Accounts, profiles, and saved game history." },
  { title: "ELO Rating System", description: "Competitive ratings tracked across rated games." },
  { title: "Opening Explorer", description: "Browse and practice opening lines from master databases." },
  { title: "Analysis Board", description: "Step through games with engine evaluation and best-move arrows." },
  { title: "Tournament Mode", description: "Swiss and round-robin formats with brackets and standings." },
  { title: "Mobile Support", description: "Touch-optimized board controls and responsive layouts." },
] as const;

export const HERO_PIECES = ["♔", "♕", "♖", "♗", "♘", "♙"] as const;

export const INTRO =
  `${SITE.name} is a modern browser-based chess platform built for champions. ` +
  "It combines intuitive gameplay with a custom TypeScript engine — negamax search, alpha-beta pruning, " +
  "and transposition tables — so you can play competitive chess directly in the browser with no install and no server.";

export const WHY_BUILT =
  "Chess engines traditionally live on servers or as desktop binaries. LayChess was built to prove " +
  "that a thoughtful, optimized search engine can run entirely in the browser — fast enough to challenge " +
  "players, transparent enough to study, and beautiful enough to feel like a premium chess study.";
