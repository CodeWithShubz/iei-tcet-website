import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, ExternalLink, Link, Globe } from "lucide-react"

const SOCIALS = [
  { icon: Mail, label: "Email", handle: "iei.tcet@thakureducation.org", href: "mailto:iei.tcet@thakureducation.org", color: "text-blue-400" },
  { icon: Globe, label: "Instagram", handle: "@iei_tcet", href: "#", color: "text-pink-400" },
  { icon: Link, label: "LinkedIn", handle: "IEI-TCET", href: "#", color: "text-blue-500" },
  { icon: ExternalLink, label: "GitHub", handle: "iei-tcet", href: "#", color: "text-white" },
]

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-4">
      {/* Gradient footer background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, oklch(0.12 0.03 250) 20%, oklch(0.08 0.03 260) 100%)",
        }}
      />
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.6 0.22 240 / 60%), transparent)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-primary mb-4">
            Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join the IEI-TCET community and be part of something extraordinary
          </p>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 border border-primary/20 text-center mb-12 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.6 0.22 240 / 10%) 0%, transparent 60%)" }}
          />
          <div className="relative z-10">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-black text-white mb-3">
              Ready to Join <span className="gradient-text">IEI-TCET</span>?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Become part of a thriving community of engineers, innovators, and leaders.
              Applications open for the 2025-26 academic year.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold text-white glow-border transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #818cf8)" }}
            >
              Join IEI-TCET
              <ExternalLink size={14} />
            </motion.button>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {SOCIALS.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              whileHover={{ scale: 1.04, y: -4 }}
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl glass-card border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <s.icon size={18} className={s.color} />
              <div>
                <p className="text-xs font-semibold text-white">{s.label}</p>
                <p className="text-[10px] text-muted-foreground">{s.handle}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center glow-border"
              style={{ background: "linear-gradient(135deg, #0d1b3e, #1e3a8a)" }}
            >
              <span className="text-xs font-black text-white">IEI</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white">IEI-TCET Student Chapter</p>
              <p className="text-[10px] text-muted-foreground">Thakur College of Engineering & Technology</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; 2025-26 IEI-TCET Student Chapter. Built with ❤️ by the Technical Head.
          </p>
          <p className="text-[10px] text-muted-foreground/50 mt-1">
            Institution of Engineers India — Empowering Future Engineers
          </p>
        </motion.div>
      </div>
    </section>
  )
}
