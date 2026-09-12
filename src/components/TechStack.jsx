const stack = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    invert: true,
  },
];

export default function TechStack() {
  const doubled = [...stack, ...stack];
  return (
    <section className="skills">
      <div className="kicker">Teknologi</div>
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
    </section>
  );
}
