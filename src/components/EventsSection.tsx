import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wrench, Cpu, Users, Globe, MessageSquare, Award } from "lucide-react"

const EVENTS = [
  {
    icon: Wrench,
    title: "Technical Workshops",
    date: "Throughout the Year",
    desc: "Hands-on sessions covering IoT, embedded systems, web development, and more.",
    color: "blue",
  },
  {
    icon: Cpu,
    title: "AI Summit",
    date: "Annual Event",
    desc: "Industry-scale AI conference featuring expert talks, demos, and networking.",
    color: "purple",
  },
  {
    icon: Award,
    title: "Hackathons",
    date: "Bi-Annual",
    desc: "24-hour intense problem-solving competitions with real-world challenges.",
    color: "orange",
  },
  {
    icon: Globe,
    title: "Industrial Visits",
    date: "Semester Events",
    desc: "Immersive visits to leading tech companies and research labs.",
    color: "emerald",
  },
  {
    icon: MessageSquare,
    title: "Industry Expert Talks",
    date: "Monthly",
    desc: "Sessions with top industry professionals, startups, and researchers.",
    color: "cyan",
  },
  {
    icon: Users,
    title: "Networking Events",
    date: "Quarterly",
    desc: "Alumni meets, career fairs, and collaborative networking sessions.",
    color: "pink",
  },
]

const GLOW: Record<string, string> = {
  blue: "rgba(59,130,246,0.4)",
  purple: "rgba(168,85,247,0.4)",
  orange: "rgba(249,115,22,0.4)",
  emerald: "rgba(16,185,129,0.4)",
  cyan: "rgba(6,182,212,0.4)",
  pink: "rgba(236,72,153,0.4)",
}

const ICON_BG: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-400",
  purple: "bg-purple-500/15 text-purple-400",
  orange: "bg-orange-500/15 text-orange-400",
  emerald: "bg-emerald-500/15 text-emerald-400",
  cyan: "bg-cyan-500/15 text-cyan-400",
  pink: "bg-pink-500/15 text-pink-400",
}

const DOT_COLOR: Record<string, string> = {
  blue: "bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]",
  purple: "bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]",
  orange: "bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.8)]",
  emerald: "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]",
  cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]",
  pink: "bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.8)]",
}

export function EventsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="events" className="py-24 px-4 section-alt">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-primary mb-4">
            Highlights
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Events & <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-muted-foreground">A year packed with learning and community</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 origin-top"
            style={{
              background: "linear-gradient(180deg, #3b82f6, #818cf8, #f97316, #10b981, #06b6d4, #ec4899)",
              transform: inView ? "scaleY(1)" : "scaleY(0)",
            }}
          />

          <div className="space-y-8">
            {EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  } flex-row gap-4 sm:gap-8`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full flex-shrink-0 z-10 ${DOT_COLOR[event.color]}`}
                  />

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden sm:block flex-1" />

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="ml-10 sm:ml-0 flex-1 max-w-sm glass-card rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
                    style={{ ":hover": { boxShadow: `0 0 30px ${GLOW[event.color]}` } } as React.CSSProperties}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${ICON_BG[event.color]}`}>
                        <event.icon size={16} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{event.title}</h3>
                        <p className="text-xs text-muted-foreground/60 mb-2">{event.date}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
