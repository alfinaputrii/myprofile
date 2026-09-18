import { useParams, Link } from "react-router-dom";
import { articles } from "../../data/articles";

export default function ArtikelDetail() {
  const { slug } = useParams();
  const artikel = articles.find((a) => a.slug === slug);

  if (!artikel) {
    return (
      <div className="container-wrap artikel-detail">
        <h2 className="section-title">Artikel tidak ditemukan</h2>
        <Link to="/" className="btn-ghost">
          ← Kembali ke beranda
        </Link>
      </div>
    );
  }

  return (
    <article className="container-wrap artikel-detail">
      <Link to="/" className="back-link">
        ← Kembali
      </Link>
      <div className="kicker">{artikel.date}</div>
      <h1 className="artikel-title">{artikel.title}</h1>
      <div className="artikel-body">
        {artikel.content.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
