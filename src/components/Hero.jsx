export default function Hero() {
  return (
    <header className="hero container-wrap" id="home">
      <div className="hero-kicker">
        RPL student
      </div>
      <h1>
        <span className="line">
          <span>Belajar, berkembang dan</span>
        </span>
        <span className="line">
          <span>
            berkembang <em> melalui </em> kode.
          </span>
        </span>
      </h1>
      <p className="role">
        Saya Syarla Alfina Rahmaputri, siswi Rekayasa Perangkat Lunak yang sedang belajar dan berkembang melalui berbagai proyek. Setiap proyek menjadi kesempatan untuk memahami web development dan mengubah ide menjadi sesuatu yang dapat digunakan.
      </p>
      <div className="cta-row pb-5">
        <a href="#project" className="btn-primary text-decoration-none">
          Lihat project
        </a>
        <a href="#contact" className="btn-ghost">
          Diskusi proyek
        </a>
      </div>
      <div className="scroll-cue">
        <div className="stem"></div>gulir
      </div>
    </header>
  );
}
