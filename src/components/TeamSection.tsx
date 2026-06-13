import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const TEAM = [
  { role: "Chairperson", emoji: "👑", responsibilities: ["Overall chapter leadership", "Strategic vision", "External representation", "Stakeholder management"] },
  { role: "Vice Chairperson", emoji: "🤝", responsibilities: ["Support chairperson", "Operations oversight", "Cross-team coordination", "Deputy leadership"] },
  { role: "Secretary", emoji: "📋", responsibilities: ["Meeting minutes & documentation", "Communication management", "Administrative coordination", "Record keeping"] },
  { role: "Treasurer", emoji: "💰", responsibilities: ["Financial management", "Budget planning", "Expense tracking", "Sponsorship funds"] },
  { role: "Technical Head", emoji: "💻", responsibilities: ["Website & tech infrastructure", "Digital tools & automation", "Tech event coordination", "Innovation initiatives"] },
  { role: "PR & Sponsorship", emoji: "📣", responsibilities: ["Public relations", "Sponsorship acquisition", "Brand partnerships", "Media outreach"] },
  { role: "Event Manager", emoji: "🎪", responsibilities: ["Event planning & execution", "Logistics coordination", "Vendor management", "Post-event analysis"] },
  { role: "Publication Head", emoji: "📰", responsibilities: ["Magazine oversight", "Content strategy", "Editorial coordination", "Publishing schedule"] },
  { role: "Design & Media", emoji: "🎨", responsibilities: ["Visual identity", "Graphic design", "Social media content", "Photography & videography"] },
  { role: "Outreach Head", emoji: "🌐", responsibilities: ["Community outreach", "Industry connections", "Collaboration initiatives", "Alumni network"] },
]

function TeamCard({ member, index }: { member: typeof TEAM[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card rounded-2xl border border-white/10 overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center gap-3 hover:bg-white/5 transition-colors duration-200"
      >
        <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-lg flex-shrink-0 glow-border">
          {member.emoji}
        </div>
        <div className="flex-1 text-left">
          <p className="text-sm font-bold text-white">{member.role}</p>
          <p className="text-xs text-muted-foreground">Click to see responsibilities</p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-white/10 pt-3">
              <ul className="space-y-1.5">
                {member.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="team" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.6 0.22 240) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
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
            The People
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Core <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">The passionate individuals driving IEI-TCET forward in 2025-26</p>
        </motion.div>

        {/* Team photo hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-3xl mx-auto mb-16 rounded-3xl overflow-hidden"
        >
          {/* Glow frame */}
          <div className="absolute -inset-1 rounded-3xl glow-border opacity-50 pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/team-photo.png"
              alt="IEI-TCET Core Team 25/26"
              className="w-full object-cover"
              style={{ maxHeight: "440px", objectPosition: "top" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 60%, oklch(0.12 0.03 250) 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-xl font-black text-white">The Core Team 25/26</h3>
              <p className="text-xs text-muted-foreground mt-1">IEI-TCET Student Chapter</p>
            </div>
          </div>
        </motion.div>

        {/* Leadership cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TEAM.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
