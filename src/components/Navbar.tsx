import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "OpenAI Club", href: "#openai-club" },
  { label: "Magazine", href: "#magazine" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "glass-card shadow-lg shadow-black/30"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" }) }}
              className="flex items-center gap-2 group"
            >
              {/* <div className="w-9 h-9 rounded-lg overflow-hidden glow-border group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#0d1b3e"/>
                  <text x="50" y="62" textAnchor="middle" fontSize="38" fontWeight="900" fill="white" fontFamily="sans-serif">IEI</text>
                </svg>
              </div> */}

              <div className="w-14 h-14 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/iei-logo.png"
                  alt="IEI-TCET Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="hidden sm:block">
                {/* <p className="text-xs font-bold text-white leading-none">IEI-TCET</p>
                <p className="text-[10px] text-primary/70 leading-none mt-0.5">Student Chapter</p> */}

                <p className="text-sm font-bold text-white leading-none">
                  IEI-TCET
                </p>

                <p className="text-[11px] text-primary/70 leading-none mt-0.5">
                  IoT Department
                </p>

              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-muted-foreground hover:text-white"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="hidden sm:block px-4 py-1.5 text-xs font-semibold rounded-lg text-white glow-border hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #1e40af, #3b82f6)" }}
              >
                Join Us
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-card border-t border-white/10 lg:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 px-4 py-2.5 text-sm font-semibold rounded-lg text-white text-center"
                style={{ background: "linear-gradient(135deg, #1e40af, #3b82f6)" }}
              >
                Join IEI-TCET
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
