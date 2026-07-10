// Single source of truth for all copy/content on the marketing site.
// Edit here — components read this data, they don't hardcode strings.

export const site = {
  title: "timedart",
  tagline: "timedart — local-first time tracking & invoicing",
  description:
    "Fast, local-first time tracking for people who bill by the hour. Organise work as clients, projects and tasks, and turn tracked hours into a branded, region-aware PDF invoice. Free and open source.",
  ogImage:
    "https://raw.githubusercontent.com/craftox-labs/timedart/main/docs/media/hero.png",
  themeColor: "#15191e",
  favicon: "/logo/timedart_symbol.svg",
};

export const links = {
  demo: "https://timedart-demo.netlify.app",
  github: "https://github.com/craftox-labs/timedart",
  githubKeyboard: "https://github.com/craftox-labs/timedart#keyboard",
  githubReadme: "https://github.com/craftox-labs/timedart/blob/main/README.md",
  githubLicense: "https://github.com/craftox-labs/timedart/blob/main/LICENSE",
  githubIssues: "https://github.com/craftox-labs/timedart/issues",
  githubAllProjects: "https://github.com/craftox-labs",
  craftox: "https://craftox-labs.github.io",
  desktopDownload: null, // coming soon — no link yet
};

export const nav = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Keyboard", href: "#keyboard" },
  { label: "Under the hood", href: "#hood" },
];

export const hero = {
  eyebrow: "Local-first time tracking · free & open source",
  headingPre: "Track your hours the way you think about your work - then ",
  headingHighlight: "invoice",
  headingPost: ".",
  lede: "A fast, local-first time tracker for people who bill by the hour. Organise work as clients, projects and tasks — and turn tracked hours into a branded PDF invoice in a couple of clicks.",
  note: "Runs in your browser — <b>no install, no account</b>. Data never leaves your machine.",
  shot: {
    label: "timedart",
    src: "/media/welcome.png",
    alt: "timedart welcome screen — track time against your projects and send branded invoices",
  },
};

export const howItWorksSection = {
  eyebrow: "How it works",
  heading: "One screen. The whole flow.",
  lede: "Client to invoice without leaving the tracker — everything below is visible at once, no context-switching.",
  shot: {
    label: "timedart — tracker",
    src: "https://raw.githubusercontent.com/craftox-labs/timedart/main/docs/media/hero.png",
    alt: "The timedart tracker, with client, project, timer, tasks and invoice all on one screen",
  },
};

export type FlowStep = { n: string; label: string; description: string };

export const flowSteps: FlowStep[] = [
  {
    n: "1",
    label: "Client",
    description: "The people you bill — pick one from the side panel.",
  },
  { n: "2", label: "Project", description: "Work, grouped under the client." },
  {
    n: "3",
    label: "Task",
    description: "What actually gets done, at its own rate.",
  },
  {
    n: "4",
    label: "Timer",
    description: "One keypress to start; the seconds bill themselves.",
  },
  {
    n: "5",
    label: "Invoice",
    description: "Tracked hours roll straight into a branded PDF.",
  },
];

export type Pillar = {
  title: string;
  description: string;
  tag: string;
  wide?: boolean;
  icon: "grid" | "layers" | "invoice" | "keyboard" | "device";
};

export const pillars: Pillar[] = [
  {
    title: "Yours, on your disk",
    description:
      "Everything persists locally in SQLite. No account, no cloud, no sync — nothing leaves your machine, and clearing site data is the only reset. Privacy isn't a setting here; it's the architecture.",
    tag: "local-first · SQLite",
    wide: true,
    icon: "grid",
  },
  {
    title: "Structured, not scattered",
    description:
      "Clients → projects → tasks → entries. Your history reads like your workload, not a flat log.",
    tag: "clients / projects / tasks",
    icon: "layers",
  },
  {
    title: "Hours → invoice in seconds",
    description:
      "Pick a project and date range, preview the itemised entries and total, export a clean PDF. No spreadsheet round-trip.",
    tag: "region-aware PDF",
    icon: "invoice",
  },
  {
    title: "Keyboard-first",
    description:
      "The whole app is drivable vim-style, mouse optional. The timer is one keypress away from anywhere. Press ? for the map.",
    tag: "vim-style navigation",
    icon: "keyboard",
  },
  {
    title: "One app, every screen",
    description:
      "A roomy two-pane layout on desktop folds into a drawer on narrow windows — the same features throughout.",
    tag: "Linux · macOS · Windows",
    icon: "device",
  },
];

export const pillarsSection = {
  eyebrow: "Why timedart",
  heading: "Everything you track, ready to bill.",
  lede: "Five things it does deliberately well — and nothing it doesn't need to.",
};

export type ShowcaseItem = {
  label: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  full?: boolean;
};

export const showcaseSection = {
  eyebrow: "A look inside",
  heading: "Native app polish, screen to screen.",
  lede: "A considered Material 3 theme in timedart green, Mona Sans throughout, one design-token source keeping it consistent.",
};

