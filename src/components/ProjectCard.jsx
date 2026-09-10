import { useRef } from "react";

export default function ProjectCard({ title, desc, tags, image, url }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      className={`project-card ${!url ? "no-link" : ""}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      {...wrapperProps}
    >
      <div className="pc-glow"></div>
      <div className="pc-thumb">{image && <img src={image} alt={title} />}</div>
      <div className="pc-body">
        <div className="wtitle">{title}</div>
        <div className="wdesc">{desc}</div>
        <div className="wtags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="pc-link">
        {url && (
          <>
            Lihat project <span className="arrow">↗</span>
          </>
        )}
      </div>
    </Wrapper>
  );
}
