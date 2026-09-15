import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, Calendar, MapPin, Sparkles } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import RegisterButton from "../shared/RegisterButton";

function HeroEmbers() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particleCount = 45;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: window.innerWidth * (0.3 + Math.random() * 0.4),
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.9 + 0.3),
        speedX: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        color: Math.random() > 0.3 ? "#f2792a" : "#ffb347",
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = canvas.height;
          p.x = canvas.width * (0.35 + Math.random() * 0.3);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 opacity-75"
    />
  );
}

function DrillTipSparkles() {
  const sparks = [
    { dx: 16, dy: -12, delay: 0, duration: 0.65, size: 2 },
    { dx: 24, dy: -8, delay: 0.2, duration: 0.55, size: 2.5 },
    { dx: 20, dy: -20, delay: 0.45, duration: 0.75, size: 3 },
    { dx: 30, dy: -14, delay: 0.1, duration: 0.6, size: 1.8 },
    { dx: 12, dy: -24, delay: 0.65, duration: 0.7, size: 2.2 },
    { dx: 26, dy: -25, delay: 0.35, duration: 0.8, size: 2 },
  ];

  return (
    <div className="absolute top-[34%] left-[88%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 select-none">
      {/* 1. Ambient Arc Flash Bloom (rapid high-frequency micro-flicker) */}
      <motion.div
        animate={{
          scale: [0.9, 1.4, 1, 1.45, 0.95],
          opacity: [0.55, 0.95, 0.65, 1, 0.6],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute -inset-3 bg-radial from-amber-400/90 via-lab-orange/50 to-transparent rounded-full blur-[4px]"
      />

      {/* 2. Plasma Core Flame Lick (aligned with nozzle axis, pointing ~30 deg up-right) */}
      <motion.div
        animate={{
          scaleX: [0.85, 1.3, 0.8, 1.35, 0.9],
          scaleY: [0.9, 1.15, 0.85, 1.2, 0.9],
          opacity: [0.8, 1, 0.75, 1, 0.8],
        }}
        transition={{
          duration: 0.28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-6 h-2 -translate-y-1/2 origin-left -rotate-[28deg] bg-gradient-to-r from-white via-amber-300 to-transparent rounded-full blur-[0.8px] shadow-[0_0_10px_#ffb347]"
      />

      {/* 3. Intense White-Hot Arc Center Point */}
      <motion.div
        animate={{
          scale: [0.85, 1.35, 0.9, 1.3, 0.85],
          opacity: [0.9, 1, 0.85, 1, 0.9],
        }}
        transition={{
          duration: 0.16,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="relative w-2 h-2 rounded-full bg-white shadow-[0_0_12px_3px_#ffea79,0_0_24px_6px_#f2792a]"
      />

      {/* 4. Four-point Glint Starburst Shimmer */}
      <motion.svg
        viewBox="0 0 24 24"
        animate={{
          rotate: [0, 45, 90, 135, 180],
          scale: [0.75, 1.3, 0.7, 1.4, 0.8],
          opacity: [0.7, 1, 0.6, 1, 0.7],
        }}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-2.5 -left-2.5 w-7 h-7 text-amber-100 pointer-events-none drop-shadow-[0_0_8px_#ffffff]"
        fill="currentColor"
      >
        <path d="M12 0 L13.8 8.2 L22 12 L13.8 15.8 L12 24 L10.2 15.8 L2 12 L10.2 8.2 Z" />
      </motion.svg>

      {/* 5. Molten Sparks Spraying Outward */}
      {sparks.map((spark, idx) => (
        <motion.span
          key={idx}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{
            x: [0, spark.dx * 0.4, spark.dx],
            y: [0, spark.dy * 0.4, spark.dy],
            opacity: [1, 1, 0],
            scale: [spark.size * 0.5, spark.size, 0],
          }}
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            delay: spark.delay,
            ease: "easeOut",
          }}
          style={{ width: spark.size, height: spark.size }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200 shadow-[0_0_6px_#f2792a]"
        />
      ))}
    </div>
  );
}

function AnimatedPhineas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      className="hidden md:block absolute bottom-4 sm:bottom-6 lg:bottom-8 left-3 sm:left-6 lg:left-10 xl:left-16 z-20 pointer-events-none select-none"
    >
      {/* Realistic Cinematic Idle Motion */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          scale: [1, 1.008, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Soft Ambient Environmental Glow */}
        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-lab-orange/20 blur-2xl rounded-full scale-90 -z-10"
        />

        {/* Realistic Contact Shadow on Floor */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-3.5 bg-black/85 blur-[4px] rounded-[100%]" />

        {/* Character Image */}
        <img
          src="/assets/hero-phineas.png"
          alt="Phineas Flynn"
          className="w-28 sm:w-32 lg:w-36 xl:w-44 h-auto object-contain select-none filter contrast-[1.06] brightness-[1.02] drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
          style={{
            maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
          }}
        />

        {/* Sparkling Plasma Arc at the Tip of the Drill/Welder */}
        <DrillTipSparkles />
      </motion.div>
    </motion.div>
  );
}

function AnimatedFerb() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.45, ease: "easeOut" }}
      className="hidden md:block absolute bottom-4 sm:bottom-6 lg:bottom-8 right-3 sm:right-6 lg:right-10 xl:right-16 z-20 pointer-events-none select-none"
    >
      {/* Realistic Cinematic Idle Motion */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          scale: [1, 1.008, 1],
        }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="relative"
      >
        {/* Soft Ambient Environmental Glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute inset-0 bg-cyan-500/15 blur-2xl rounded-full scale-90 -z-10"
        />

        {/* Realistic Contact Shadow on Floor */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-3.5 bg-black/85 blur-[4px] rounded-[100%]" />

        {/* Character Image */}
        <img
          src="/assets/hero-ferb.png"
          alt="Ferb Fletcher"
          className="w-28 sm:w-32 lg:w-36 xl:w-44 h-auto object-contain select-none filter contrast-[1.06] brightness-[1.02] drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
          style={{
            maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-lab-black overflow-hidden flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6"
    >
      {/* Colossal Center Portal Background */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      >
        <img
          src="/assets/conceptia-hero-portal.jpg"
          alt="Conceptia Tech Portal"
          className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.15]"
        />
      </motion.div>

      {/* Atmospheric Vignette & Radial Light Overlays */}
      <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-lab-orange/15 via-transparent to-lab-black/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-lab-black via-lab-black/50 to-lab-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-lab-black via-transparent to-lab-black pointer-events-none opacity-80" />

      {/* Central Ascending Light Pillar Beam */}
      <div className="absolute inset-x-0 top-0 bottom-1/3 flex justify-center pointer-events-none">
        <div className="w-1 sm:w-1.5 h-full bg-gradient-to-b from-transparent via-lab-glow to-lab-orange opacity-70 blur-[3px] animate-beam-pulse" />
        <div className="absolute w-16 sm:w-28 h-full bg-gradient-to-b from-transparent via-lab-orange/20 to-transparent blur-xl pointer-events-none" />
      </div>

      {/* Floating Ambient Embers */}
      <HeroEmbers />

      {/* Subtle Parallax Grid */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
      />

      {/* Main Centered Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-5xl mx-auto w-full z-20 flex flex-col items-center text-center"
      >
        {/* Top Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lab-charcoal/80 border border-lab-orange/30 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lab-orange" />
          <span className="font-oxanium text-xs font-semibold tracking-[0.22em] text-lab-cream/90 uppercase">
            ARMS BMSIT PRESENTS
          </span>
        </motion.div>

        {/* Futuristic Top Rail Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full max-w-lg sm:max-w-xl flex items-center justify-center gap-2 sm:gap-3 mb-3"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-lab-orange/60 to-lab-glow" />
          <div className="w-1.5 h-1.5 rotate-45 border border-lab-orange bg-lab-black shadow-[0_0_8px_#f2792a]" />
          <div className="h-[2px] w-24 sm:w-44 bg-gradient-to-r from-lab-orange via-lab-glow to-lab-orange shadow-[0_0_12px_#ffb347]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-lab-orange bg-lab-black shadow-[0_0_8px_#f2792a]" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-lab-orange/60 to-lab-glow" />
        </motion.div>

        {/* Main Title: Crisp Bold Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative my-1"
        >
          {/* Ambient Behind-Text Glow */}
          <div className="absolute inset-0 bg-lab-orange/20 blur-3xl -z-10 rounded-full scale-125 pointer-events-none" />

          <h1 className="font-oxanium text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.14em] sm:tracking-[0.2em] leading-none uppercase select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-lab-orange filter drop-shadow-[0_0_35px_rgba(242,121,42,0.5)]">
            CONCEPTIA
          </h1>
        </motion.div>

        {/* Tech Motto Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mt-3 mb-4 text-lab-cream/80 text-[11px] sm:text-xs md:text-sm font-rajdhani font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase"
        >
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-lab-orange/50" />
          <span>CODE</span>
          <span className="text-lab-orange/40">•</span>
          <span>INNOVATE</span>
          <span className="text-lab-orange/40">•</span>
          <span>BUILD</span>
          <span className="text-lab-orange/40">•</span>
          <span>WIN</span>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-lab-orange/50" />
        </motion.div>

        {/* Cyber HUD Edition Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative my-2 inline-flex items-center justify-center"
        >
          <div className="relative px-7 py-1.5 font-oxanium text-xl sm:text-2xl font-bold tracking-[0.25em] text-lab-orange">
            {/* Tech HUD Corner Brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lab-orange" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lab-orange" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lab-orange" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lab-orange" />

            {/* Small horizontal edge markers */}
            <div className="absolute top-1/2 -left-3 w-2 h-px bg-lab-orange/60" />
            <div className="absolute top-1/2 -right-3 w-2 h-px bg-lab-orange/60" />

            <span className="text-glow-orange font-black">2026</span>
          </div>
        </motion.div>

        {/* Hook Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-6 mb-3 font-oxanium font-bold text-base sm:text-2xl md:text-3xl tracking-[0.14em] sm:tracking-[0.2em] text-lab-cream text-glow-amber"
        >
          <span>3 ROUNDS</span>
          <span className="text-lab-orange mx-2 sm:mx-4">•</span>
          <span>50 TEAMS CAPPED</span>
          <span className="text-lab-orange mx-2 sm:mx-4">•</span>
          <span>₹15,000 PRIZE POOL</span>
        </motion.div>

        {/* Centered Contextual Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lab-cream/80 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 font-body"
        >
          A premier one-day ideation challenge organized by ARMS at BMSIT&amp;M — solve real-world industry problem statements, pitch to corporate judges, and win cash prizes plus fast-tracked internship opportunities.
        </motion.p>

        {/* Centered Date & Venue Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-6 py-2.5 rounded-full bg-lab-charcoal/75 border border-lab-orange/40 backdrop-blur-md text-lab-cream/90 text-xs sm:text-sm font-mono tracking-wider mb-8 shadow-[0_0_25px_rgba(242,121,42,0.15)] hover:border-lab-orange/75 transition-all duration-300"
        >
          <div className="flex items-center gap-2 text-lab-cream">
            <Calendar className="w-4 h-4 text-lab-orange" />
            <span className="font-semibold">{eventConfig.eventDate}</span>
          </div>
          <span className="text-lab-orange/50 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-lab-cream/80">
            <MapPin className="w-4 h-4 text-lab-orange" />
            <span>{eventConfig.venue}</span>
          </div>
          <span className="text-lab-orange/50 hidden sm:inline">•</span>
          <span className="text-emerald-400 font-semibold uppercase text-[11px] sm:text-xs">FREE ENTRY</span>
        </motion.div>

        {/* Action Buttons Centered */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
        >
          <RegisterButton label="REGISTER YOUR TEAM" size="lg" className="w-full sm:w-auto" />
          <a
            href="/guidelines"
            className="w-full sm:w-auto text-lab-cream/85 text-xs sm:text-sm font-oxanium tracking-widest font-semibold hover:text-lab-orange hover:border-lab-orange/60 transition-all duration-300 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/15 bg-white/[0.03] backdrop-blur-sm shadow-md"
          >
            <span>EXPLORE GUIDELINES</span>
            <ArrowDown size={15} className="text-lab-orange" />
          </a>
        </motion.div>
      </motion.div>

      {/* Flanking Animated Characters: Phineas (Left) & Ferb (Right) */}
      <AnimatedPhineas />
      <AnimatedFerb />
    </section>
  );
}