import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function BrochureSection() {
  return (
    <section className="relative bg-lab-charcoal py-32 px-6 overflow-hidden">
      <div className="relative max-w-2xl mx-auto text-center">

        {/* Section Label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <FileText className="w-3.5 h-3.5 text-lab-orange" />

          <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
            OFFICIAL EXHIBIT
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight mb-10">
          EVENT{" "}
          <span className="text-lab-orange">
            BROCHURE
          </span>
        </h2>

        {/* Brochure Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 rounded-2xl border border-lab-orange/30 bg-lab-black p-10 sm:p-14 shadow-[0_0_60px_-10px_rgba(242,121,42,0.25)]"
        >
          <div className="w-16 h-16 rounded-xl bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center mx-auto mb-5">
            <FileText
              className="text-lab-orange"
              size={28}
            />
          </div>

          <p className="text-lab-cream font-display font-bold text-lg mb-1">
            CONCEPTIA '26 BROCHURE
          </p>

          <p className="text-lab-cream/50 text-sm">
            Full event details, schedule & rules
          </p>
        </motion.div>

        {/* Download Button */}
        <a
          href="/assets/conceptia26-brochure.pdf"
          download="CONCEPTIA26-Brochure.pdf"
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-lab-orange text-lab-orange font-mono text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full hover:bg-lab-orange hover:text-lab-black transition-all duration-200 shadow-lg shadow-lab-orange/10"
        >
          <Download size={16} />
          DOWNLOAD BROCHURE
        </a>

      </div>
    </section>
  );
}