import { ArrowUpRight } from "lucide-react";
import SpecularButton from "./SpecularButton";
import { eventConfig } from "../../config/eventConfig";

export default function RegisterButton({
  size = "md",
  label = "REGISTER",
  children,
  className = "",
  showArrow = true,
  radius = 18,
  tint = "#ffffff",
  tintOpacity = 0,
  blur = 0,
  textColor = "#f5f5f5",
  lineColor = "#ffffff",
  baseColor = "#525252",
  intensity = 1,
  shineSize = 10,
  shineFade = 40,
  thickness = 1,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  href = eventConfig?.unstopUrl ?? "https://unstop.com",
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}) {
  return (
    <SpecularButton
      size={size}
      radius={radius}
      tint={tint}
      tintOpacity={tintOpacity}
      blur={blur}
      textColor={textColor}
      lineColor={lineColor}
      baseColor={baseColor}
      intensity={intensity}
      shineSize={shineSize}
      shineFade={shineFade}
      thickness={thickness}
      speed={speed}
      followMouse={followMouse}
      proximity={proximity}
      autoAnimate={autoAnimate}
      href={href}
      target={target}
      rel={rel}
      className={`font-semibold tracking-wider group ${className}`}
      {...props}
    >
      <span className="inline-flex items-center gap-2">
        {children || label}
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 text-lab-orange transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </SpecularButton>
  );
}