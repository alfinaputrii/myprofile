import Card from "../../components/card";
import { articles } from "../../data/articles";

export default function ArtikelBlog() {
  return (
    <div className="sub-block">
      <h3 className="sub-title">Artikel</h3>
      <div className="row g-4 project-grid-row">
        {articles.map((a) => (
          <div className="col-md-6" key={a.slug}>
            <Card
              title={a.title}
              meta={a.date}
              desc={a.excerpt}
              image={a.image}
              url={`/artikel/${a.slug}`}
              internal
              label="Baca selengkapnya"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
