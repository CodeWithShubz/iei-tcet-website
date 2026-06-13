import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Terminal, Zap, BarChart3, Palette } from "lucide-react"

const RESPONSIBILITIES = [
  { icon: Globe, title: "Website Development", desc: "Full-stack web presence and digital platforms", color: "blue" },
  { icon: Terminal, title: "Automation", desc: "Scripts and tools for event management workflows", color: "purple" },
  { icon: BarChart3, title: "Event Management Systems", desc: "Registrations, tracking, and analytics", color: "cyan" },
  { icon: Palette, title: "Digital Branding", desc: "Visual identity and digital content strategy", color: "orange" },
  { icon: Zap, title: "Technical Infrastructure", desc: "Cloud, hosting, and system architecture", color: "emerald" },
]

const CODE_LINES = [
  { indent: 0, text: "const iei_tcet = {", color: "text-purple-300" },
  { indent: 1, text: 'name: "IEI-TCET Student Chapter",', color: "text-orange-300" },
  { indent: 1, text: 'mission: "Empower Future Engineers",', color: "text-orange-300" },
  { indent: 1, text: "tech: [", color: "text-blue-300" },
  { indent: 2, text: '"React", "TypeScript", "Node.js",', color: "text-green-300" },
  { indent: 2, text: '"IoT", "AI/ML", "Cloud Computing"', color: "text-green-300" },
  { indent: 1, text: "],", color: "text-blue-300" },
  { indent: 1, text: "events: {\n    workshops: 20+,\n    hackathons: 2,\n    talks: 10+\n  },", color: "text-cyan-300" },
  { indent: 1, text: "impact: 500+ // students", color: "text-yellow-300" },
  { indent: 0, text: "}", color: "text-purple-300" },
]

function CodeEditor() {
  const [visibleLines, setVisibleLines] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= CODE_LINES.length) clearInterval(interval)
    }, 120)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "#0d1117" }}
    >
      {/* Editor header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">iei-tcet.ts</span>
      </div>

      <div className="p-4 font-mono text-xs leading-6 min-h-[240px]">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`${line.color}`}
            style={{ paddingLeft: `${line.indent * 16}px` }}
          >
            <span className="text-muted-foreground/40 mr-4 select-none">{String(i + 1).padStart(2, " ")}</span>
            {line.text}
            {i === visibleLines - 1 && <span className="typing-cursor" />}
          </motion.div>
        ))}
      </div>

      {/* Git contribution bar */}
      <div className="px-4 pb-4">
        <p className="text-xs text-muted-foreground mb-2">GitHub Activity</p>
        <div className="grid grid-cols-[repeat(26,1fr)] gap-0.5">
          {Array.from({ length: 52 }, (_, i) => {
            const intensity = Math.random()
            const color =
              intensity > 0.7
                ? "bg-green-500"
                : intensity > 0.4
                  ? "bg-green-700"
                  : intensity > 0.15
                    ? "bg-green-900"
                    : "bg-white/5"
            return <div key={i} className={`aspect-square rounded-sm ${color}`} />
          })}
        </div>
      </div>
    </div>
  )
}

export function TechHeadSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="tech-head" className="py-24 px-4 section-alt relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.22 240 / 6%) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-primary mb-4">
            💻 Technical Head
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Technology Powers Our{" "}
            <span className="gradient-text">Community</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The Technical Head drives digital excellence — from infrastructure to innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Code editor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CodeEditor />
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {RESPONSIBILITIES.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl glass-card border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <r.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Tech stack badges */}
            <div className="mt-6 glass-card rounded-2xl p-4 border border-white/10">
              <p className="text-xs text-muted-foreground mb-3 font-medium">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Vite", "Tailwind", "Node.js", "Python", "Git", "Figma"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
