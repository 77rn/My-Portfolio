import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Sun, Moon, Code2, Cloud, Sparkles, Award, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for scroll reveals
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const palette = dark
    ? {
        bg: "#111110",
        bgAlt: "#1A1A18",
        text: "#EDEAE3",
        textMute: "#9A968D",
        line: "#2A2925",
        accent: "#D97757",
        card: "#171714",
      }
    : {
        bg: "#FAF9F6",
        bgAlt: "#F2F0EA",
        text: "#1A1A1A",
        textMute: "#6B6862",
        line: "#E5E2D9",
        accent: "#B85C38",
        card: "#FFFFFF",
      };

  return (
    <div
      style={{
        background: palette.bg,
        color: palette.text,
        fontFamily: "'Geist', -apple-system, sans-serif",
        minHeight: "100vh",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        ::selection { background: ${palette.accent}; color: #fff; }

        [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }
        [data-reveal-delay="1"] { transition-delay: 0.08s; }
        [data-reveal-delay="2"] { transition-delay: 0.16s; }
        [data-reveal-delay="3"] { transition-delay: 0.24s; }
        [data-reveal-delay="4"] { transition-delay: 0.32s; }
        [data-reveal-delay="5"] { transition-delay: 0.40s; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 3rem;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        .grain::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: ${dark ? 0.04 : 0.035};
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .nav-link {
          position: relative;
          color: ${palette.textMute};
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.01em;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: ${palette.text}; }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          width: 0; height: 1px;
          background: ${palette.accent};
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover::after { width: 100%; }

        .project-card {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
        }
        .project-card:hover {
          transform: translateY(-4px);
          border-color: ${palette.accent} !important;
        }
        .project-card:hover .arrow-icon {
          transform: translate(4px, -4px);
          color: ${palette.accent};
        }

        .skill-pill {
          transition: all 0.3s ease;
        }
        .skill-pill:hover {
          background: ${palette.accent};
          color: #fff;
          border-color: ${palette.accent};
          transform: translateY(-2px);
        }

        .toggle-thumb {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;
        }

        .hero-line {
          background: linear-gradient(90deg, transparent, ${palette.line}, transparent);
        }

        .accent-dot {
          animation: pulse 2.4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .icon-btn {
          transition: all 0.3s ease;
        }
        .icon-btn:hover {
          color: ${palette.accent};
          transform: translateY(-2px);
        }

        h1, h2, h3, .display {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }

        @media (max-width: 720px) {
          .hero-headline { font-size: 3rem !important; line-height: 1.05 !important; }
          .section-title { font-size: 2.25rem !important; }
          .grid-2, .grid-3 { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .hero-meta { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
        }
      `}</style>

      <div className="grain" />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          padding: scrolled ? "1rem 2rem" : "1.75rem 2rem",
          background: scrolled ? `${palette.bg}E6` : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${palette.line}` : "1px solid transparent",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#top" style={{ textDecoration: "none", color: palette.text, display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="display" style={{ fontSize: "1.4rem", fontWeight: 500, fontStyle: "italic" }}>
            Rudra
          </span>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: palette.accent }} className="accent-dot" />
        </a>

        <div className="nav-links" style={{ display: "flex", gap: "2.25rem", alignItems: "center" }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
          style={{
            width: 52, height: 28,
            borderRadius: 999,
            background: palette.bgAlt,
            border: `1px solid ${palette.line}`,
            position: "relative",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span
            className="toggle-thumb"
            style={{
              position: "absolute",
              top: 3, left: 3,
              width: 20, height: 20,
              borderRadius: "50%",
              background: palette.accent,
              transform: dark ? "translateX(24px)" : "translateX(0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            {dark ? <Moon size={11} /> : <Sun size={11} />}
          </span>
        </button>
      </nav>

      {/* HERO */}
      <section
        id="top"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "10rem 2rem 6rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div data-reveal style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
          <span style={{ width: 24, height: 1, background: palette.accent }} />
          <span className="mono" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: palette.textMute, textTransform: "uppercase" }}>
            Available · Software Engineer
          </span>
        </div>

        <h1
          className="hero-headline"
          data-reveal
          data-reveal-delay="1"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 0.98,
            margin: "0 0 2rem",
            fontWeight: 400,
          }}
        >
          Building <em style={{ color: palette.accent, fontWeight: 400 }}>cloud-native</em> systems<br />
          with a craft for <em style={{ fontStyle: "italic", fontWeight: 400 }}>detail.</em>
        </h1>

        <p
          data-reveal
          data-reveal-delay="2"
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: palette.textMute,
            maxWidth: 580,
            margin: "0 0 3rem",
          }}
        >
          I'm Rudra Narayan Biswal, a software engineer specializing in Java, Spring Boot, and React. I build scalable microservices, cloud infrastructure, and AI-driven full-stack applications.
        </p>

        <div
          className="hero-meta"
          data-reveal
          data-reveal-delay="3"
          style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: palette.text,
              color: palette.bg,
              padding: "0.95rem 1.6rem",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            View selected work
            <ArrowUpRight size={16} />
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", color: palette.textMute }}>
            <a href="https://github.com/77rn" target="_blank" rel="noreferrer" className="icon-btn" style={{ color: "inherit" }}>
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/77rn" target="_blank" rel="noreferrer" className="icon-btn" style={{ color: "inherit" }}>
              <Linkedin size={18} />
            </a>
            <a href="mailto:rn65464@gmail.com" className="icon-btn" style={{ color: "inherit" }}>
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Hero stats */}
        <div
          data-reveal
          data-reveal-delay="4"
          style={{
            marginTop: "6rem",
            paddingTop: "2.5rem",
            borderTop: `1px solid ${palette.line}`,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
          className="grid-3"
        >
          {[
            { v: "9.31", l: "CGPA / 10" },
            { v: "500+", l: "Problems solved" },
            { v: "3", l: "Microservices shipped" },
            { v: "40K+", l: "Reliance scholar pool" },
          ].map((s, i) => (
            <div key={i}>
              <div className="display" style={{ fontSize: "2.25rem", fontWeight: 400, lineHeight: 1 }}>
                {s.v}
              </div>
              <div className="mono" style={{ fontSize: "0.7rem", color: palette.textMute, marginTop: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section
        style={{
          padding: "2rem 0",
          borderTop: `1px solid ${palette.line}`,
          borderBottom: `1px solid ${palette.line}`,
          background: palette.bgAlt,
          overflow: "hidden",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, ii) => (
            <div key={ii} style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
              {["Java", "Spring Boot", "React", "Kubernetes", "Docker", "AWS", "Kafka", "LangChain", "MongoDB", "Hibernate", "MySQL", "Python"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
                  <span className="display" style={{ fontSize: "2rem", fontStyle: "italic", color: palette.text, whiteSpace: "nowrap" }}>
                    {t}
                  </span>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: palette.accent, flexShrink: 0 }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" number="01" title="About" palette={palette}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div data-reveal>
            <p style={{ fontSize: "1.35rem", lineHeight: 1.55, margin: "0 0 1.5rem", fontFamily: "'Fraunces', serif", fontWeight: 300 }}>
              I write code that runs in production, not in tutorials.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: palette.textMute, margin: "0 0 1.25rem" }}>
              Currently a Computer Science student at Chitkara University with a 9.31 CGPA, I work at the intersection of distributed systems and applied AI. My focus is backend architecture, microservices, and integrating language models meaningfully into real applications.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: palette.textMute, margin: 0 }}>
              I recently interned at Cognizant, building Spring Boot services with Docker, CI/CD, and AI-assisted development workflows. I care about clean architecture, observable systems, and shipping things that don't break at 3am.
            </p>
          </div>

          <div data-reveal data-reveal-delay="2" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <InfoCard palette={palette} label="Education" value="Chitkara Institute of Engineering & Technology" sub="B.E Computer Science · 2022 – Present · CGPA 9.31" />
            <InfoCard palette={palette} label="Currently" value="Software Engineering Intern at Cognizant" sub="Java Full Stack · Cloud · AI-assisted development" />
            <InfoCard palette={palette} label="Based in" value="Chennai, India" sub="Open to remote and on-site opportunities" />
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="work" number="02" title="Experience" palette={palette}>
        <div data-reveal style={{ borderTop: `1px solid ${palette.line}` }}>
          <div
            style={{
              padding: "2.5rem 0",
              borderBottom: `1px solid ${palette.line}`,
              display: "grid",
              gridTemplateColumns: "180px 1fr auto",
              gap: "2rem",
              alignItems: "start",
            }}
            className="grid-2"
          >
            <div className="mono" style={{ fontSize: "0.8rem", color: palette.textMute, letterSpacing: "0.05em" }}>
              Jan 2026 — Apr 2026
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <h3 style={{ fontSize: "1.5rem", margin: 0, fontWeight: 500 }}>Software Engineering Intern</h3>
                <span className="mono" style={{ fontSize: "0.75rem", color: palette.accent, padding: "0.2rem 0.6rem", border: `1px solid ${palette.accent}`, borderRadius: 999 }}>
                  Cognizant
                </span>
              </div>
              <p style={{ color: palette.textMute, lineHeight: 1.7, margin: "0.5rem 0 1.25rem", fontSize: "0.95rem" }}>
                Industry training in Java Full Stack, cloud, and AI-assisted development. Built RESTful services using Spring Boot, Hibernate, and MySQL, following layered architecture and backend best practices in simulated production environments.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["Spring Boot", "Hibernate", "MySQL", "Docker", "Linux", "CI/CD", "Claude Code", "GitHub Copilot"].map((t, i) => (
                  <span key={i} className="mono" style={{
                    fontSize: "0.72rem",
                    padding: "0.3rem 0.7rem",
                    background: palette.bgAlt,
                    color: palette.textMute,
                    borderRadius: 4,
                    border: `1px solid ${palette.line}`,
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <ArrowUpRight size={18} style={{ color: palette.textMute, marginTop: "0.5rem" }} />
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" number="03" title="Selected projects" palette={palette}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <ProjectCard
            palette={palette}
            number="01"
            title="ExpenseTracker"
            tag="Microservices"
            description="A modular backend with three Spring Boot microservices — Auth, User, and Ledger — communicating via Kafka events. AuthService publishes authentication confirmations, UserService consumes them, LedgerService aggregates classified spends for analytics."
            stack={["Spring Boot", "Kafka", "JWT", "Hibernate", "Docker", "REST"]}
            href="https://github.com/77rn"
          />
          <ProjectCard
            palette={palette}
            number="02"
            title="Konayam"
            tag="AI Voice Agent"
            description="A voice chat AI automation platform using Retrieval-Augmented Generation. Built a context-aware assistant with LangChain.js, vector embeddings, and semantic search. Deployed on AWS for reliability and efficient real-time data handling."
            stack={["LangChain", "RAG", "Vector DB", "AWS", "React"]}
            href="https://github.com/77rn"
            featured
          />
          <ProjectCard
            palette={palette}
            number="03"
            title="Online Exam Portal"
            tag="Full Stack"
            description="A full-stack examination platform with timer-based tests, auto-submission, leaderboards, and certificate generation. Role-based access control for Admin, Teacher, and Student via JWT and Spring Security."
            stack={["Spring Boot", "React", "JWT", "MySQL", "Axios"]}
            href="https://github.com/77rn"
          />
          <ProjectCard
            palette={palette}
            number="04"
            title="More on GitHub"
            tag="Open Source"
            description="Explore additional projects, contributions, and experiments — including DSA solutions, system design notes, and weekend explorations into emerging frameworks."
            stack={["500+ DSA", "System Design", "Experiments"]}
            href="https://github.com/77rn"
            isMore
          />
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" number="04" title="Stack & expertise" palette={palette}>
        <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "3rem" }} className="grid-3">
          <SkillCluster palette={palette} icon={<Code2 size={18} />} title="Backend" items={["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices", "Kafka"]} />
          <SkillCluster palette={palette} icon={<Cloud size={18} />} title="Cloud & DevOps" items={["AWS (EC2, S3, Route53)", "Docker", "Kubernetes", "GitLab CI/CD", "Linux", "Git"]} />
          <SkillCluster palette={palette} icon={<Sparkles size={18} />} title="AI & Frontend" items={["LangChain", "RAG", "Vector DB", "Agentic AI", "React", "JavaScript", "Python"]} />
        </div>

        <div data-reveal data-reveal-delay="2" style={{ paddingTop: "2rem", borderTop: `1px solid ${palette.line}` }}>
          <div className="mono" style={{ fontSize: "0.72rem", color: palette.textMute, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Also working with
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {["C++", "SQL", "MongoDB", "MySQL", "Apache Kafka", "JWT", "Spring Security", "Axios", "OOP", "DBMS", "OS", "Networking", "System Design"].map((s, i) => (
              <span key={i} className="skill-pill mono" style={{
                fontSize: "0.78rem",
                padding: "0.5rem 0.95rem",
                border: `1px solid ${palette.line}`,
                borderRadius: 999,
                color: palette.text,
                cursor: "default",
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* HONORS */}
      <Section id="honors" number="05" title="Honors & certifications" palette={palette}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          <HonorCard
            palette={palette}
            icon={<Award size={20} />}
            title="Reliance Undergraduate Scholar"
            sub="Selected from 40,000+ candidates"
            description="Awarded for outstanding academic performance, technical aptitude, and leadership potential."
          />
          <HonorCard
            palette={palette}
            icon={<Code2 size={20} />}
            title="500+ Problems Solved"
            sub="LeetCode · GeeksforGeeks"
            description="Consistent practice in DSA, problem solving, and algorithmic thinking across competitive platforms."
          />
          <HonorCard
            palette={palette}
            icon={<Sparkles size={20} />}
            title="Java Fullstack Certification"
            sub="TalentNext · Wipro"
            description="Industry program covering enterprise Java, Spring ecosystem, and full-stack architecture."
          />
          <HonorCard
            palette={palette}
            icon={<Cloud size={20} />}
            title="Cloud Virtualization & APIs"
            sub="Coursera"
            description="Foundations in containerization, virtualization, and modern API design patterns."
          />
        </div>
      </Section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div data-reveal style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="mono" style={{ fontSize: "0.72rem", color: palette.textMute, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            06 — Get in touch
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05, margin: "0 0 2rem", fontWeight: 400 }}>
            Let's build<br />
            <em style={{ color: palette.accent, fontWeight: 400 }}>something good.</em>
          </h2>
          <p style={{ fontSize: "1.1rem", color: palette.textMute, lineHeight: 1.6, marginBottom: "3rem" }}>
            Open to full-time roles, collaborations, and meaningful conversations about distributed systems and AI.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a
              href="mailto:rn65464@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: palette.text,
                color: palette.bg,
                padding: "1rem 1.75rem",
                borderRadius: 999,
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Mail size={16} /> rn65464@gmail.com
            </a>
            <a
              href="tel:+919556148116"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "transparent",
                color: palette.text,
                padding: "1rem 1.75rem",
                borderRadius: 999,
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                border: `1px solid ${palette.line}`,
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = palette.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = palette.line)}
            >
              <Phone size={16} /> +91 95561 48116
            </a>
          </div>

          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", color: palette.textMute }}>
            <a href="https://github.com/77rn" target="_blank" rel="noreferrer" className="icon-btn" style={{ color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontSize: "0.875rem" }}>
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/77rn" target="_blank" rel="noreferrer" className="icon-btn" style={{ color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontSize: "0.875rem" }}>
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://leetcode.com/77rn__" target="_blank" rel="noreferrer" className="icon-btn" style={{ color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontSize: "0.875rem" }}>
              <ExternalLink size={16} /> LeetCode
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${palette.line}`, padding: "2rem", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div className="mono" style={{ fontSize: "0.72rem", color: palette.textMute, letterSpacing: "0.1em" }}>
          © 2026 Rudra Narayan Biswal
        </div>
      </footer>
    </div>
  );
}

/* ---------- Reusable bits ---------- */

function Section({ id, number, title, palette, children }) {
  return (
    <section
      id={id}
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "7rem 2rem 4rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", marginBottom: "3.5rem" }}>
        <span className="mono" style={{ fontSize: "0.78rem", color: palette.accent, letterSpacing: "0.15em" }}>
          [{number}]
        </span>
        <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: 0, fontWeight: 400, letterSpacing: "-0.02em" }}>
          {title}
        </h2>
        <div style={{ flex: 1, height: 1, background: palette.line, marginLeft: "1rem" }} />
      </div>
      {children}
    </section>
  );
}

function InfoCard({ palette, label, value, sub }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        background: palette.card,
        border: `1px solid ${palette.line}`,
        borderRadius: 12,
        transition: "border-color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = palette.accent)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = palette.line)}
    >
      <div className="mono" style={{ fontSize: "0.7rem", color: palette.textMute, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        {label}
      </div>
      <div style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.3rem" }}>
        {value}
      </div>
      <div style={{ fontSize: "0.85rem", color: palette.textMute }}>
        {sub}
      </div>
    </div>
  );
}

function ProjectCard({ palette, number, title, tag, description, stack, href, featured, isMore }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-reveal
      className="project-card"
      style={{
        display: "block",
        textDecoration: "none",
        color: palette.text,
        padding: "2rem",
        background: featured ? palette.bgAlt : palette.card,
        border: `1px solid ${palette.line}`,
        borderRadius: 16,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {featured && (
        <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <span className="mono" style={{ fontSize: "0.65rem", padding: "0.25rem 0.6rem", background: palette.accent, color: "#fff", borderRadius: 999, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Featured
          </span>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <span className="mono" style={{ fontSize: "0.72rem", color: palette.textMute, letterSpacing: "0.15em" }}>
          {number} / {tag}
        </span>
        <ArrowUpRight className="arrow-icon" size={20} style={{ color: palette.textMute, transition: "transform 0.3s, color 0.3s" }} />
      </div>

      <h3 style={{ fontSize: "1.75rem", margin: "0 0 1rem", fontWeight: 500, fontStyle: isMore ? "italic" : "normal" }}>
        {title}
      </h3>

      <p style={{ color: palette.textMute, lineHeight: 1.65, margin: "0 0 1.75rem", fontSize: "0.95rem" }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {stack.map((s, i) => (
          <span key={i} className="mono" style={{
            fontSize: "0.7rem",
            padding: "0.25rem 0.6rem",
            background: "transparent",
            color: palette.textMute,
            borderRadius: 4,
            border: `1px solid ${palette.line}`,
          }}>{s}</span>
        ))}
      </div>
    </a>
  );
}

function SkillCluster({ palette, icon, title, items }) {
  return (
    <div
      style={{
        padding: "1.75rem",
        background: palette.card,
        border: `1px solid ${palette.line}`,
        borderRadius: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem", color: palette.accent }}>
        {icon}
        <span className="mono" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          {title}
        </span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {items.map((it, i) => (
          <li key={i} style={{ fontSize: "0.95rem", color: palette.text, display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: palette.textMute }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HonorCard({ palette, icon, title, sub, description }) {
  return (
    <div
      data-reveal
      style={{
        padding: "1.75rem",
        background: palette.card,
        border: `1px solid ${palette.line}`,
        borderRadius: 12,
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = palette.accent;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = palette.line;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{ color: palette.accent, marginTop: "0.2rem" }}>{icon}</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.3rem", fontWeight: 500 }}>{title}</h3>
          <div className="mono" style={{ fontSize: "0.72rem", color: palette.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            {sub}
          </div>
          <p style={{ fontSize: "0.9rem", color: palette.textMute, lineHeight: 1.6, margin: 0 }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}