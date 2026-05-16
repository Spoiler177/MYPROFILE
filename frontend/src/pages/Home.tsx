import { motion } from "framer-motion";

import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import TimelineItem from "../components/TimelineItem";

const stats = [
  { value: "25+", label: "AI models" },
  { value: "18", label: "Premium deliverables" },
  { value: "8", label: "Industry certifications" },
  { value: "4", label: "Years of growth" },
];

const skills = [
  { title: "Frontend Development", description: "React, TypeScript, Tailwind CSS, responsive interfaces, polished animations.", level: "Advanced" },
  { title: "Backend Development", description: "Node.js, Express, API design, database modelling, scalable services.", level: "Proficient" },
  { title: "Artificial Intelligence", description: "ML pipelines, model evaluation, NLP, and AI system design for real products.", level: "Advanced" },
  { title: "Machine Learning", description: "Supervised learning, neural networks, data pipelines, and prototype optimization.", level: "Proficient" },
  { title: "UI/UX Design", description: "Minimal, high-contrast interfaces with strong hierarchy and seamless flow.", level: "Advanced" },
  { title: "Cloud & Deployment", description: "Docker-ready apps, CI/CD-ready architecture, and cloud-first deployment mindset.", level: "Proficient" },
];

const projects = [
  {
    title: "NeuroPortfolio",
    description: "A futuristic portfolio platform for AI founders, complete with motion-led storytelling and premium polish.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    demo: "#projects",
  },
  {
    title: "SmartFarm AI",
    description: "A scalable analytics tool for agricultural operations using data-driven recommendations.",
    tags: ["Node.js", "Python", "PostgreSQL"],
    github: "https://github.com",
    demo: "#projects",
  },
  {
    title: "Insight Engine",
    description: "A predictive intelligence dashboard built for fast decision-making and clean data workflows.",
    tags: ["Next.js", "TensorFlow", "REST APIs"],
    github: "https://github.com",
    demo: "#projects",
  },
];

const achievements = [
  { title: "AI Hackathon Winner", subtitle: "Competitive AI sprint", description: "Awarded top innovation for a machine learning product prototype." },
  { title: "Certification", subtitle: "Cloud & AI", description: "Completed professional certifications in cloud architecture and machine learning." },
  { title: "Research Spotlight", subtitle: "AI systems", description: "Featured for innovative work on applied AI for real-world workflows." },
  { title: "Startup Mentor", subtitle: "Product strategy", description: "Advised early-stage founders on product and technical roadmaps." },
];

const timeline = [
  { date: "2024", title: "AI Research Intern", subtitle: "Applied AI Lab", description: "Built model prototypes and scaled experiment pipelines for internal research." },
  { date: "2023", title: "Software Engineering Internship", subtitle: "Startup Studio", description: "Delivered polished web applications and production-ready backend features." },
  { date: "2022", title: "Freelance Product Builds", subtitle: "Independent Contractor", description: "Designed and shipped digital products for founders and mission-driven teams." },
  { date: "2021", title: "Early Tech Community", subtitle: "Student Initiative", description: "Led workshops and built community projects to share machine learning fundamentals." },
];

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@example.com" },
];

