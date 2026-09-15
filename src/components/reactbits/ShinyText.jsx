import './ShinyText.css';

export default function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = '',
  children
}) {
  const content = text || children;
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {content}
    </span>
  );
}
