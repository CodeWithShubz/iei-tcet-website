import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const MILESTONES = [
  {
    quarter: "Q1 2026",
    title: "AI Summit",
    desc: "Large-scale artificial intelligence conference featuring keynote speakers, demos, and networking.",
    tag: "Flagship Event",
    color: "blue",
    icon: "🏙️",
  },
  {
    quarter: "Q2 2026",
    title: "Inter-College Hackathons",
    desc: "Multi-college coding competitions fostering innovation and collaborative problem-solving.",
    tag: "Competition",
    color: "purple",
    icon: "⚡",
  },
  {
    quarter: "Q2–Q3 2026",
    title: "Industry Partnerships",
    desc: "Formal collaborations with leading tech companies for internships, projects, and exposure.",
    tag: "Outreach",
    color: "orange",
    icon: "🤝",
  },
  {
    quarter: "Q3 2026",
    title: "Research Initiatives",
    desc: "Student research programs with faculty guidance, culminating in paper publications.",
    tag: "Academic",
    color: "emerald",
    icon: "🔬",
  },
  {
    quarter: "Q4 2026",
    title: "Magazine Expansion",
    desc: "ThingTech goes digital with an interactive online platform and wider industry reach.",
    tag: "Publication",
    color: "cyan",
    icon: "📱",
  },
  {
    quarter: "2026–27",
    title: "Outreach Programs",
    desc: "Community initiatives extending IEI-TCET's impact to students across Mumbai.",
    tag: "Community",
    color: "pink",
    icon: "🌐",
  },
]

const GLOW: Record<string, string> = {
  blue: "oklch(0.6 0.22 240 / 30%)",
  purple: "oklch(0.6 0.2 290 / 30%)",
  orange: "oklch(0.72 0.18 55 / 30%)",
  emerald: "oklch(0.65 0.18 150 / 30%)",
  cyan: "oklch(0.65 0.15 200 / 30%)",
  pink: "oklch(0.65 0.2 340 / 30%)",
}

const BG: Record<string, string> = {
  blue: "from-blue-900/30 to-blue-950/5",
  purple: "from-purple-900/30 to-purple-950/5",
  orange: "from-orange-900/30 to-orange-950/5",
  emerald: "from-emerald-900/30 to-emerald-950/5",
  cyan: "from-cyan-900/30 to-cyan-950/5",
  pink: "from-pink-900/30 to-pink-950/5",
}

const TAG_COLOR: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-300",
  purple: "bg-purple-500/15 text-purple-300",
  orange: "bg-orange-500/15 text-orange-300",
  emerald: "bg-emerald-500/15 text-emerald-300",
  cyan: "bg-cyan-500/15 text-cyan-300",
  pink: "bg-pink-500/15 text-pink-300",
}

export function RoadmapSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="roadmap" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(oklch(0.6 0.22 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.22 240) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-primary mb-4">
            Vision
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Future <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our 2026–27 vision for growth, innovation, and community impact
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl p-5 glass-card bg-gradient-to-br ${BG[m.color]} border border-white/10 hover:border-white/20 transition-all duration-300`}
              style={{ ":hover": { boxShadow: `0 0 30px ${GLOW[m.color]}` } } as React.CSSProperties}
            >
              {/* Number */}
              <div className="absolute top-4 right-4 text-4xl font-black text-white/5">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="text-2xl mb-3">{m.icon}</div>
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-3 ${TAG_COLOR[m.color]}`}>
                {m.tag}
              </span>
              <p className="text-xs text-muted-foreground/60 mb-1">{m.quarter}</p>
              <h3 className="text-sm font-bold text-white mb-2">{m.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