export const showcase: ShowcaseItem[] = [
  {
    label: "timedart — invoice preview",
    src: "https://raw.githubusercontent.com/craftox-labs/timedart/main/docs/media/invoice.png",
    alt: "Branded, region-aware invoice preview generated from tracked hours",
    title: "Invoices in seconds",
    description:
      "Hours roll straight into a branded, region-aware PDF — tax labels and bank fields adapt to your country.",
    full: true,
  },
  // Temporarily removed — re-add to restore the half-width "guided first run" tile.
  // {
  //   label: "onboarding",
  //   src: "https://raw.githubusercontent.com/craftox-labs/timedart/main/docs/media/onboarding.png",
  //   alt: "Guided first-run onboarding setting up invoice identity",
  //   title: "A guided first run",
  //   description:
  //     "Learn the flow and set up your invoice identity — name, logo, region, currency — in a skippable wizard.",
  // },
  {
    label: "branding",
    src: "https://raw.githubusercontent.com/craftox-labs/timedart/main/docs/media/branding.png",
    alt: "Invoice branding editor with reusable templates and profiles",
    title: "Make it yours",
    description:
      "Reusable templates and profiles for how invoices look and read — colours, logo, font, payment details.",
    full: true,
  },
];

export type KeyRow = {
  keys: { label: string; accent?: boolean }[];
  action: string;
};

export const keyboardSection = {
  eyebrow: "Fly it from the keyboard",
  heading: "A timer one keypress<br>away from anywhere.",
  lede: "Navigation is identical across the side panel and the tracker, so the same keys work wherever your cursor is. The running session survives while you edit a client, add a project, or preview an invoice.",
  ctaPrimary: { label: "Try it in the demo", href: links.demo },
  ctaSecondary: { label: "Full shortcut map", href: links.githubKeyboard },
};

export const keyRows: KeyRow[] = [
  {
    keys: [{ label: "Space", accent: true }],
    action: "Start / pause / resume the timer — from any pane",
  },
  {
    keys: [{ label: "j" }, { label: "k" }, { label: "↓" }, { label: "↑" }],
    action: "Move the cursor",
  },
  {
    keys: [{ label: "h" }, { label: "l" }],
    action: "Collapse / expand · parent & child",
  },
  {
    keys: [{ label: "f" }, { label: "i" }],
    action: "Finish session · focus the description",
  },
  {
    keys: [{ label: "a" }, { label: "e" }],
    action: "Add new · edit the focused item",
  },
  { keys: [{ label: "/" }], action: "Search" },
  {
    keys: [{ label: "Ctrl" }, { label: "S" }, { label: "Esc" }],
    action: "Save · cancel in any editor",
  },
  {
    keys: [{ label: "?", accent: true }],
    action: "Show the full shortcut overlay",
  },
];

export const narrative = {
  eyebrow: "Built for people who bill by the hour",
  quotePre:
    "Freelancers, contractors & consultants need to know what they worked on, what it's worth, and ",
  quoteEm: "get paid",
  quotePost: " - without handing their client list to someone else's server.",
  body: "Set a default rate on a client, override it per project or per task, and every entry bills at the right rate automatically. timedart is terse where the work is terse, and stays out of the way the rest of the time.",
};

export type HoodCell = {
  label: string;
  title: string;
  description: string;
};

export const underTheHoodSection = {
  eyebrow: "Under the hood",
  heading: "Boring where it counts.",
  lede: "One Flutter codebase, a real relational database, and no telemetry. The parts you'd want to audit are the parts we made simple.",
};

export const underTheHood: HoodCell[] = [
  {
    label: "RUNTIME",
    title: "Flutter",
    description:
      "One codebase — native desktop that adapts down to a phone. No Electron.",
  },
  {
    label: "STORAGE",
    title: "drift · SQLite",
    description:
      "Foreign keys enforced, so deletes can never orphan your billable history.",
  },
  {
    label: "PRIVACY",
    title: "Local-first",
    description:
      "Data lives in your platform app-support dir. Nothing is uploaded, ever.",
  },
  {
    label: "LICENSE",
    title: "MIT · open source",
    description: "Free forever, auditable, forkable. © 2026 Craftox.",
  },
];

export type FooterLink = { label: string; href: string | null; soon?: boolean };
export type FooterGroup = { heading: string; links: FooterLink[] };

export const footer = {
  brandDescription:
    "Fast, local-first time tracking & invoicing for people who bill by the hour. A product by Craftox.",
  bottomLeft: "© 2026 Craftox — small, focused software tools.",
  bottomRight: "MIT licensed · built with Flutter & drift",
  groups: [
    {
      heading: "Product",
      links: [
        { label: "Live demo", href: links.demo },
        { label: "Features", href: "#features" },
        { label: "Keyboard", href: "#keyboard" },
        { label: "Desktop download", href: links.desktopDownload, soon: true },
      ],
    },
    {
      heading: "Project",
      links: [
        { label: "GitHub", href: links.github },
        { label: "README", href: links.githubReadme },
        { label: "MIT License", href: links.githubLicense },
        { label: "Issues", href: links.githubIssues },
      ],
    },
    {
      heading: "Craftox",
      links: [
        { label: "craftox-labs.github.io", href: links.craftox },
        { label: "All projects", href: links.githubAllProjects },
      ],
    },
  ] as FooterGroup[],
};
