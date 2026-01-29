import { Outlet } from "react-router-dom";
import Header from "./Header"; 
import Footer from "./Footer"; 
import "../assets/styles/index.css";

function Contenedor({ titulo }) {
  return (
    <div className="layout-contenedor">
      <Header />

      <main id="main-content" role="main" tabIndex="-1" className="layout-main">
        <section aria-labelledby="main-section-title" className="layout-section">
          {titulo && <h1 id="main-section-title" className="layout-titulo">{titulo}</h1>}
          <Outlet />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contenedor;
