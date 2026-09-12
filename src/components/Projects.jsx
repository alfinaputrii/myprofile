import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="work" id="project">
      <div className="kicker">Proyek</div>
      <h2 className="section-title">
        Beberapa proyek yang pernah dikerjakan.
      </h2>
      <div className="row g-4 project-grid-row">
        {projects.map((p) => (
          <div className="col-md-6" key={p.title}>
            <ProjectCard
              title={p.title}
              desc={p.desc}
              tags={p.tags}
              image={p.image}
              url={p.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
