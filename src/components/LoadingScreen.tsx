import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setShow(false)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return p + Math.random() * 12 + 4
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #050a14 0%, #0d1b3e 100%)" }}
        >
          {/* Gear rings */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border-2 border-dashed"
              style={{ borderColor: "oklch(0.6 0.22 240 / 30%)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 rounded-full border border-dashed"
              style={{ borderColor: "oklch(0.72 0.18 55 / 20%)" }}
            />

            {/* Logo center */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative z-10 w-24 h-24 rounded-2xl flex flex-col items-center justify-center glow-border"
              style={{ background: "linear-gradient(135deg, #0d1b3e, #1e3a8a)" }}
            >
              {/* Gear SVG */}
              <svg viewBox="0 0 80 80" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="12" fill="none" stroke="#f97316" strokeWidth="3"/>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <rect
                    key={i}
                    x="37" y="8"
                    width="6" height="10"
                    rx="2"
                    fill="#3b82f6"
                    transform={`rotate(${angle} 40 40)`}
                  />
                ))}
                <text x="40" y="45" textAnchor="middle" fontSize="14" fontWeight="900" fill="white" fontFamily="sans-serif">IEI</text>
              </svg>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl font-black tracking-[0.3em] text-white mb-1">IEI-TCET</h1>
            <p className="text-xs tracking-widest text-primary/60 uppercase">Student Chapter</p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 10%)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ width: `${Math.min(progress, 100)}%`, background: "linear-gradient(90deg, #3b82f6, #818cf8)" }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-xs text-muted-foreground tracking-widest"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
