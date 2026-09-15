import { Instagram } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import PerryEasterEgg from "../shared/PerryEasterEgg";

export default function Footer() {
  return (
    <footer className="relative bg-lab-black border-t border-lab-orange/15 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-lab-cream/40 text-xs tracking-wide">
          © 2026 {eventConfig.clubName} — {eventConfig.eventName}
        </p>

        <div className="flex items-center gap-5">
          {eventConfig.instagramUrl && (
            <a
              href={eventConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ARMS Instagram"
              className="text-lab-cream/50 hover:text-lab-orange transition-colors"
            >
              <Instagram size={18} />
            </a>
          )}
          <PerryEasterEgg />
        </div>
      </div>
    </footer>
  );
}