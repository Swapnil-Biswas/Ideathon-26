import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Play } from "lucide-react";

const diagnosticProtocols = [
  "PROTOCOL 01: DUAL-AXIS MECHATRONIC ACTUATION INITIALIZED",
  "PROTOCOL 02: HIGH-TORQUE STEPPER MATRIX CALIBRATED",
  "PROTOCOL 03: SUB-HERTZ LIDAR TELEMETRY VERIFIED",
  "PROTOCOL 04: EDGE-COMPUTE TENSOR ENGINE SYNCHRONIZED",
  "PROTOCOL 05: ULTRA-WIDEBAND TELEMETRY STREAM ACTIVE",
  "PROTOCOL 06: MULTI-TIER SENSOR FUSION ONLINE: READY FOR FABRICATION",
];

export default function InventionLab() {
  const [active, setActive] = useState(false);
  const [protocol, setProtocol] = useState(diagnosticProtocols[0]);
  const [cycleCount, setCycleCount] = useState(1);

  const handleTrigger = () => {
    if (active) return;
    const nextIdx = Math.floor(Math.random() * diagnosticProtocols.length);
    setProtocol(diagnosticProtocols[nextIdx]);
    setCycleCount((prev) => prev + 1);
    setActive(true);
    setTimeout(() => setActive(false), 2500);
  };

  return (
    <section className="relative bg-lab-charcoal py-28 px-6 overflow-hidden">
      {/* Background video with deep atmospheric blend */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
      >
        <source src="/assets/phineas-ferb-silhouette.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-lab-charcoal/80 pointer-events-none" />

      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lab-black border border-lab-orange/30 backdrop-blur-md mb-4">
          <Terminal className="w-3.5 h-3.5 text-lab-orange" />
          <span className="font-oxanium text-xs tracking-[0.22em] text-lab-cream/85 uppercase">
            THE INVENTION LAB
          </span>
        </div>

        <h2 className="font-oxanium text-3xl sm:text-5xl font-black text-lab-cream tracking-wide uppercase mb-4">
          FERB, I KNOW WHAT <br />
          WE'RE GONNA <span className="text-lab-orange">BUILD.</span>
        </h2>

        <p className="text-lab-cream/70 text-sm sm:text-base max-w-xl mx-auto mb-10 font-body">
          Interactive testbench console for testing algorithmic sequences and mechatronics logic prior to hardware prototyping.
        </p>

        {/* Console Box */}
        <div className="relative bg-lab-black/90 border border-lab-orange/35 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md overflow-hidden text-left">
          {/* Corner HUD accents */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-lab-orange" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-lab-orange" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-lab-orange" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-lab-orange" />

          {/* Console Header */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-4 h-4 text-lab-orange" />
              <span className="font-mono text-xs font-semibold tracking-wider text-lab-cream/90">
                PROTOTYPE TELEMETRY BENCH // CYCLE #{String(cycleCount).padStart(3, "0")}
              </span>
            </div>
            <span className="text-[11px] font-mono text-lab-cream/40 tracking-widest">
              BMSIT-ARMS-LAB-01
            </span>
          </div>

          {/* Code Terminal Output Window */}
          <div className="bg-black/60 rounded-xl p-5 sm:p-6 border border-white/[0.06] mb-6 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-lab-cream/40 text-[11px] mb-3">
              <span>HOST: arm-kernel-v4</span>
              <span>•</span>
              <span>ARCH: ARM64-RTOS</span>
            </div>
            <div className="text-lab-cream/80 min-h-[48px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={protocol}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-lab-orange font-mono font-medium tracking-wide"
                >
                  &gt; {protocol}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Console Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs font-mono text-lab-cream/50 tracking-wider">
              STATUS: {active ? "PROCESSING DIAGNOSTIC" : "STANDBY READY"}
            </div>

            <button
              onClick={handleTrigger}
              disabled={active}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-lab-orange text-lab-black font-oxanium text-xs font-bold tracking-widest uppercase hover:bg-lab-glow transition-all duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{active ? "SIMULATING..." : "EXECUTE DIAGNOSTIC"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}