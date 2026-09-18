export default function TentangSaya() {
  return (
    <div className="row align-items-center tentang-saya">
      <div className="col-md-5">
        <img src="/me.png" alt="Syarla Alfina" className="portrait" />
      </div>
      <div className="col-md-7 about-text">
        <h2 className="section-title">
                Belajar, berkarya, dan berkembang di dunia teknologi.
        </h2>
        <p style={{ fontSize: "19px" }}>
          Saya Syarla Alfina Rahmaputri, siswi{" "}
          <strong>Rekayasa Perangkat Lunak di SMK Negeri 1 Jenangan</strong>{" "}
          yang sedang mendalami dunia web development. Selama belajar di SMK,
          saya terus mengembangkan kemampuan melalui berbagai proyek, mencoba
          hal-hal baru, dan belajar memahami bagaimana sebuah website dapat
          dibangun dari ide hingga menjadi sesuatu yang dapat digunakan.
        </p>
      </div>
    </div>
  );
}
