import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Brain, BookOpen, ChevronRight, X } from "lucide-react"

const NODES = [
  {
    id: "iei",
    label: "IEI-TCET",
    subtitle: "Student Chapter",
    icon: "⚙️",
    color: "blue",
    description:
      "The official student chapter of The Institution of Engineers (India) at TCET. Umbrella organization fostering technical excellence, leadership, and community.",
    stats: [
      { label: "Active Members", value: "500+" },
      { label: "Events/Year", value: "20+" },
      { label: "Chapters", value: "2" },
    ],
    children: ["openai", "magazine"],
  },
  {
    id: "openai",
    label: "OpenAI Club",
    subtitle: "AI Community",
    icon: "🤖",
    color: "purple",
    description:
      "A vibrant community of AI enthusiasts, developers and innovators exploring artificial intelligence, machine learning, and cutting-edge technologies.",
    stats: [
      { label: "AI Projects", value: "15+" },
      { label: "Workshops", value: "8+" },
      { label: "Members", value: "200+" },
    ],
    children: [],
  },
  {
    id: "magazine",
    label: "Magazine Committee",
    subtitle: "ThingTech Publication",
    icon: "📰",
    color: "orange",
    description:
      "Curates and publishes the department's official technical magazine — ThingTech. Covering IoT, AI, research papers, and student achievements.",
    stats: [
      { label: "Volumes", value: "4+" },
      { label: "Articles", value: "50+" },
      { label: "Readers", value: "300+" },
    ],
    children: [],
  },
]

const BORDER_COLOR: Record<string, string> = {
  blue: "border-blue-400/50",
  purple: "border-purple-400/50",
  orange: "border-orange-400/50",
}

const GLOW: Record<string, string> = {
  blue: "0 0 40px rgba(59,130,246,0.4)",
  purple: "0 0 40px rgba(168,85,247,0.4)",
  orange: "0 0 40px rgba(249,115,22,0.4)",
}

const BG: Record<string, string> = {
  blue: "from-blue-900/40 to-blue-950/10",
  purple: "from-purple-900/40 to-purple-950/10",
  orange: "from-orange-900/40 to-orange-950/10",
}

const ICON_BG: Record<string, string> = {
  blue: "bg-blue-500/20",
  purple: "bg-purple-500/20",
  orange: "bg-orange-500/20",
}

export function EcosystemSection() {
  const [selected, setSelected] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const selectedNode = NODES.find((n) => n.id === selected)

  return (
    <section id="ecosystem" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.6 0.22 240) 1px, transparent 1px)",
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
            Our Structure
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Click on any node to explore the chapter details
          </p>
        </motion.div>

        {/* Node diagram */}
        <div className="flex flex-col items-center gap-8 mb-8">
          {/* Root node */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setSelected(selected === "iei" ? null : "iei")}
            whileHover={{ scale: 1.05 }}
            className={`relative px-8 py-5 rounded-2xl glass-card bg-gradient-to-br from-blue-900/40 to-blue-950/10 border ${
              selected === "iei" ? "border-blue-400/70" : "border-blue-400/30"
            } transition-all duration-300 text-center min-w-[200px]`}
            style={{ boxShadow: selected === "iei" ? GLOW["blue"] : undefined }}
          >
            <div className="text-3xl mb-2">⚙️</div>
            <div className="text-base font-bold text-white">IEI-TCET</div>
            <div className="text-xs text-muted-foreground">Student Chapter</div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-primary/40" />
          </motion.button>

          {/* Connector line */}
          <div className="flex items-start gap-16 sm:gap-24 lg:gap-40 relative">
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
              style={{ background: "linear-gradient(90deg, transparent, #3b82f6, #818cf8, #f97316, transparent)" }}
            />

            {/* Child nodes */}
            {[NODES[1], NODES[2]].map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="relative flex flex-col items-center"
              >
                <div className="w-0.5 h-8 bg-primary/30 mb-0" />
                <motion.button
                  onClick={() => setSelected(selected === node.id ? null : node.id)}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`relative px-6 py-4 rounded-2xl glass-card bg-gradient-to-br ${BG[node.color]} border ${
                    selected === node.id ? BORDER_COLOR[node.color] : `border-${node.color === "purple" ? "purple" : "orange"}-500/20`
                  } transition-all duration-300 text-center min-w-[160px]`}
                  style={{ boxShadow: selected === node.id ? GLOW[node.color] : undefined }}
                >
                  <div className={`w-10 h-10 rounded-xl ${ICON_BG[node.color]} flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-xl">{node.icon}</span>
                  </div>
                  <div className="text-sm font-bold text-white">{node.label}</div>
                  <div className="text-xs text-muted-foreground">{node.subtitle}</div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 max-w-2xl mx-auto glass-card rounded-2xl p-6 bg-gradient-to-br ${BG[selectedNode.color]} border ${BORDER_COLOR[selectedNode.color]}`}
              style={{ boxShadow: GLOW[selectedNode.color] }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedNode.icon}</span>
                  <div>
                    <h3 className="font-bold text-white">{selectedNode.label}</h3>
                    <p className="text-xs text-muted-foreground">{selectedNode.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {selectedNode.description}
              </p>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {selectedNode.stats.map((s) => (
                  <div key={s.label} className="text-center glass-card rounded-xl p-3">
                    <div className="text-xl font-black gradient-text">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              {selectedNode.id === "iei" && (
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setSelected("openai")}
                    className="flex items-center gap-1 text-xs text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    <Brain size={12} /> OpenAI Club <ChevronRight size={10} />
                  </button>
                  <button
                    onClick={() => setSelected("magazine")}
                    className="flex items-center gap-1 text-xs text-orange-300 hover:text-orange-200 transition-colors"
                  >
                    <BookOpen size={12} /> Magazine Committee <ChevronRight size={10} />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
