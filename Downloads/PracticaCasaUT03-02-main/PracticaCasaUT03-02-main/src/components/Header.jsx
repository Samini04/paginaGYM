// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import "../assets/styles/index.css";

/**
 * Encabezado Global
 * Contiene Logo y menú de navegación principal
 */
export default function Header() {
  return (
    <header role="banner" className="header">
      <div className="header-container"> {/* <-- Este es el contenedor Flexbox */}
        {/* Logo / Título */}
        <Link to="/" className="header-logo" aria-label="Inicio - TerraBloom">
          <span>TerraBloom</span>
        </Link>

        <Nav /> {/* <-- Este elemento tiene el botón y el menú */}
      </div>
    </header>
  );
}