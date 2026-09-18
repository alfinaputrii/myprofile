import Kegiatan from "./Kegiatan";
import ArtikelBlog from "./ArtikelBlog";

export default function Blog() {
  return (
    <section className="blog-page" id="blog">
      <div className="kicker">Blog</div>
      <h2 className="section-title">
        Kegiatan dan tulisan seputar proses belajar.
      </h2>
      <Kegiatan />
      <ArtikelBlog />
    </section>
  );
}
