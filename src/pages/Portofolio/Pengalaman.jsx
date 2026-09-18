import { useEffect, useRef } from "react";
import { experience } from "../../data/experience";

export default function Pengalaman() {
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
      <h3 className="sub-title">Pengalaman</h3>
      <div className="exp-timeline" ref={timelineRef}>
        <div className="exp-fill" ref={fillRef}></div>

        {experience.map((e) => (
          <div className="edu-item left" key={e.role + e.place}>
            <div className="edu-dot"></div>
            <span className="edu-period">{e.period}</span>
            <div className="edu-school">{e.role}</div>
            <div className="edu-major">{e.place}</div>
            {e.desc && <p className="edu-desc">{e.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
