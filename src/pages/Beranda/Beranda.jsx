export default function Beranda() {
  return (
    <header className="hero container-wrap" id="beranda">
      <div className="hero-kicker">Siswi RPL</div>
      <h1>
        <span className="line">
          <span>Membangun, belajar dan</span>
        </span>
        <span className="line">
          <span>
            berkembang <em>melalui</em> kode.
          </span>
        </span>
      </h1>
      <p className="role">
        Saya Syarla Alfina Rahmaputri, siswi Rekayasa Perangkat Lunak yang
        sedang belajar dan berkembang melalui berbagai proyek. Setiap proyek
        menjadi kesempatan untuk memahami web development dan mengubah ide
        menjadi sesuatu yang dapat digunakan.
      </p>
      <div className="cta-row">
        <a href="#portofolio" className="btn-primary">
          Lihat portofolio
        </a>
        <a href="#kontak" className="btn-ghost">
          Diskusi proyek
        </a>
      </div>
      <div className="scroll-cue">
        <div className="stem"></div>gulir
      </div>
    </header>
  );
}
