import { useState } from "react";
import Karya from "./Karya";
import Sertifikat from "./Sertifikat";
import Keahlian from "./Keahlian";
import Pengalaman from "./Pengalaman";

const tabs = [
  { id: "keahlian", label: "Keahlian" },
  { id: "karya", label: "Karya" },
  { id: "sertifikat", label: "Sertifikat" },
];

export default function Portofolio() {
  const [active, setActive] = useState("karya");

  return (
    <section className="work" id="portofolio">
      <div className="pf-header">
        <div className="kicker">Portofolio</div>
        <h2 className="pf-title">Karya & Perjalanan</h2>
        <p className="pf-sub">
          Jelajahi karya, sertifikat, dan keahlian yang saya bangun selama
          belajar di dunia pengembangan web.
        </p>
      </div>

      <div className="pf-tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`pf-tab ${active === t.id ? "active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="pf-content">
        {active === "keahlian" && <Keahlian />}
        {active === "karya" && <Karya />}
        {active === "sertifikat" && <Sertifikat />}
      </div>

      <Pengalaman />
    </section>
  );
}
