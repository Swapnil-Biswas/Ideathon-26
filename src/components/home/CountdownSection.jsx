import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Activity, Flag } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import SpotlightCard from "../reactbits/SpotlightCard";

function getTimeLeft() {
  const target = new Date(eventConfig.countdownDate).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Exact 3x5 matrix block sliding offsets from the prompt animation
function getBlockOffsets(digit, step) {
  const d = Math.max(0, Math.min(9, digit || 0));
  const twoSteps = 2 * step;

  const table = {
    div1:  [0, twoSteps, 0, 0, 0, 0, 0, 0, 0, 0],
    div2:  [0, step, 0, 0, step, 0, 0, 0, 0, 0],
    div4:  [0, twoSteps, twoSteps, twoSteps, 0, 0, 0, twoSteps, 0, 0],
    div6:  [0, 0, 0, 0, 0, -twoSteps, -twoSteps, 0, 0, 0],
    div7:  [0, twoSteps, 0, 0, 0, 0, 0, twoSteps, 0, 0],
    div8:  [step, step, 0, 0, 0, 0, 0, step, 0, 0],
    div10: [0, twoSteps, 0, twoSteps, twoSteps, twoSteps, 0, twoSteps, 0, twoSteps],
    div12: [0, 0, -twoSteps, 0, 0, 0, 0, 0, 0, 0],
    div13: [0, twoSteps, 0, 0, twoSteps, 0, 0, twoSteps, 0, 0],
    div14: [0, step, 0, 0, step, 0, 0, step, 0, 0],
  };

  return {
    div1: table.div1[d],
    div2: table.div2[d],
    div3: 0,
    div4: table.div4[d],
    div6: table.div6[d],
    div7: table.div7[d],
    div8: table.div8[d],
    div9: 0,
    div10: table.div10[d],
    div12: table.div12[d],
    div13: table.div13[d],
    div14: table.div14[d],
    div15: 0,
  };
}

function MatrixDigit({ digit }) {
  // 14px cell with 5px gap on desktop, 11px cell with 4px gap on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cellSize = isMobile ? 12 : 16;
  const cellGap = isMobile ? 4.5 : 6.5;
  const step = cellSize + cellGap;

  const offsets = getBlockOffsets(digit, step);

  const blockStyle = (dx) => ({
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    backgroundColor: "#f2792a",
    borderRadius: "4px",
    boxShadow: "0 0 14px rgba(242, 121, 42, 0.75), 0 0 28px rgba(242, 121, 42, 0.35)",
    transform: `translateX(${dx}px)`,
    transition: "transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)",
    willChange: "transform",
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(3, ${cellSize}px)`,
        gridTemplateRows: `repeat(5, ${cellSize}px)`,
        gap: `${cellGap}px`,
        gridTemplateAreas: `
          "div1 div2 div3"
          "div4 div5 div6"
          "div7 div8 div9"
          "div10 div11 div12"
          "div13 div14 div15"
        `,
      }}
      className="select-none"
    >
      <div style={{ ...blockStyle(offsets.div1), gridArea: "div1" }} />
      <div style={{ ...blockStyle(offsets.div2), gridArea: "div2" }} />
      <div style={{ ...blockStyle(offsets.div3), gridArea: "div3" }} />
      <div style={{ ...blockStyle(offsets.div4), gridArea: "div4" }} />
      {/* div5 is intentionally display:none in the prompt */}
      <div style={{ ...blockStyle(offsets.div6), gridArea: "div6" }} />
      <div style={{ ...blockStyle(offsets.div7), gridArea: "div7" }} />
      <div style={{ ...blockStyle(offsets.div8), gridArea: "div8" }} />
      <div style={{ ...blockStyle(offsets.div9), gridArea: "div9" }} />
      <div style={{ ...blockStyle(offsets.div10), gridArea: "div10" }} />
      {/* div11 is intentionally display:none in the prompt */}
      <div style={{ ...blockStyle(offsets.div12), gridArea: "div12" }} />
      <div style={{ ...blockStyle(offsets.div13), gridArea: "div13" }} />
      <div style={{ ...blockStyle(offsets.div14), gridArea: "div14" }} />
      <div style={{ ...blockStyle(offsets.div15), gridArea: "div15" }} />
    </div>
  );
}

function MatrixPair({ value }) {
  const str = String(value).padStart(2, "0");
  const d1 = parseInt(str[0], 10);
  const d2 = parseInt(str[1], 10);

  return (
    <div className="flex items-center justify-center gap-3.5 sm:gap-5 py-2">
      <MatrixDigit digit={d1} />
      <MatrixDigit digit={d2} />
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = timeLeft
    ? [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
      ]
    : [];

  return (
    <section className="relative bg-lab-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.06]">
      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-lab-orange/[0.09] rounded-full blur-[160px] pointer-events-none" />

      {/* Blueprint grid accent */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10 text-center">
        {/* Proper Tech Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lab-charcoal/90 border border-lab-orange/40 backdrop-blur-md mb-5 shadow-lg shadow-black/50"
        >
          <Clock className="w-4 h-4 text-lab-orange animate-pulse" />
          <span className="font-oxanium text-xs font-bold tracking-[0.25em] text-lab-cream uppercase">
            TEMPORAL SYNC // T-MINUS TO LAUNCH
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-oxanium text-3xl sm:text-5xl lg:text-6xl font-black text-lab-cream tracking-[0.02em] uppercase mb-4"
        >
          THE COUNTDOWN TO{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_24px_rgba(242,121,42,0.45)]">
            INNOVATION
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-rajdhani font-semibold text-xs sm:text-sm md:text-base text-lab-cream/70 tracking-[0.2em] uppercase max-w-xl mx-auto mb-16"
        >
          OCTOBER 14, 2026 • 09:00 AM IST • BMSIT&amp;M BENGALURU
        </motion.p>

        {/* 4 Cards Grid with Bright Orange Matrix Digits & Sliding Transitions */}
        {timeLeft ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {units.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.25)"
                  className="relative h-full bg-lab-charcoal/85 border-white/[0.08] hover:border-lab-orange/50 px-6 py-8 sm:px-8 sm:py-10 rounded-2xl flex flex-col items-center justify-between backdrop-blur-xl shadow-2xl transition-all duration-300 group"
                >
                  {/* Matrix Digits Display */}
                  <div className="my-auto py-2 sm:py-4">
                    <MatrixPair value={unit.value} />
                  </div>

                  {/* Bottom Unit Label */}
                  <div className="w-full mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-lab-orange/70" />
                    <span className="font-oxanium text-xs sm:text-sm font-bold text-lab-cream tracking-[0.25em] group-hover:text-amber-300 transition-colors uppercase">
                      {unit.label}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-6 rounded-2xl bg-lab-orange/10 border border-lab-orange/40"
          >
            <Flag className="w-8 h-8 text-lab-orange" />
            <span className="font-oxanium text-2xl sm:text-4xl font-black text-lab-orange tracking-wider">
              THE INVENTION HAS BEGUN!
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
