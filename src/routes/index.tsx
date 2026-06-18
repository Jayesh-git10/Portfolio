import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Globe } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jayesh Sharma — Developer Portfolio" },
      { name: "description", content: "Undergrad at IIIT Ranchi. Full-stack developer building AI tools, dashboards, and creative web apps." },
      { property: "og:title", content: "Jayesh Sharma — Developer Portfolio" },
      { property: "og:description", content: "Undergrad at IIIT Ranchi. Full-stack developer building AI tools, dashboards, and creative web apps." },
    ],
  }),
  component: Portfolio,
});

const GITHUB = "https://github.com/Jayesh-git10";
const LINKEDIN = "https://www.linkedin.com/in/jayesh-sharma-376629325/";
const EMAIL = "jayesh2005sharma@gmail.com";
const AVATAR = "https://avatars.githubusercontent.com/u/186183234?v=4";

type Project = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  live?: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    name: "README-Architect",
    description: "Visual README builder with live markdown preview, drag-and-drop sections, Mermaid diagrams and one-click export.",
    tech: ["TypeScript", "React", "Markdown"],
    url: "https://github.com/Jayesh-git10/README-Architect",
    highlight: true,
  },
  {
    name: "Sommaire-AI",
    description: "AI-powered PDF summariser that turns long documents into digestible briefs in seconds.",
    tech: ["TypeScript", "AI", "Next.js"],
    url: "https://github.com/Jayesh-git10/Sommaire-AI---PDF-SUMMARISER",
    highlight: true,
  },
  {
    name: "SentraFlow",
    description: "Automated feedback generator that collects, classifies and routes user feedback at scale.",
    tech: ["JavaScript", "Node"],
    url: "https://github.com/Jayesh-git10/SentraFlow",
  },
  {
    name: "Celestio 3.0",
    description: "A polished TypeScript web app — third iteration of the Celestio experiment.",
    tech: ["TypeScript", "React"],
    url: "https://github.com/Jayesh-git10/Celestio3.0",
  },
  {
    name: "Secure API Gateway",
    description: "Hardened API gateway with auth, rate-limiting and request validation baked in.",
    tech: ["JavaScript", "Node", "Security"],
    url: "https://github.com/Jayesh-git10/Secure-API-Gateway",
  },
  {
    name: "Blogify",
    description: "Full-stack blogging platform with authentication, posts and comments.",
    tech: ["JavaScript", "Express", "MongoDB"],
    url: "https://github.com/Jayesh-git10/Blogify-",
  },
  {
    name: "Face Recognition",
    description: "Python face detection & recognition pipeline using OpenCV.",
    tech: ["Python", "OpenCV"],
    url: "https://github.com/Jayesh-git10/face_recognition",
  },
  {
    name: "Live Stream Overlay",
    description: "Python toolkit to render dynamic overlays onto live video streams.",
    tech: ["Python"],
    url: "https://github.com/Jayesh-git10/Live-stream-overlay",
  },
];

const stack = [
  "TypeScript", "React", "Next.js", "Node.js", "Express",
  "Python", "MongoDB", "PostgreSQL", "Tailwind", "OpenCV", "Git", "Linux",
];

function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="pointer-events-none absolute inset-0 noise opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <Nav />
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

