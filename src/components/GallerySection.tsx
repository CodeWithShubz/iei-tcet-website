import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"

const GALLERY_ITEMS = [
  { src: "/team-photo.png", title: "Core Team 25/26", tag: "Team", span: "col-span-2 row-span-2" },
  // { src: "/magazine-vol4.png", title: "ThingTech Volume 4", tag: "Publication", span: "" },
  // { src: "/magazine-vol4-5.png", title: "ThingTech Volume 4.5", tag: "Publication", span: "" },
  { src: "/magazine-vol4.png", title: "ThingTech Volume 4", tag: "Publication", span: "row-span-2" },
{ src: "/magazine-vol4-5.png", title: "ThingTech Volume 4.5", tag: "Publication", span: "row-span-2" },
  // { src: "/iei-logo.png", title: "IEI-TCET Brand", tag: "Brand", span: "" },
  { src: "/iei-logo.png", title: "IEI-TCET Brand", tag: "Brand", span: "col-span-2" },
  { src: "/openai.png", title: "AI Workshop", tag: "Event", span: "" },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<(typeof GALLERY_ITEMS)[0] | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="gallery" className="py-24 px-4 section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card text-primary mb-4">
            Memories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Moments that define the IEI-TCET spirit
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        {/* <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 auto-rows-[160px]"> */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.span} border border-white/10`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                // className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-semibold text-white">{item.title}</p>
                <span className="text-[10px] text-primary/80">{item.tag}</span>
              </div>
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={12} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            style={{ background: "rgba(5, 10, 20, 0.95)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full rounded-2xl border border-white/20"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-2xl"
                style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
                <p className="text-sm font-semibold text-white">{lightbox.title}</p>
                <p className="text-xs text-muted-foreground">{lightbox.tag}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
