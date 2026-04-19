"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  Menu,
  Mic,
  Newspaper,
  PanelLeft,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Speaking", href: "#speaking" },
  { label: "Teaching", href: "#teaching" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    role: "AI - Senior Data Engineer",
    org: "Arizona State University",
    period: "Present",
    bullets: [
      "Build SQL, cloud, and analytics solutions for AI monitoring and reporting.",
      "Partner with leadership on AI governance, dashboards, and stakeholder communication.",
      "Support LLM-powered educational tools and data pipelines for reporting and evaluation.",
    ],
  },
  {
    role: "Course Manager, Computer Science",
    org: "Arizona State University",
    period: "Recent",
    bullets: [
      "Managed the lifecycle of courses for 1,000+ learners.",
      "Led End of Session Meetings and the Strategic Evaluation and Innovation Cycle.",
      "Coordinated with faculty, graders, TAs, and instructional designers.",
    ],
  },
  {
    role: "Faculty Member / Data Analytics Instructor",
    org: "Mesa Community College",
    period: "Recent",
    bullets: [
      "Teach Python, machine learning, data visualization, and LMS workflows.",
      "Create hands-on lessons that connect analytics with real-world decisions.",
      "Support students through inclusive, accessible, and structured learning.",
    ],
  },
];

const projects = [
  {
    title: "AI Dashboard for Class Performance Tracking",
    description:
      "Sample gradebook data used with ChatGPT and Power BI to identify trends, surface at-risk students, and auto-generate summaries.",
    tag: "Teaching + Analytics",
  },
  {
    title: "Model Comparison Dashboard",
    description:
      "Executive and staff-facing dashboard to compare LLMs across BBQ, BOOLQ, and MARBLE with drill-down metrics.",
    tag: "AI Governance",
  },
  {
    title: "Agentic AI for Curriculum Design",
    description:
      "A beginner-friendly concept for using AI agents to support curriculum planning and instructional design workflows.",
    tag: "Future Build",
  },
];

const highlights = [
  "AI summit speaker on smarter dashboards and data literacy",
  "Featured educator recognition and conference presentations",
  "Experience across Python, SQL, Tableau, Power BI, Canvas, and machine learning",
  "Strong focus on inclusive teaching and accessible learning design",
];

const stats = [
  { value: "7+", label: "AI Data and Teaching" },
  { value: "10000+", label: "Learners supported" },
  { value: "20+", label: "Tools and platforms used" },
  { value: "3", label: "Core focus areas" },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      {text ? <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{text}</p> : null}
    </div>
  );
}

