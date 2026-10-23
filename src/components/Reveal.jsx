import { useEffect, useRef, useState } from 'react';

/** Fades and slides its children in the first time they scroll into view. */
export default function Reveal({ children, delay = 0, style, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${shown ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </div>
  );
}
