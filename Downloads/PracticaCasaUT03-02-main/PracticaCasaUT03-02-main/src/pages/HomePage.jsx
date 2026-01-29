import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/index.css";

/**
 * Página de Inicio.
 * Vista de bienvenida con acceso a productos.
 */
export default function HomePage() {
  return (
    <section className="home-section">
      <div className="home-container">
        <h1 className="home-title">Frescura Natural en tu Hogar</h1>
        <p className="home-subtitle">
          Descubre nuestra selección de frutas y verduras de temporada, directamente del campo a tu mesa.
        </p>
        <div className="home-actions">
          <Link to="/productos" className="home-button">
            Ver Productos
          </Link>
        </div>
      </div>
    </section>
  );
}
