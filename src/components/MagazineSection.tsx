import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { FileText, Palette, Users, ChevronLeft, ChevronRight } from "lucide-react"

const FEATURES = [
  { icon: FileText, label: "Technical Articles", color: "text-orange-400" },
  { icon: FileText, label: "Research Papers", color: "text-yellow-400" },
  { icon: Users, label: "Industry Interviews", color: "text-orange-300" },
  { icon: Users, label: "Student Achievements", color: "text-amber-400" },
  { icon: Palette, label: "Artwork & Illustrations", color: "text-orange-500" },
]

const MAGAZINE_TEAM = [
  { role: "Chief Editor", name: "Prineet Jain" },
  { role: "Co-editor", name: "Parth Desai" },
  { role: "Editorial Associate", name: "Ansh Mishra" },
  { role: "Editorial Associate", name: "Kaustubh Deshpande" },
  { role: "Designing & Styling", name: "Girik Arora" },
  { role: "Designing & Styling", name: "Yatin Varma" },
  { role: "Research & Analysis", name: "Shreya Shrivastav" },
]

const VOLUMES = [
  {
    volume: "Volume 4",
    year: "AY 2025-26",
    theme: "The Future of IoT",
    tagline: "How is IoT Shaping Your World?",
    gradient: "from-blue-900 to-purple-900",
    accent: "#818cf8",
    image: "/magazine-vol4.png",
  },
  {
    volume: "Volume 4.5",
    year: "AY 2025-26",
    theme: "The Future of Urbanization",
    tagline: "Smart Connected Cities",
    gradient: "from-indigo-900 to-cyan-900",
    accent: "#22d3ee",
    image: "/magazine-vol4-5.png",
  },
]

function MagazineCard({ vol, isActive }: { vol: typeof VOLUMES[0]; isActive: boolean }) {
  return (
    <motion.div
      animate={{ scale: isActive ? 1 : 0.88, opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.4 }}
      className={`relative w-48 h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${vol.gradient} border border-white/10 flex-shrink-0 shadow-2xl`}
      style={{ boxShadow: isActive ? `0 0 40px ${vol.accent}50` : undefined }}
    >
      {/* Background image */}
      {vol.image && (
        <img src={vol.image} alt={vol.volume} className="absolute inset-0 w-full h-full object-cover opacity-40" />
      )}
      {/* Cover art overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`dots-${vol.volume}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${vol.volume})`}/>
        </svg>
      </div>

      <div className="relative z-10 p-4 flex flex-col h-full">
        <div className="text-[8px] font-bold tracking-widest text-white/60 uppercase mb-1">Internet of Things</div>
        <div className="text-xl font-black text-white leading-tight mb-auto">THING<br/>TECH</div>
        <div className="text-[9px] text-white/70 mb-2">{vol.theme}</div>
        <div className="text-sm font-bold text-white leading-tight">{vol.tagline}</div>
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
          <span className="text-[9px] text-white/50">V{vol.volume.split(" ")[1]} 2025-26</span>
          <span className="text-[9px] font-bold text-white/80">IEI TCET</span>
        </div>
      </div>
    </motion.div>
  )
}

export function MagazineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [currentVol, setCurrentVol] = useState(0)

  return (
    <section id="magazine" className="py-24 px-4 relative overflow-hidden">
      {/* Orange/amber glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.18 55 / 6%) 0%, transparent 70%)",
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
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-orange-400 mb-4">
            📰 Publication
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Magazine{" "}
            <span className="gradient-text-orange">Committee</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Curating and publishing the department's official technical magazine — ThingTech
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Magazine showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Flipbook display */}
            <div className="relative flex items-center gap-4 mb-6">
              <button
                onClick={() => setCurrentVol((v) => (v - 1 + VOLUMES.length) % VOLUMES.length)}
                className="p-2 rounded-xl glass-card hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-4">
                {VOLUMES.map((vol, i) => (
                  <button key={i} onClick={() => setCurrentVol(i)}>
                    <MagazineCard vol={vol} isActive={i === currentVol} />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentVol((v) => (v + 1) % VOLUMES.length)}
                className="p-2 rounded-xl glass-card hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentVol}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="text-base font-bold text-white">{VOLUMES[currentVol].volume}</h3>
                <p className="text-xs text-muted-foreground">{VOLUMES[currentVol].year}</p>
                <p className="text-xs text-orange-300 mt-1">{VOLUMES[currentVol].theme}</p>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-4">
              {VOLUMES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentVol(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentVol ? "bg-orange-400 w-6" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
              The Magazine Committee curates and publishes the department's official technical magazine.
              Each edition features cutting-edge IoT research, student innovations, industry insights,
              and creative artwork — making it the definitive voice of TCET's tech community.
            </p>

            {/* Content features */}
            <div className="space-y-3 mb-8">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card border border-orange-500/15 hover:border-orange-400/30 hover:bg-orange-500/5 transition-all duration-200"
                >
                  <f.icon size={14} className={f.color} />
                  <span className="text-sm font-medium text-white">{f.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Editorial team preview */}
            <div className="glass-card rounded-2xl p-4 border border-orange-500/20">
              <h4 className="text-xs font-bold text-white mb-3 tracking-wider uppercase">Editorial Team 25/26</h4>
              <div className="grid grid-cols-2 gap-2">
                {MAGAZINE_TEAM.slice(0, 4).map((m, i) => (
                  <div key={i} className="text-xs">
                    <span className="text-orange-300/70">{m.role}</span>
                    <br />
                    <span className="text-white font-medium">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
