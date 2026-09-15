import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, Image as ImageIcon } from "lucide-react";
import Lightbox from "../shared/Lightbox";
import TiltCard from "../shared/TiltCard";

export default function PosterSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="relative bg-lab-charcoal py-32 px-6 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-black border border-lab-orange/30 backdrop-blur-md mb-4">
          <ImageIcon className="w-3.5 h-3.5 text-lab-orange" />
          <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
            OFFICIAL EXHIBIT
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight mb-10">
          EVENT <span className="text-lab-orange">BLUEPRINT</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8"
        >
          <TiltCard
            intensity={6}
            className="relative rounded-2xl overflow-hidden border border-lab-orange/40 shadow-[0_0_60px_-10px_rgba(242,121,42,0.3)] bg-lab-black"
          >
            <img
              src="/assets/conceptia-poster.png"
              alt="CONCEPTIA '26 official event poster"
              className="w-full h-auto object-contain"
            />
          </TiltCard>
        </motion.div>

        <button
          onClick={() => setLightboxOpen(true)}
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-lab-orange text-lab-orange font-mono text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full hover:bg-lab-orange hover:text-lab-black transition-all duration-200 shadow-lg shadow-lab-orange/10"
        >
          <Maximize2 size={16} /> VIEW FULL BLUEPRINT
        </button>
      </div>

      <Lightbox
        src="/assets/conceptia-poster.png"
        alt="CONCEPTIA '26 official event poster, full view"
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}