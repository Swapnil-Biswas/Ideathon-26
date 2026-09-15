import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import RegisterButton from "../shared/RegisterButton";

export default function FinalCTA() {
  return (
    <section className="relative bg-lab-black py-36 px-6 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      >
        <source src="/assets/phineas-ferb-portal.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-lab-black via-lab-black/80 to-lab-black/60 pointer-events-none" />

      {/* Deep ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-lab-orange/15 rounded-full blur-[170px] pointer-events-none" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-6"
        >
          <Terminal className="w-3.5 h-3.5 text-lab-orange" />
          <span className="font-mono text-xs tracking-widest text-lab-cream/80 uppercase">
            REGISTRATIONS CLOSING SOON
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-8xl font-black text-lab-cream leading-[0.95] mb-6 tracking-tight"
        >
          WHAT ARE YOU<br />GONNA <span className="text-lab-orange">BUILD?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xl sm:text-2xl tracking-[0.2em] font-bold text-lab-cream/90 mb-2 uppercase"
        >
          BUILD THE IMPOSSIBLE.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lab-cream/60 text-xs font-mono tracking-[0.25em] mb-10 uppercase"
        >
          14TH OCTOBER 2026 • BMSIT&amp;M BENGALURU • ₹15,000 PRIZE POOL • 50 TEAMS CAPPED
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <RegisterButton label="REGISTER ON UNSTOP (FREE)" size="lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="flex items-center justify-center gap-2 text-lab-cream/50 text-xs font-mono tracking-wider mt-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-lab-orange" />
          <span>Free entry for 3–4 member teams. Winning team secures ₹7,000 + corporate internship opportunity.</span>
        </motion.div>
      </div>
    </section>
  );
}