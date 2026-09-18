import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda/Beranda";
import Tentang from "./pages/Tentang/Tentang";
import Portofolio from "./pages/Portofolio/Portofolio";
import Blog from "./pages/Blog/Blog";
import Kontak from "./pages/Kontak/Kontak";
import ArtikelDetail from "./pages/Blog/ArtikelDetail";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <main className="container-wrap">
      <Tentang />
      <Portofolio />
      <Blog />
      <Kontak />
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Beranda />
              <HomePage />
            </>
          }
        />
        <Route path="/artikel/:slug" element={<ArtikelDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
