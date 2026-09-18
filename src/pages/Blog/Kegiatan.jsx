import Card from "../../components/card";
import { activities } from "../../data/activities";

export default function Kegiatan() {
  const [first, ...rest] = activities;

  return (
    <div className="sub-block">
      <h3 className="sub-title">Kegiatan</h3>

      {/* Baris 1: 1 kegiatan full width */}
      {first && (
        <div className="kegiatan-featured">
          <Card
            title={first.title}
            meta={first.date}
            desc={first.desc}
            image={first.image}
          />
        </div>
      )}

      {/* Baris berikut: 3 kegiatan per baris */}
      {rest.length > 0 && (
        <div className="kegiatan-grid">
          {rest.map((a) => (
            <Card
              key={a.title}
              title={a.title}
              meta={a.date}
              desc={a.desc}
              image={a.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
