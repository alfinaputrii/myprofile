import Card from "../../components/card";
import { projects } from "../../data/projects";

export default function Karya() {
  return (
    <div className="sub-block">
      <h3 className="sub-title">Karya</h3>
      <div className="row g-4 project-grid-row">
        {projects.map((p) => (
          <div className="col-md-6" key={p.title}>
            <Card
              title={p.title}
              desc={p.desc}
              tags={p.tags}
              image={p.image}
              url={p.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
