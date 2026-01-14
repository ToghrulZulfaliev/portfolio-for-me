import { useRef } from "react";

export default function useTilt({ max = 12, perspective = 900, scale = 1.02 } = {}) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotY = ((x - midX) / midX) * max; // sağ-sol
    const rotX = -((y - midY) / midY) * max; // yuxarı-aşağı

    el.style.transform = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const onMouseEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.style.willChange = "transform";
  };

  return { ref, onMouseMove, onMouseLeave, onMouseEnter };
}