export default function Home() {
  return (
    <div id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_48%)] blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-2 text-sm font-medium text-sky-300/90">
              SOFTWARE ENGINEER & AI DEVELOPER
            </span>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Victor Kamau
              </h1>
              <p className="max-w-3xl text-xl leading-9 text-slate-300 sm:text-2xl">
                Crafting futuristic digital products at the intersection of software engineering and artificial intelligence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="interactive inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                View Projects
              </a>
              <a href="#contact" className="interactive inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/80 hover:text-sky-300">
                Contact Me
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.18)]">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative mx-auto w-full max-w-4xl">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-violet-500/15 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/95 p-10 shadow-[0_40px_160px_rgba(15,23,42,0.42)]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-950/90 p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_35%)]" />
                <div className="absolute -top-10 right-10 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />
                <div className="absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="relative flex min-h-[34rem] flex-col items-center justify-center rounded-[1.75rem] border border-slate-700/70 bg-slate-900/90 p-12 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-slate-800/70 shadow-[0_0_0_22px_rgba(56,189,248,0.1)]">
                    <img src="/victor.png" alt="Victor Kamau portrait" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/0" />
                    <div className="absolute inset-0 rounded-full border border-white/10 opacity-80" />
                    <div className="absolute inset-1 rounded-full border border-sky-400/20 blur-sm" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: -12, x: -12 }}
                    animate={{ opacity: 1, y: [0, -8, 0], x: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-4 top-14 flex h-14 w-14 items-center justify-center rounded-full border border-sky-400/25 bg-slate-900/70 text-[10px] uppercase tracking-[0.28em] text-sky-100/90 shadow-[0_0_0_14px_rgba(56,189,248,0.08)]"
                  >
                    AI
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: 10 }}
                    animate={{ opacity: 1, y: [0, 8, 0], x: [0, 6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="absolute right-4 bottom-16 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-slate-900/75 text-[10px] text-slate-200 shadow-[0_0_0_14px_rgba(168,85,247,0.07)]"
                  >
                    ML
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -8, x: 8 }}
                    animate={{ opacity: 1, y: [0, -6, 0], x: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                    className="absolute -left-10 bottom-14 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/15 bg-slate-900/70 text-[10px] text-slate-200 shadow-[0_0_0_12px_rgba(56,189,248,0.07)]"
                  >
                    API
                  </motion.div>

                  <p className="mt-6 max-w-sm text-sm text-slate-400">
                    AI-inspired portrait with soft cinematic lighting and halo glow.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-5 text-left">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-400/90">Focus</p>
                  <p className="mt-3 text-lg font-semibold text-white">AI-first software products</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-5 text-left">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-400/90">Design</p>
                  <p className="mt-3 text-lg font-semibold text-white">Minimal systems with strong visual hierarchy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <section id="about" className="scroll-mt-32 pt-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="About"
              title="Building intelligent products with precision and clarity."
              description="I combine software engineering fundamentals with applied artificial intelligence to design products that feel both human and futuristic. My focus is on clean systems, efficient workflows, and technical storytelling that attracts product teams and investors."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <ScrollReveal>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_90px_rgba(15,23,42,0.28)]">
                <p className="text-slate-300 leading-8">
                  I am passionate about constructing high-performance experiences across web, cloud, and AI systems. Every line of code is written with clarity, maintainability, and product impact in mind. I love turning complex ideas into elegant, real-world solutions that scale.
                </p>
                <div className="mt-8 space-y-4">
                  <p className="text-slate-400">- I build intelligent interfaces and data-driven backends.</p>
                  <p className="text-slate-400">- I architect AI-ready pipelines with production performance as a priority.</p>
                  <p className="text-slate-400">- I design with subtlety, strong structure, and future-ready polish.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Mission</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Deliver world-class software for AI-first initiatives.</h3>
                <p className="mt-5 text-slate-400 leading-7">
                  I aim to empower teams with polished digital products that scale from prototypes to production while preserving speed, reliability, and a high-end user experience.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="skills" className="scroll-mt-32 pt-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Skills"
              title="Core capabilities across software and AI." 
              description="Modern skill sets for product engineering, AI development, and user-centered technical execution."
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <ScrollReveal key={skill.title}>
                <SkillCard title={skill.title} description={skill.description} level={skill.level} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-32 pt-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Projects"
              title="Featured work with a premium product focus."
              description="Showcasing high-fidelity builds, polished interfaces, and intelligent systems designed for ambitious teams."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} title={project.title} description={project.description} tags={project.tags} github={project.github} demo={project.demo} />
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.28)]">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Blog</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Thought leadership coming soon.</h3>
              <p className="mt-4 text-slate-400 leading-7">
                A dedicated space for insights about AI product development, technical design, and scalable software architecture.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.28)]">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">Testimonials</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Feedback from collaborators.</h3>
              <p className="mt-4 text-slate-400 leading-7">
                "A reliable technical partner who creates polished, future-ready products with strong attention to detail."
              </p>
            </div>
          </div>
        </section>

        <section id="achievements" className="scroll-mt-32 pt-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Achievements"
              title="Recognized accomplishments in AI and product engineering."
              description="Awards, certifications, and leadership experience that underline a premium technical pathway." 
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {achievements.map((item) => (
              <ScrollReveal key={item.title}>
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-sky-400/30">
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">{item.subtitle}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-400 leading-7">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-32 pt-24">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Experience"
              title="Professional journey with product-focused velocity." 
              description="A timeline of roles, internships, freelance launches, and AI-focused growth." 
            />
          </ScrollReveal>

          <div className="relative mt-12 border-l border-slate-700/40 pl-8">
            {timeline.map((item) => (
              <ScrollReveal key={item.title}>
                <TimelineItem date={item.date} title={item.title} subtitle={item.subtitle} description={item.description} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-32 pt-24 pb-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build ambitious AI products together."
              description="Share your idea, request a collaboration, or ask for a CV. I'm available for student projects, internships, and freelance work."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <ScrollReveal>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_80px_rgba(15,23,42,0.18)]">
                <p className="text-slate-300 leading-7">
                    I am focused on delivering polished technical experiences, fast iteration, and clear communication. Let's turn your next product idea into something memorable.
                </p>
                <div className="mt-8 space-y-5">
                  {socials.map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-slate-200 transition hover:border-sky-400/40 hover:text-sky-300">
                      <span className="font-semibold">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <form className="space-y-5 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-[0_40px_80px_rgba(15,23,42,0.3)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm text-slate-400">Name</span>
                    <input type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-sky-400/70" />
                  </label>
                  <label className="block">
                    <span className="text-sm text-slate-400">Email</span>
                    <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-sky-400/70" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm text-slate-400">Message</span>
                  <textarea rows={5} placeholder="Tell me about your project" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-sky-400/70" />
                </label>
                <button type="submit" className="interactive inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                  Send Message
                </button>
                <a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/40" href="#">
                  Download CV
                </a>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
