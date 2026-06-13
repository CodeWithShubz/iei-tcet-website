import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Cpu, Zap, Globe, Code2, Database, Shield } from "lucide-react"

const STATS = [
  { value: 500, suffix: "+", label: "Students Impacted" },
  { value: 20, suffix: "+", label: "Events Conducted" },
  { value: 2, suffix: "", label: "Major Clubs" },
  { value: 10, suffix: "+", label: "Industry Sessions" },
]

const TECH_ICONS = [Cpu, Zap, Globe, Code2, Database, Shield]
const ICON_POSITIONS = [
  { top: "12%", left: "8%" },
  { top: "20%", right: "10%" },
  { top: "55%", left: "5%" },
  { top: "65%", right: "8%" },
  { top: "80%", left: "18%" },
  { top: "75%", right: "18%" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const step = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + step, target)
            setCount(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function Particles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 6 + 4,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              p.id % 3 === 0
                ? "oklch(0.6 0.22 240 / 70%)"
                : p.id % 3 === 1
                  ? "oklch(0.72 0.18 55 / 50%)"
                  : "oklch(0.8 0.1 280 / 40%)",
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, #1e3a8a22 0%, #0d1b3e 40%, #050a14 100%)",
      }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.6 0.22 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.22 240) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Floating tech icons */}
      {TECH_ICONS.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-10 h-10 rounded-xl glass-card"
          style={ICON_POSITIONS[i]}
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <Icon size={18} className="text-primary" />
        </motion.div>
      ))}

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.22 240 / 8%) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6 text-xs font-medium text-primary/80 tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Institution of Engineers India
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2 leading-none"
        >
          <span className="gradient-text">IEI</span>
          <span className="text-white">-</span>
          <span className="text-white">TCET</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl font-semibold text-muted-foreground mb-2 tracking-wide"
        >
          IOT Department
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Empowering Future Engineers Through{" "}
          <span className="text-primary font-semibold">Innovation</span>,{" "}
          <span className="gradient-text-orange font-semibold">Leadership</span> and{" "}
          <span className="text-purple-400 font-semibold">Technology</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button
            onClick={() => document.querySelector("#ecosystem")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white glow-border hover:shadow-[0_0_40px_rgba(96,165,250,0.5)] transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6)" }}
          >
            Explore Chapters
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white glass-card hover:bg-white/10 transition-all duration-300 border border-white/20"
          >
            Join Community
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card rounded-2xl px-4 py-5 text-center hover:glow-border transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  )
}
