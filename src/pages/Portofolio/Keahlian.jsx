import { skills } from "../../data/skills";

export default function Keahlian() {
  const doubled = [...skills, ...skills];
  return (
    <div className="sub-block">
      <h3 className="sub-title">Keahlian</h3>
      <div className="skills-wrap">
        <div className="drift-track">
          {doubled.map((s, i) => (
            <span
              className={`chip ${i % 2 === 0 ? "on" : ""}`}
              key={`${s.name}-${i}`}
            >
              <img
                src={s.icon}
                alt={s.name}
                className={s.invert ? "invert" : ""}
              />
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
