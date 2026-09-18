import TentangSaya from "./TentangSaya";
import ProfilProfesional from "./ProfilProfesional";
import Pendidikan from "./Pendidikan";

export default function Tentang() {
  return (
    <section className="about" id="tentang">
      <div className="kicker">Tentang</div>
      <TentangSaya />
      <ProfilProfesional />
      <Pendidikan />
    </section>
  );
}
