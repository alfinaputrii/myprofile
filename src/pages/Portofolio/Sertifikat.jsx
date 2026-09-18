import Card from "../../components/card";
import { certificates } from "../../data/certificates";

export default function Sertifikat() {
  return (
    <div className="sub-block">
      <h3 className="sub-title">Sertifikat / Prestasi</h3>
      <div className="row g-4 project-grid-row">
        {certificates.map((c) => (
          <div className="col-md-6" key={c.title}>
            <Card
              title={c.title}
              meta={`${c.issuer} · ${c.year}`}
              image={c.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
