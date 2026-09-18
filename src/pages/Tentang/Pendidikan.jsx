import { useEffect, useRef } from "react";
import { educationHistory } from "../../data/educationHistory";

export default function Pendidikan() {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const fill = fillRef.current;
    if (!timeline || !fill) return;

    const updateTimeline = () => {
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.85;
      const total = rect.height + vh * 0.3;
      const scrolled = start - rect.top;
      let progress = scrolled / total;
      progress = Math.max(0, Math.min(1, progress));
      fill.style.height = progress * 100 + "%";
    };

    window.addEventListener("scroll", updateTimeline);
    window.addEventListener("resize", updateTimeline);
    updateTimeline();

    // animasi tiap item muncul berurutan
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "0px 0px -25% 0px" },
    );

    const items = timeline.querySelectorAll(".edu-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="sub-block">
      <h3 className="sub-title">Pendidikan</h3>
      <div className="edu-timeline" ref={timelineRef}>
        <div className="timeline-fill" ref={fillRef}></div>

        {educationHistory.map((e, i) => (
          <div
            className={`edu-item ${i % 2 === 0 ? "left" : "right"}`}
            key={e.sekolah}
          >
            <div className="edu-dot"></div>
            <span className="edu-period">{e.tahun}</span>
            <div className="edu-school">{e.sekolah}</div>
            <div className="edu-major">{e.jurusan}</div>
            {e.desc && <p className="edu-desc">{e.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
