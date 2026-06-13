import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Wrench, Network, Cpu, GraduationCap } from "lucide-react"

const SERVICES = [
  {
    icon: Wrench,
    title: "Technical Excellence",
    desc: "Hands-on workshops, coding sessions, IoT projects, hackathons and seminars that build real-world engineering skills.",
    color: "blue",
    glow: "oklch(0.6 0.22 240)",
    items: ["IoT Projects", "Coding Sessions", "Hackathons", "Seminars"],
  },
  {
    icon: Network,
    title: "Professional Network",
    desc: "Industry experts, alumni interactions and mentorship programs that open doors to career opportunities.",
    color: "purple",
    glow: "oklch(0.6 0.2 290)",
    items: ["Industry Experts", "Alumni Meets", "Mentorship", "Placements"],
  },
  {
    icon: Cpu,
    title: "Innovation Culture",
    desc: "AI, IoT and emerging technologies explored through research, projects, and collaborative innovation labs.",
    color: "orange",
    glow: "oklch(0.72 0.18 55)",
    items: ["AI/ML", "IoT Lab", "Research", "Innovation"],
  },
  {
    icon: GraduationCap,
    title: "Student Development",
    desc: "Leadership, communication and management skills developed through structured programs and hands-on roles.",
    color: "emerald",
    glow: "oklch(0.65 0.18 150)",
    items: ["Leadership", "Communication", "Management", "Soft Skills"],
  },
]

const COLOR_MAP: Record<string, string> = {
  blue: "from-blue-500/20 to-blue-900/5 border-blue-500/20 hover:border-blue-400/50",
  purple: "from-purple-500/20 to-purple-900/5 border-purple-500/20 hover:border-purple-400/50",
  orange: "from-orange-500/20 to-orange-900/5 border-orange-500/20 hover:border-orange-400/50",
  emerald: "from-emerald-500/20 to-emerald-900/5 border-emerald-500/20 hover:border-emerald-400/50",
}

const ICON_COLOR: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/10",
  purple: "text-purple-400 bg-purple-500/10",
  orange: "text-orange-400 bg-orange-500/10",
  emerald: "text-emerald-400 bg-emerald-500/10",
}

const TAG_COLOR: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-300",
  purple: "bg-purple-500/10 text-purple-300",
  orange: "bg-orange-500/10 text-orange-300",
  emerald: "bg-emerald-500/10 text-emerald-300",
}

export function WhatWeDoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="what-we-do" className="py-24 px-4 section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-primary mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Four pillars that define the IEI-TCET experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${COLOR_MAP[s.color]} border glass-card transition-all duration-300 cursor-default group`}
              style={{
                "--glow-color": s.glow,
              } as React.CSSProperties}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 0 40px ${s.glow}30, inset 0 0 40px ${s.glow}05` }}
              />

              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${ICON_COLOR[s.color]}`}>
                <s.icon size={20} />
              </div>

              <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">{s.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {s.items.map((tag) => (
                  <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${TAG_COLOR[s.color]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
