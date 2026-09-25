import { useState } from "react";
import Card from "../../components/card";
import { certificates } from "../../data/certificates";

export default function Sertifikat() {
  const [preview, setPreview] = useState(null);

  return (
    <>
      <div className="row g-4 project-grid-row">
        {certificates.map((c) => (
          <div className="col-md-6" key={c.title}>
            <div
              onClick={() => c.image && setPreview(c.image)}
              style={{ cursor: c.image ? "zoom-in" : "default" }}
            >
              <Card
                title={c.title}
                meta={`${c.issuer} · ${c.year}`}
                image={c.image}
              />
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div className="lightbox" onClick={() => setPreview(null)}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setPreview(null);
            }}
            aria-label="Tutup"
          >
            X
          </button>
          <img src={preview} alt="Preview sertifikat" />
        </div>
      )}
    </>
  );
}
