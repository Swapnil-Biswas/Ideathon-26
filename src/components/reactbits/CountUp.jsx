import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  suffix = '',
  prefix = ''
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof delay === 'number' && delay > 0) {
        const timer = setTimeout(() => {
          motionValue.set(direction === 'down' ? from : to);
        }, delay * 1000);
        return () => clearTimeout(timer);
      }
      motionValue.set(direction === 'down' ? from : to);
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat('en-US').format(Math.round(latest));
        ref.current.textContent = `${prefix}${separator ? formatted.replace(/,/g, separator) : formatted}${suffix}`;
      }
    });
  }, [springValue, separator, suffix, prefix]);

  return <span className={className} ref={ref} />;
}