function Nav() {
  return (
    <header className="flex items-center justify-between py-6 font-mono text-sm">
      <a href="#top" className="flex items-center gap-2">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--neon)]" />
        <span className="font-semibold tracking-tight">jayesh.sh</span>
      </a>
      <nav className="hidden gap-8 text-muted-foreground md:flex">
        <a href="#work" className="hover:text-foreground transition-colors">/ work</a>
        <a href="#about" className="hover:text-foreground transition-colors">/ about</a>
        <a href="#stack" className="hover:text-foreground transition-colors">/ stack</a>
        <a href="#contact" className="hover:text-foreground transition-colors">/ contact</a>
      </nav>
      <a
        href={`mailto:${EMAIL}`}
        className="rounded-md border border-border bg-card px-3 py-1.5 text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        say hi →
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid items-center gap-12 pt-16 pb-24 md:grid-cols-[1.4fr_1fr] md:pt-24">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          available for internships & freelance
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-7xl md:text-[5.5rem]">
          Jayesh
          <br />
          <span className="text-primary">Sharma</span>
          <span className="blink text-primary">_</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Undergrad at <span className="text-foreground">IIIT Ranchi</span>. I build full-stack web apps,
          AI tools and the occasional weird experiment. Currently obsessed with shipping fast
          and writing code that doesn't rot.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-sm">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow"
          >
            view work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={GITHUB}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github size={16} />
            github
          </a>
          <a
            href={LINKEDIN}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin size={16} />
            linkedin
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/20 blur-3xl" />
        <div className="overflow-hidden rounded-2xl border border-border bg-card glow">
          <div className="flex items-center justify-between border-b border-border bg-background/40 px-4 py-2 font-mono text-xs text-muted-foreground">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
            </div>
            <span>~/whoami.ts</span>
          </div>
          <img src={AVATAR} alt="Jayesh Sharma" className="aspect-square w-full object-cover" loading="eager" />
          <div className="space-y-1.5 px-4 py-4 font-mono text-xs">
            <p><span className="text-muted-foreground">name </span><span className="text-primary">"Jayesh Sharma"</span></p>
            <p><span className="text-muted-foreground">role </span><span className="text-[oklch(0.85_0.17_200)]">"Full-Stack Dev"</span></p>
            <p><span className="text-muted-foreground">edu  </span><span className="text-accent">"IIIT Ranchi"</span></p>
            <p><span className="text-muted-foreground">loc  </span><span className="text-foreground">"Ajmer, IN"</span></p>
            <p className="pt-1 text-muted-foreground">// while(alive) {`{ code(); improve(); }`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["TYPESCRIPT", "REACT", "NODE", "PYTHON", "AI / LLM", "FULL-STACK", "OPEN SOURCE", "DESIGN-ENG"];
  const line = [...words, ...words];
  return (
    <div className="relative -mx-6 my-12 overflow-hidden border-y border-border bg-card/30 py-5 sm:-mx-10">
      <div className="marquee flex w-max gap-12 font-mono text-2xl font-semibold whitespace-nowrap">
        {line.map((w, i) => (
          <span key={i} className="flex items-center gap-12 text-foreground/80">
            {w}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="grid gap-12 py-24 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ about</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Builder, breaker, occasional debugger.
        </h2>
      </div>
      <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          I'm an undergrad at the <span className="text-foreground">Indian Institute of Information Technology, Ranchi</span>.
          My playground is the web — I love spinning up products end-to-end, from the database
          schema to the last pixel of the landing page.
        </p>
        <p>
          Currently building <a className="text-primary hover:underline" href="https://github.com/Jayesh-git10/SentraFlow" target="_blank" rel="noreferrer">SentraFlow</a>,
          an AI feedback generator. I've also shipped AI-augmented tools like
          <a className="text-primary hover:underline" href="https://github.com/Jayesh-git10/Sommaire-AI---PDF-SUMMARISER" target="_blank" rel="noreferrer"> PDF summarisers</a>,
          and DX tools like <a className="text-primary hover:underline" href="https://github.com/Jayesh-git10/README-Architect" target="_blank" rel="noreferrer">README-Architect</a>.
          When I'm not coding, I'm probably refactoring something that already worked.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-24">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ selected work</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Things I've shipped.
          </h2>
        </div>
        <a href={GITHUB} target="_blank" rel="noreferrer"
           className="hidden font-mono text-sm text-muted-foreground hover:text-primary sm:inline-flex">
          all repos ↗
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className={`group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary ${
              p.highlight ? "lg:col-span-1" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="font-mono text-xs text-muted-foreground">_project</div>
              {p.highlight && (
                <span className="rounded-full bg-primary px-2 py-0.5 font-mono text-[10px] font-semibold text-primary-foreground">
                  ★ featured
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight">
              {p.name}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank" rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background/50 px-3 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Globe size={13} />
                  Live Demo
                </a>
              )}
              <a
                href={p.url}
                target="_blank" rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background/50 px-3 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Github size={13} />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ stack</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Tools I reach for.</h2>
      <div className="mt-10 flex flex-wrap gap-3">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="my-16 rounded-3xl border border-border bg-card/60 p-10 backdrop-blur sm:p-16 glow">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ contact</p>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
        Got an idea worth building?
        <br />
        <span className="text-primary">Let's talk.</span>
      </h2>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Open to internships, freelance projects and collaborations. I usually reply within a day.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${EMAIL}`}
          className="group flex items-center justify-between rounded-xl border border-border bg-background/50 p-5 transition-colors hover:border-primary"
        >
          <div>
            <div className="font-mono text-xs text-muted-foreground">email</div>
            <div className="mt-1 font-mono text-sm text-foreground sm:text-base break-all">{EMAIL}</div>
          </div>
          <span className="font-mono text-primary transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href={GITHUB}
          target="_blank" rel="noreferrer"
          className="group flex items-center justify-between rounded-xl border border-border bg-background/50 p-5 transition-colors hover:border-primary"
        >
          <div>
            <div className="font-mono text-xs text-muted-foreground">github</div>
            <div className="mt-1 font-mono text-sm text-foreground sm:text-base">@Jayesh-git10</div>
          </div>
          <span className="font-mono text-primary transition-transform group-hover:translate-x-1">↗</span>
        </a>
        <a
          href={LINKEDIN}
          target="_blank" rel="noreferrer"
          className="group flex items-center justify-between rounded-xl border border-border bg-background/50 p-5 transition-colors hover:border-primary"
        >
          <div>
            <div className="font-mono text-xs text-muted-foreground">linkedin</div>
            <div className="mt-1 font-mono text-sm text-foreground sm:text-base">in/jayesh-sharma-376629325</div>
          </div>
          <span className="font-mono text-primary transition-transform group-hover:translate-x-1">↗</span>
        </a>
        <div className="flex items-center justify-between rounded-xl border border-border bg-background/50 p-5">
          <div>
            <div className="font-mono text-xs text-muted-foreground">based in</div>
            <div className="mt-1 font-mono text-sm text-foreground sm:text-base">Ajmer, Rajasthan — IN</div>
          </div>
          <span className="font-mono text-primary">●</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-3 border-t border-border py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} Jayesh Sharma. Crafted with too much chai.</p>
      <p>// while(alive) {`{ code(); improve(); }`}</p>
    </footer>
  );
}