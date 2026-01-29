import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productos from '../data/productos';
import "../assets/styles/index.css";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();   

  const producto = productos.find(p => p.id === Number(id));

  if (!producto) {
    return (
      <section className="detail-notfound">
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate(-1)}>Volver al catálogo</button>
      </section>
    );
  }

  return (
    <article className="detail-container">
      
      <button onClick={() => navigate(-1)} className="detail-back">
         ← Volver a la tienda
      </button>

      <div className="detail-card">
        <div className="detail-image">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="detail-info">
          <span className="detail-tag">Fresco y Natural</span>
          <h1 className="detail-title">{producto.nombre}</h1>

          <div className="detail-price">
            <div className="detail-current">{producto.precio}€</div>
            <div className="detail-oldprice">
              <span className="detail-strike">3.50€</span>
              <span className="detail-discount">-20%</span>
            </div>
          </div>

          <div className="detail-description">
             <p>{producto.descripcion}</p>
             <p>Origen seleccionado de los mejores cultivos. Calidad garantizada.</p>
          </div>

          <div className="detail-quantity">
            <h3>Cantidad</h3>
            <div className="detail-buttons">
                <button>500g</button>
                <button>1kg</button>
                <button>A granel</button>
            </div>
          </div>

          <div className="detail-size">
            <h3>Tamaño</h3>
            <div className="detail-buttons">
                <button>Pequeño</button>
                <button>Mediano</button>
                <button>Grande</button>
            </div>
          </div>

          <div className="detail-unit">
             <span>Unidad</span>
             <div className="detail-counter">
                <button>−</button>
                <div className="detail-count">1</div>
                <button>+</button>
             </div>
          </div>

          <div className="detail-actions">
             <button aria-label="Favoritos">
                <img src="/imagenes/corazon.png" alt="Icono Corazón" />
             </button>
             <button>Añadir al carrito</button>
             <button>Comprar ahora</button>
          </div>

        </div>
      </div>
    </article>
  );
}
