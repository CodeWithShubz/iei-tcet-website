import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Code2, Cpu, FlaskConical, Trophy, Search } from "lucide-react"

const FEATURES = [
  { icon: Brain, label: "AI Workshops" },
  { icon: Code2, label: "Prompt Engineering" },
  { icon: Cpu, label: "OpenAI APIs" },
  { icon: FlaskConical, label: "Machine Learning" },
  { icon: Trophy, label: "Hackathons" },
  { icon: Search, label: "Research Projects" },
]

const FUTURE = [
  { label: "AI Summit Mumbai", icon: "🏙️", tag: "2026" },
  { label: "Industry Keynotes", icon: "🎤", tag: "Q3 2026" },
  { label: "Tech Expo", icon: "🏆", tag: "Q4 2026" },
  { label: "24-Hour Hackathon", icon: "⚡", tag: "Annual" },
]

export function OpenAIClubSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="openai-club" className="py-24 px-4 section-alt relative overflow-hidden">
      {/* Purple nebula glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.6 0.2 290 / 8%) 0%, transparent 70%)",
        }}
      />

      {/* Animated AI circuit pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M10 40 L30 40 L30 20 L50 20 L50 40 L70 40" stroke="oklch(0.7 0.2 290)" strokeWidth="1" fill="none"/>
              <circle cx="30" cy="40" r="3" fill="oklch(0.7 0.2 290)"/>
              <circle cx="50" cy="40" r="3" fill="oklch(0.7 0.2 290)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-purple-400 mb-6">
                🤖 AI Division
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                <span style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  OpenAI Club
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                A thriving community of AI enthusiasts, developers, and innovators. We explore
                artificial intelligence from fundamentals to cutting-edge applications, building
                practical AI solutions and fostering a culture of research and experimentation.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                    whileHover={{ scale: 1.04, y: -3 }}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl glass-card border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
                  >
                    <f.icon size={14} className="text-purple-400 flex-shrink-0" />
                    <span className="text-xs font-medium text-white">{f.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Future initiatives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-purple-400" />
              Future Initiatives
            </h3>
            <div className="space-y-4">
              {FUTURE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl glass-card bg-gradient-to-r from-purple-900/30 to-purple-950/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 text-purple-300">
                    {item.tag}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* AI Visual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 rounded-2xl glass-card border border-purple-500/20 p-6 text-center overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-10"
                style={{ background: "radial-gradient(circle at 50% 50%, #a78bfa, transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="flex justify-center gap-3 mb-4">
                  {["⚡", "🧠", "🔮", "🌐", "💡"].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Building the AI-powered future of TCET</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
