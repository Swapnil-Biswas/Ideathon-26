import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Calendar, MapPin, Sparkles } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import RegisterButton from "../shared/RegisterButton";
import DecryptedText from "../reactbits/DecryptedText";
import ShinyText from "../reactbits/ShinyText";
import Squares from "../reactbits/Squares";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-lab-black overflow-hidden flex flex-col justify-center pt-28 pb-20 px-6">
      {/* Full-bleed background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/assets/phineas-ferb-silhouette.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay so text stays readable and colors pop */}
      <div className="absolute inset-0 bg-gradient-to-r from-lab-black via-lab-black/90 to-lab-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-lab-black via-transparent to-lab-black/50 pointer-events-none" />

      {/* Interactive Squares background layer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={48}
          borderColor="rgba(242, 121, 42, 0.08)"
          hoverFillColor="rgba(242, 121, 42, 0.12)"
        />
      </div>

      {/* Background technical parallax grid */}
      <motion.div
        style={{
          y: gridY,
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left max-w-3xl"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lab-charcoal/80 border border-lab-orange/30 backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lab-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lab-orange" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider text-lab-cream/90 flex items-center gap-1.5">
              <ShinyText text="ARMS BMSIT PRESENTS" speed={4} className="text-xs font-semibold" />
              <span className="text-lab-orange/40">•</span>
              <span className="text-lab-orange text-[10px] tracking-widest font-mono uppercase">ONLINE</span>
            </span>
          </motion.div>

          {/* Main Title with DecryptedText */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-4xl sm:text-6xl lg:text-8xl font-black text-lab-cream leading-[0.92] tracking-tight mb-4 break-words"
          >
            <DecryptedText
              text="CONCEPTIA"
              speed={35}
              maxIterations={12}
              className="text-lab-cream font-bold"
              encryptedClassName="text-lab-orange/60"
              animateOn="view"
            />
            <span className="text-lab-orange">'26</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-lab-cream/80 text-sm md:text-lg tracking-[0.25em] font-mono font-medium mb-3"
          >
            AN INTERCOLLEGE IDEATHON
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-lab-orange font-semibold text-base md:text-lg tracking-wider mb-6 flex items-center justify-center lg:justify-start gap-2"
          >
            <Sparkles className="w-4 h-4 text-lab-glow" />
            <span>IDEATE. INNOVATE. BUILD. WIN.</span>
          </motion.p>

          {/* Date and Venue Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-lab-cream/70 text-sm mb-10"
          >
            <div className="flex items-center gap-2 bg-lab-charcoal/50 border border-white/[0.08] px-3.5 py-1.5 rounded-lg backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-lab-orange" />
              <span>{eventConfig.eventDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-lab-charcoal/50 border border-white/[0.08] px-3.5 py-1.5 rounded-lg backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-lab-orange" />
              <span>{eventConfig.venue}</span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5"
          >
            <RegisterButton label="REGISTER YOUR TEAM" size="lg" />
            <a
              href="/guidelines"
              className="text-lab-cream/80 text-sm tracking-widest font-medium hover:text-lab-orange transition-colors flex items-center gap-2 px-5 py-4 rounded-xl border border-white/10 hover:border-lab-orange/40 bg-white/[0.02]"
            >
              <span>EXPLORE GUIDELINES</span>
              <ArrowDown size={15} className="text-lab-orange animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}