export default function KaushikiPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,250,252,1),_rgba(241,245,249,1))] text-slate-900">
      <div className="mx-auto flex max-w-7xl gap-0 lg:gap-8">
        <aside className="sticky top-0 hidden h-screen w-80 shrink-0 border-r border-slate-200/70 bg-white/70 p-8 backdrop-blur xl:block">
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/15">
                  <PanelLeft className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Academic Portfolio</p>
                  <p className="text-lg font-semibold tracking-tight">Kaushiki Kansara</p>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Focus</p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  AI, data engineering, analytics dashboards, curriculum design, and teaching innovation.
                </p>
              </div>

              <nav className="mt-8 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-40" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/15">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Contact</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                kkansar1@asu.edu
                <br />
                602-497-8539
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </div>
        </aside>

        <main className="min-h-screen flex-1 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
          <div className="mx-auto max-w-5xl">
            <header className="sticky top-4 z-30 mb-6 rounded-3xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur xl:hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Portfolio</p>
                  <p className="font-semibold text-slate-950">Kaushiki Kansara</p>
                </div>
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>

              {menuOpen ? (
                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-200 pt-3">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </header>

            <motion.section
              id="home"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-7 sm:p-10 lg:p-12">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    <Sparkles className="h-4 w-4" />
                    Teaching • AI • Data
                  </div>

                  <div className="mt-6 flex items-center gap-6">
  <img
    src="/profile.jpg"
    alt="Kaushiki Kansara"
    className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
  />
  <div>
    <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
      Kaushiki Kansara
    </h1>
    <p className="mt-2 text-lg text-slate-600">
      AI & Data Engineer • Faculty • Arizona State University
    </p>
  </div>
</div>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                    Technology educator and data professional building smarter learning experiences, clearer dashboards,
                    and practical AI tools for classrooms and organizations.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
                    >
                      <BookOpen className="h-4 w-4" />
                      View projects
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                    >
                      <Mail className="h-4 w-4" />
                      Contact
                    </a>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-2xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
                        <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex items-end bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 p-7 text-white sm:p-10 lg:p-12">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
                    <div className="absolute bottom-8 right-6 h-52 w-52 rounded-full bg-sky-300 blur-3xl" />
                  </div>

                  <div className="relative w-full">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                      <Mic className="h-4 w-4" />
                      Speaker and educator
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
                      <div className="aspect-[4/5] rounded-[1.4rem] border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] p-6">
                        <div className="flex h-full flex-col justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-200">Featured themes</p>
                            <p className="mt-2 text-2xl font-semibold tracking-tight">
                              Data literacy, model evaluation, and practical AI.
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                            <div className="rounded-2xl bg-white/10 p-3">Python & SQL</div>
                            <div className="rounded-2xl bg-white/10 p-3">Tableau & Power BI</div>
                            <div className="rounded-2xl bg-white/10 p-3">Canvas & LMS design</div>
                            <div className="rounded-2xl bg-white/10 p-3">ML & AI dashboards</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <section id="experience" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <SectionTitle
                eyebrow="Experience"
                title="Teaching, leadership, and analytics"
                text="This section mirrors the clean, academic profile style of the reference site, but it is tailored to your teaching, data, and AI work."
              />

              <div className="space-y-4">
                {experiences.map((item) => (
                  <article key={item.role} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">{item.role}</h3>
                        <p className="text-sm text-slate-600">{item.org}</p>
                      </div>
                      <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {item.period}
                      </span>
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="projects" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <SectionTitle
                eyebrow="Projects"
                title="Featured work"
                text="A concise project gallery that highlights the kind of work already on your current site, but presented in a more polished and consistent layout."
              />

              <div className="grid gap-4 md:grid-cols-3">
                {projects.map((project) => (
                  <article key={project.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {project.tag}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="speaking" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <SectionTitle
                eyebrow="Speaking"
                title="Conference talks and recognition"
                text="This area brings forward the public-facing parts of your current site so visitors immediately see your influence and expertise."
              />
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
  <img src="/r1.jpg" className="rounded-xl w-full h-40 object-cover" />
  <img src="/r2.jpg" className="rounded-xl w-full h-40 object-cover" />
  <img src="/r3.jpg" className="rounded-xl w-full h-40 object-cover" />
  <img src="/r4.jpg" className="rounded-xl w-full h-40 object-cover" />
  <img src="/r5.jpg" className="rounded-xl w-full h-40 object-cover" />
  <img src="/r6.jpg" className="rounded-xl w-full h-40 object-cover" />
  <img src="/r7.jpg" className="rounded-xl w-full h-40 object-cover" />
  <img src="/r8.jpg" className="rounded-xl w-full h-40 object-cover" />
</div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white p-3 shadow-sm">
                      <Newspaper className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950">Featured presentations</h3>
                      <p className="text-sm text-slate-600">AI dashboards, dashboard design, and data storytelling</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    <li>Speaker at a Data Conference on AI dashboards and model evaluation</li>
                    <li>Presented on dashboard design at ASU Data Conference</li>
                    <li>Served as a panelist for student career success and alumni networking</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white p-3 shadow-sm">
                      <Trophy className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950">Recognition</h3>
                      <p className="text-sm text-slate-600">Awards, features, and professional milestones</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    <li>Featured among top faculty in a global magazine edition</li>
                    <li>Recognized for innovative teaching and educational leadership</li>
                    <li>Active in cross-cultural teaching and inclusive learning practices</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="teaching" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
  <SectionTitle
    eyebrow="Teaching"
    title="Teaching Philosophy and Experience"
    text=""
  />

  <img
  src="/teaching.jpg"
  alt="Classroom teaching"
  className="w-full h-auto max-h-[400px] object-contain rounded-2xl mb-5"
/>
  <div className="mt-6 grid gap-4 sm:grid-cols-2">
  <video controls className="w-full rounded-2xl shadow-md">
    <source src="/teaching1.mp4" type="video/mp4" />
  </video>

  <video controls className="w-full rounded-2xl shadow-md">
    <source src="/teaching2.mp4" type="video/mp4" />
  </video>
</div>

<h3 className="mt-8 text-3xl sm:text-4xl font-bold text-slate-950 text-center">
  I ♥ Teaching
</h3>

 <p className="mt-3 text-sm leading-6 text-slate-700">
  It’s more than a profession for me , it’s something I feel deeply connected to. Throughout my journey as a student, I was fortunate to learn from inspiring educators who shaped the way I think, learn, and approach problems. That experience naturally led me toward becoming an educator myself, where I strive to create the same meaningful and engaging learning environments for my students.
</p>

<p className="mt-4 text-sm leading-6 text-slate-700">
  To me, teaching is rooted in empathy and kindness. I’ve had students ask to continue learning with me in their next level of courses simply because they felt a genuine connection. I’ve also had moments where students I had never met in person excitedly shared their toys with me over a Zoom call, small moments that remind me how human and personal learning truly is.
</p>

<p className="mt-4 text-sm leading-6 text-slate-700">
  I believe every learner is unique, with their own pace, style, and way of understanding the world. What makes a great educator is the ability to recognize that individuality and find the right balance , simplifying complexity while keeping curiosity alive.
</p>

<p className="mt-4 text-sm leading-6 text-slate-700">
  Over the past 7 years, I have been actively involved in teaching K–12 students across diverse global contexts, including Germany, France, the UK, Japan, India, the United States, and Canada. Working with students from different cultures and learning backgrounds has strengthened my ability to adapt, connect, and make learning inclusive and impactful.
</p>

  <h3 className="mt-6 text-xl font-bold text-slate-950">Courses I Have Taught</h3>
  <ul className="mt-3 space-y-2 text-base font-medium text-slate-800">
    <li>Python</li>
    <li>Database Management Systems</li>
    <li>Data Visualization</li>
    <li>Java</li>
    <li>Introduction to AI </li>
    <li>Data Cleaning and Enrichment</li>
  </ul>
</section>

<h3 className="mt-8 text-xl font-bold text-slate-950">
  Teaching Experience
</h3>

<div className="mt-4 space-y-6 text-sm leading-6 text-slate-700">

  <div>
    <p className="font-semibold">August 2024 - May 2025</p>
    <p className="font-medium">Adjunct Professor, Computer Information Systems | Mesa Community College</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>Designed and delivered project-based assessments in Database Management, Systems Analysis, and Network Security.</li>
      <li>Used SIS, LMS, and Tableau to track and visualize student performance.</li>
      <li>Applied analytics to improve engagement and course outcomes.</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold">May 2024 - March 2025</p>
    <p className="font-medium">Manager, Computer Science | Arizona State University</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>Led ETL pipeline development for 2000+ students.</li>
      <li>Improved course performance metrics (CLPR up to 65%).</li>
      <li>Supported API integrations and reporting systems.</li>
      <li>Improved grader workflows by 30%.</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold">Aug 2022 - May 2024</p>
    <p className="font-medium">Teaching Assistant / Grader | Arizona State University</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>Graded across Data Analysis, JavaScript, BI, Excel, and Visualization.</li>
      <li>Contributed to course design in IT Security and Infrastructure.</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold">May 2023 - Aug 2023</p>
    <p className="font-medium">Computer Science Instructor | Girls Who Code</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>Taught Python, JavaScript, and web development.</li>
      <li>Led workshops with industry partners (Raytheon, Yum!).</li>
      <li>Managed team of 5 teaching assistants.</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold">Feb 2022 - Aug 2022</p>
    <p className="font-medium">International Instructor | Outschool</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>Taught AI, ML, Python, Web Dev to global students (8–24).</li>
      <li>Aligned curriculum with CSTA and UK standards.</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold">Dec 2021 - Aug 2022</p>
    <p className="font-medium">Math Tutor | Strive Math</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>Taught Calculus, Algebra, Geometry using Python.</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold">April 2021 - Aug 2022</p>
    <p className="font-medium">Data Science Instructor | JetLearn</p>
    <ul className="list-disc pl-5 mt-2 space-y-1">
      <li>Taught Python and data science to European students.</li>
      <li>Designed personalized learning materials.</li>
    </ul>
  </div>

</div>
            

            <section id="publications" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
  <SectionTitle
    eyebrow="Publications"
    title="Publications and Research"
    text=""
  />
  <p className="text-sm leading-6 text-slate-700">
    Ongoing research with Carnegie Mellon University (HCI) focusing on AI in Education.
  </p>
</section>

            <section id="contact" className="mt-8 mb-10 rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-xl shadow-slate-950/10 sm:p-10">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">Contact</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Ready for collaborations, speaking, or a new role.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                    I am always open to academic collaborations, teaching opportunities, and initiatives that advance learning through technology and innovation.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-300">Email</p>
                  <p className="mt-1 text-lg font-semibold">kkansar1@asu.edu</p>
                  <p className="mt-4 text-sm text-slate-300">Phone</p>
                  <p className="mt-1 text-lg font-semibold">602-497-8539</p>
                  <a
                    href="mailto:kkansar1@asu.edu"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
                  >
                    <Mail className="h-4 w-4" />
                    Email Kaushiki
                  </a>
                </div>
              </div>
            </section>

            <footer className="pb-10 text-center text-xs text-slate-500">
              © {year} Kaushiki Kansara.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
