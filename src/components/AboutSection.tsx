import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Lightbulb, Building2 } from "lucide-react"

const MISSION = [
  { icon: Target, title: "Technical Excellence", desc: "Building deep technical foundations through hands-on learning" },
  { icon: Users, title: "Leadership Development", desc: "Nurturing the next generation of engineering leaders" },
  { icon: Lightbulb, title: "Innovation", desc: "Fostering creative solutions to real-world challenges" },
  { icon: Building2, title: "Industry Exposure", desc: "Bridging the gap between academia and industry" },
]

const OFFERINGS = [
  { title: "Technical Workshops", icon: "🔧", gradient: "from-blue-500/20 to-blue-600/5" },
  { title: "Industry Networking", icon: "🌐", gradient: "from-purple-500/20 to-purple-600/5" },
  { title: "Research & Publication", icon: "📖", gradient: "from-orange-500/20 to-orange-600/5" },
  { title: "Community Building", icon: "🤝", gradient: "from-emerald-500/20 to-emerald-600/5" },
]

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.6 0.22 240) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-primary mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            About <span className="gradient-text">IEI-TCET</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            IEI-TCET is the official student chapter of{" "}
            <span className="text-primary font-semibold">The Institution of Engineers (India)</span>{" "}
            at Thakur College of Engineering & Technology. We unite passionate engineers,
            developers, and innovators under one roof.
          </p>
        </FadeIn>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-primary/20">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Founded to empower engineering students with{" "}
                  <span className="text-white font-medium">technical skills</span>,{" "}
                  <span className="text-white font-medium">professional networks</span>, and{" "}
                  <span className="text-white font-medium">leadership opportunities</span> that
                  go beyond classroom learning. We connect students with industry experts,
                  organize impactful workshops, and publish cutting-edge research.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {MISSION.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="glass-card rounded-xl p-4 hover:glow-border transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <h3 className="text-xs font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {OFFERINGS.map((o, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, y: -5 }}
                  className={`rounded-2xl p-6 text-center glass-card bg-gradient-to-br ${o.gradient} hover:glow-border transition-all duration-300`}
                >
                  <div className="text-3xl mb-3">{o.icon}</div>
                  <p className="text-sm font-semibold text-white">{o.title}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
