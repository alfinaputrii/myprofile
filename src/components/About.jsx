export default function About() {
  return (
    <section className="about row align-items-center" id="about">
      <div className="col-md-5">
        <img src="/me.png" alt="Syarla Alfina" className="portrait" />
      </div>
      <div className="col-md-7 about-text pe-0">
        <div className="kicker">About</div>
        <h2 className="section-title pb-3">Exploring, creating, and growing in technology.</h2>

        <p style={{fontSize: "19px"}}>
          Saya Syarla Alfina Rahmaputri, siswi <strong> Rekayasa Perangkat Lunak di SMK Negeri 1 Jenangan</strong> yang sedang mendalami dunia web development. Selama belajar di SMK, saya terus mengembangkan kemampuan melalui berbagai project, mencoba hal-hal baru, dan belajar memahami bagaimana sebuah website dapat dibangun dari ide hingga menjadi sesuatu yang dapat digunakan.
        </p>

        <div className="info-grid">
          <div className="info-box">
            <span className="info-label">Sekolah</span>
            <span className="info-value">SMKN 1 JENANGAN <br></br> PONOROGO</span>
          </div>
          <div className="info-box">
            <span className="info-label">Jurusan</span>
            <span className="info-value">Rekayasa Perangkat <br></br> Lunak</span>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-box">
            <span className="info-label">Kelas</span>
            <span className="info-value fs-5">XII RPL C</span>
          </div>
          <div className="info-box">
            <span className="info-label">Domilisi</span>
            <span className="info-value">Kadipaten, Babadan, Ponorogo</span>
          </div>
        </div>
      </div>
    </section>
  )
}